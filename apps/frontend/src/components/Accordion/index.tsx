import { ReactComponent as ArrowDown } from '@assets/directions/arrow_down.svg';
import { ReactComponent as ArrowRight } from '@assets/directions/arrow_right_accordion.svg';
import { type FC, type ReactNode } from 'react';

import { Container, Content, Header, Item } from './style';
import { useAccordion } from './useAccordion';

interface AccordionProps {
  icon?: ReactNode;
  name: string;
  items?: Array<{ value: string; key: string; isActive?: boolean }>;
}

const Accordion: FC<AccordionProps> = ({ icon, name, items = [] }) => {
  const { isOpen, toggle } = useAccordion();

  return (
    <Container>
      <Header onClick={toggle}>
        {icon}
        <span>{name}</span>
        <ArrowDown style={{ marginLeft: 'auto' }} />
      </Header>
      <Content isOpen={isOpen}>
        <Item hasLeftPadding={true}>
          <span>전체</span>
        </Item>
        <Item>
          <ArrowRight />
          <span>Flat icon</span>
        </Item>
        <Item hasLeftPadding={true}>
          <span>Glyph icon</span>
        </Item>
      </Content>
    </Container>
  );
};

export default Accordion;
