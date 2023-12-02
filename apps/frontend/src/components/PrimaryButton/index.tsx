import type { Colors } from '@styles/colors';
import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  PropsWithChildren,
} from 'react';
import { Container } from './style';
import { ButtonThemeTypes } from './theme';

interface PrimaryButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  themeColor?: typeof Colors;
  buttonTheme?: ButtonThemeTypes;
}

const PrimatyButton: FC<PropsWithChildren<PrimaryButtonProps>> = ({
  themeColor,
  buttonTheme = ButtonThemeTypes.PRIMARY,
  children,
  ...rest
}) => {
  return (
    <Container backgroundColor={themeColor} buttonTheme={buttonTheme} {...rest}>
      {children}
    </Container>
  );
};

export default PrimatyButton;
