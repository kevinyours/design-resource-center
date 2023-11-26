import type { Colors } from '@styles/colors';
import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from 'react';
import { Container } from './style';

interface PrimaryButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  themeColor?: typeof Colors;
}

const PrimatyButton: FC<PropsWithChildren<PrimaryButtonProps>> = ({
  themeColor,
  children,
  ...rest
}) => {
  return (
    <Container backgroundColor={themeColor} {...rest}>
      {children}
    </Container>
  );
};

export default PrimatyButton;
