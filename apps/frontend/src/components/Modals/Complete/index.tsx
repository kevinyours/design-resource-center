import { ReactComponent as FireCracker } from '@assets/icons/icon_firecracker_green.svg';
import ModalBackground from '../Shared/Background';
import { Container } from './style';

const CompleteModal = () => {
  return (
    <ModalBackground>
      <Container>
        <FireCracker />
        <span>업로드를&nbsp;완료했습니다!</span>
      </Container>
    </ModalBackground>
  );
};

export default CompleteModal;
