import { ReactComponent as ACCA } from '@assets/items/acca.svg';
import type { FC } from 'react';
import Description from './Description';
import Item from './Item';
import Title from './Title';
import { Container, Content } from './style';

const HomePage: FC = () => {
  return (
    <Container>
      <Title>3D Graphic</Title>
      <Description>
        설명 텍스트 블라블라 타이틀 설명이 들어갑니다 코리안 로쎔로랑
      </Description>
      <Content>
        <Item
          icon={<ACCA style={{ width: 68, height: 68 }} />}
          name='ACC 도형'
        />
      </Content>
    </Container>
  );
};

export default HomePage;
