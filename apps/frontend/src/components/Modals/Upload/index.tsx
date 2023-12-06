import { ReactComponent as CloseButton } from '@assets/icons/button_close.svg';
import { ReactComponent as Folder } from '@assets/icons/folder_add_blue.svg';
import { ReactComponent as DropzoneIcon } from '@assets/icons/icon_dragdrop_file.svg';
import PrimatyButton from '@components/PrimaryButton';
import type { FC } from 'react';
import { useDropzone } from 'react-dropzone';
import ModalContainer from '../Shared/Container';
import { Container, Content, Dropzone, Footer, Header } from './style';

interface FileUploadModalProps {}

const FileUploadModal: FC<FileUploadModalProps> = () => {
  const { getRootProps, getInputProps } = useDropzone();

  return (
    <ModalContainer>
      <Container>
        <Header>
          <Folder />
          <h5>리소스&nbsp;등록</h5>
          <CloseButton style={{ marginLeft: 'auto', cursor: 'pointer' }} />
        </Header>
        <Content>
          <span>파일을&nbsp;업로드&nbsp;하세요.</span>
          <br />
          <Dropzone {...getRootProps()}>
            <input {...getInputProps()} />
            <DropzoneIcon />
            <p>파일&nbsp;선택</p>
            <span>또는&nbsp;여기로&nbsp;파일을&nbsp;끌어오세요</span>
          </Dropzone>
        </Content>
        <Footer>
          <PrimatyButton
            disabled={true}
            style={{
              width: '100%',
              height: 56,
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            다음으로
          </PrimatyButton>
        </Footer>
      </Container>
    </ModalContainer>
  );
};

export default FileUploadModal;
