import { ReactComponent as Icon } from '@assets/icons/icon_search_mono.svg';
import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { Container, Input } from './style';

interface SearchFieldProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  placeholder?: string;
}

const SearchField: FC<SearchFieldProps> = ({ placeholder, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon />
      <Input placeholder={placeholder} />
    </Container>
  );
};

export default SearchField;
