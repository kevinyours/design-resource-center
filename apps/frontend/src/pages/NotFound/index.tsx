import { ReactComponent as NotFoundIcon } from '@assets/icons/404.svg';
import type { FC } from 'react';
import { Container, TextArea } from './style';

const NotFoundPage: FC = () => {
  return (
    <Container>
      <NotFoundIcon />
      <TextArea>
        <p>검색된&nbsp;결과가&nbsp;없습니다</p>
        <span>
          다른&nbsp;검색어를&nbsp;입력하거나&nbsp;필터를&nbsp;수정해보세요.
        </span>
      </TextArea>
    </Container>
  );
};

export default NotFoundPage;
