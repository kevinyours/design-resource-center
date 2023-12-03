import Dropdown from '@components/Dropdown';
import PrimatyButton from '@components/PrimaryButton';
import SearchField from '@components/SearchField';
import SortingSelection from '@components/SortingSelection';
import type { FC } from 'react';
import { Container, FilterArea, SortArea } from './style';

const Search: FC = () => {
  return (
    <Container>
      <SearchField withIcon={true} placeholder='검색해주세요.' />
      <FilterArea>
        <Dropdown
          name='제품'
          items={[{ key: '1', value: '1' }]}
          listSize={240}
        />
        <Dropdown name='색상' listSize={240} />
        <Dropdown name='타입' listSize={240} />
      </FilterArea>
      <SortArea>
        <SortingSelection />
        <PrimatyButton>리소스&nbsp;업로드</PrimatyButton>
      </SortArea>
    </Container>
  );
};

export default Search;
