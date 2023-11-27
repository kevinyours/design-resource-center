import { ReactComponent as Icon } from '@assets/icons/icon_search_mono.svg';
import List from '@components/List';
import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { Container, Input } from './style';

interface SearchFieldProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  placeholder?: string;
  items?: Array<{ value: string; key: string }>;
  withIcon?: boolean;
  disabled?: boolean;
}

const SearchField: FC<SearchFieldProps> = ({
  placeholder,
  items = [],
  withIcon = false,
  disabled,
  ...rest
}) => {
  return (
    <Container {...rest} disabled={disabled}>
      {withIcon && <Icon />}
      <Input placeholder={placeholder} type='text' disabled={disabled} />
      {items.length > 0 && (
        <List
          items={items}
          style={{
            position: 'absolute',
            top: '44px',
            left: 0,
          }}
        />
      )}
    </Container>
  );
};

export default SearchField;
