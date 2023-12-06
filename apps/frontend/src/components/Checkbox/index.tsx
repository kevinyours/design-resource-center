import type {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
} from 'react';
import { forwardRef, type FC } from 'react';
import { Container, Content, Icon, Input } from './style';

export type CheckboxOnClickProps = (props: {
  id: string;
  isActive: boolean;
}) => void;

interface CheckboxProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onClick'
  > {
  isActive?: boolean;
  onClick?: CheckboxOnClickProps;
}

const Checkbox: FC<CheckboxProps> = (
  { id, isActive = false, onClick, children, style, ...rest }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <Container
      as={'a'}
      data-testid={id}
      htmlFor={id}
      onClick={() =>
        onClick?.({
          id: id || '',
          isActive,
        })
      }
      style={style}
    >
      <Input {...rest} id={id} ref={ref} type={'checkbox'} />
      <Content isChecked={isActive}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='19 7 10 17 5 12' />
        </Icon>
      </Content>
      {children}
    </Container>
  );
};

export default forwardRef<HTMLInputElement, CheckboxProps>(Checkbox);
