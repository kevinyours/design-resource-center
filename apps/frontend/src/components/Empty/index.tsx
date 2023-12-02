import { ReactComponent as EmptyIcon } from '@assets/icons/empty.svg';
import type { FC } from 'react';
import { Container, TextArea } from './style';

const Empty: FC = () => {
  return (
    <Container>
      <EmptyIcon />
      <TextArea>
        <p>검색된&nbsp;결과가&nbsp;없습니다</p>
        <span>
          다른&nbsp;검색어를&nbsp;입력하거나&nbsp;필터를&nbsp;수정해보세요.
        </span>
      </TextArea>
    </Container>
  );
};

export default Empty;
