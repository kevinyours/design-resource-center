import { ReactComponent as ArrowDown } from '@assets/directions/arrow_down.svg';
import { ReactComponent as ArrowRight } from '@assets/directions/arrow_right_accordion.svg';
import { type FC, type ReactNode } from 'react';

import { Container, Content, Header, Item } from './style';
import { useAccordion } from './useAccordion';

export type AccordionItemProps = {
  value: string;
  key: string;
};

export interface AccordionProps {
  icon?: ReactNode;
  name: string;
  items?: Array<AccordionItemProps>;
  activeKey?: string;
}

const Accordion: FC<AccordionProps> = ({
  icon,
  name,
  activeKey,
  items = [],
}) => {
  const { isOpen, toggle } = useAccordion();

  return (
    <Container>
      <Header onClick={toggle}>
        {icon}
        <span>{name}</span>
        <ArrowDown style={{ marginLeft: 'auto' }} />
      </Header>
      <Content isOpen={isOpen}>
        {items.map(({ value, key }) => {
          return (
            <Item key={key} hasLeftPadding={key !== activeKey}>
              {key === activeKey && <ArrowRight />}
              <span>{value}</span>
            </Item>
          );
        })}
        {/* <Item hasLeftPadding={true}>
          <span>전체</span>
        </Item>
        <Item>
          <ArrowRight />
          <span>Flat icon</span>
        </Item>
        <Item hasLeftPadding={true}>
          <span>Glyph icon</span>
        </Item> */}
      </Content>
    </Container>
  );
};

export default Accordion;
