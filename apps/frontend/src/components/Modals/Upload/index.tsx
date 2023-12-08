import { ReactComponent as CloseButton } from '@assets/icons/button_close.svg';
import { ReactComponent as Folder } from '@assets/icons/folder_add_blue.svg';
import PrimatyButton from '@components/PrimaryButton';
import { useFileUpload } from '@hooks/useFileUpload';
import type { FC } from 'react';
import ModalContainer from '../Shared/Container';
import Dropzone from './Dropzone';
import Form from './Form';
import { useFileUploadModal } from './hooks';
import { Container, Content, Footer, Header } from './style';

interface FileUploadModalProps {
  isOpen?: boolean;
}

const FileUploadModal: FC<FileUploadModalProps> = ({ isOpen = false }) => {
  const { onDrop, fileList } = useFileUpload();
  const { onNext, stage } = useFileUploadModal(isOpen);

  return (
    <ModalContainer>
      <Container>
        <Header>
          <Folder />
          <h5>리소스&nbsp;등록</h5>
          <CloseButton style={{ marginLeft: 'auto', cursor: 'pointer' }} />
        </Header>
        <Content>
          {stage === 0 && <Dropzone onDrop={onDrop} />}
          {stage === 1 && (
            <>
              {fileList.map(() => (
                <Form />
              ))}
            </>
          )}
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
