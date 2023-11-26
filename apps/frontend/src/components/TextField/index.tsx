import type { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { Container } from './style';

interface TextFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const TextField: FC<TextFieldProps> = (props) => {
  return <Container {...props} />;
};

export default TextField;
