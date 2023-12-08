import axios from 'axios';
import { useState } from 'react';
import type { DropEvent, FileRejection } from 'react-dropzone';

const CHUNK_SIZE = 5 * 1024 * 1024;

export function useFileUpload() {
  const [fileList, setFileList] = useState<File[]>([]);

  const upload = async (files: File[]) => {
    let partIndex = 1,
      flag = 0;
    const multiUploadArray = [];

    const originFile = files[0];
    const fileSize = originFile.size;

    const res = await axios.post(
      'http://localhost:8080/api/v1/files/initiate-upload',
      {
        fileName: originFile.name,
      },
    );

    const uploadId = res.data.contents.uploadId;
    const fileKey = res.data.contents.fileKey;

    const chunkSize = 5 * 1024 * 1024; // 5MB
    const chunkCount = Math.floor(fileSize / chunkSize) + 1;
    console.log('chunkCount => ' + chunkCount);
    console.log('fileSize => ' + fileSize);

    for (let uploadCount = 1; uploadCount < chunkCount + 1; uploadCount++) {
      const blob = originFile.slice(
        flag,
        Math.min(originFile.size, flag + CHUNK_SIZE),
      );
      const byteArray = await blobToUint8Array(blob);
      const base64String = byteArrayToBase64(byteArray);

      const res = await sendEncodedByteData(
        uploadId,
        base64String,
        fileKey,
        partIndex,
      );
      if (res) {
        // 전송 성공
        multiUploadArray.push({
          partNumber: partIndex,
          etag: res.data.contents.etag,
        });

        flag += CHUNK_SIZE;
        partIndex += 1;
      } else {
        // 전송중 에러
        // error handle
      }
    }

    const completed = await completeUpload(uploadId, fileKey, multiUploadArray);
    console.log(
      'complete!! => response => ' + JSON.stringify(completed.data.contents),
    );
  };

  const blobToUint8Array = async (blob: Blob): Promise<Uint8Array> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = function (event: ProgressEvent<FileReader>) {
        // The result property contains the ArrayBuffer
        const arrayBuffer = event.target!.result;
        // Resolve with the Uint8Array
        resolve(new Uint8Array(arrayBuffer as ArrayBuffer));
      };
      fileReader.onerror = function (error) {
        reject(error);
      };
      // Read the Blob as an ArrayBuffer
      fileReader.readAsArrayBuffer(blob);
    });
  };

  const byteArrayToBase64 = (byteArray: Uint8Array) => {
    // Use the TextDecoder API or btoa directly
    if (typeof TextDecoder !== 'undefined') {
      // Use TextDecoder if available (modern browsers)
      const decoder = new TextDecoder('utf-8');
      return btoa(encodeURIComponent(decoder.decode(byteArray)));
    } else {
      // Use btoa directly (may not support non-ASCII characters)
      return btoa(String.fromCharCode.apply(null, byteArray as any));
    }
  };

  const sendEncodedByteData = async (
    uploadId: string,
    base64String: string,
    fileKey: string,
    partIndex: number,
  ) => {
    return axios.post('http://localhost:8080/api/v1/files/upload-multipart', {
      uploadId: uploadId,
      fileKey: fileKey,
      partNumber: partIndex,
      parts: base64String,
    });
  };

  const completeUpload = async (
    uploadId: string,
    fileKey: string,
    partETags: Array<{
      partNumber: number;
      etag: any;
    }>,
  ) => {
    return axios.post('http://localhost:8080/api/v1/files/complete-upload', {
      uploadId: uploadId,
      fileKey: fileKey,
      partETags: partETags,
    });
  };

  const onDrop: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => void = (acceptedFiles) => {
    console.log('acceptedFiles:', acceptedFiles);
    setFileList(acceptedFiles);
  };

  return { onDrop, fileList, upload };
}
