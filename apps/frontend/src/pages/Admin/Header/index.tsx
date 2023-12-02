import { ReactComponent as Icon } from '@assets/sidebar/icon.svg';
import Dropdown from '@components/Dropdown';
import PrimatyButton from '@components/PrimaryButton';
import { ButtonThemeTypes } from '@components/PrimaryButton/theme';
import SearchField from '@components/SearchField';
import type { FC } from 'react';
import { Container, FilterArea, SearchArea, Title, TitleArea } from './style';

const Header: FC = () => {
  return (
    <Container>
      <TitleArea>
        <Icon style={{ width: 36, height: 36 }} />
        <Title>아이콘</Title>
        <PrimatyButton
          buttonTheme={ButtonThemeTypes.SECONDARY}
          style={{
            width: 'max-content',
            height: 36,
            marginLeft: 'auto',
          }}
        >
          리소스&nbsp;요청&nbsp;및&nbsp;VOC
        </PrimatyButton>
        <PrimatyButton
          style={{
            width: 'max-content',
            height: 36,
            marginLeft: 8,
          }}
        >
          아이콘&nbsp;가이드
        </PrimatyButton>
      </TitleArea>
      <SearchArea>
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
      </SearchArea>
    </Container>
  );
};

export default Header;
