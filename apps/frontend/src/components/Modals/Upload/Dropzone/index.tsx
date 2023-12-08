import { ReactComponent as Book } from '@assets/icons/icon_book_green.svg';
import { ReactComponent as DropzoneIcon } from '@assets/icons/icon_dragdrop_file.svg';
import type { FC } from 'react';
import type { DropEvent, FileRejection } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';
import { Area, FileList } from './style';

interface DropzoneProps {
  onDrop: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => void;
  fileList?: File[];
}

const Dropzone: FC<DropzoneProps> = ({ onDrop, fileList = [] }) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <span>파일을&nbsp;업로드&nbsp;하세요.</span>
      <br />
      <Area {...getRootProps()}>
        <input {...getInputProps()} />
        <DropzoneIcon />
        <p>파일&nbsp;선택</p>
        <span>또는&nbsp;여기로&nbsp;파일을&nbsp;끌어오세요</span>
      </Area>
      {fileList.length > 0 && (
        <FileList>
          <Book />
          <span>filename.jpg&nbsp;외&nbsp;15개</span>
        </FileList>
      )}
    </>
  );
};

export default Dropzone;
