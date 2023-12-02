import { ReactComponent as Vision } from '@assets/logos/vision.svg';
import { ReactComponent as Setting } from '@assets/sidebar/setting.svg';
import { ReactComponent as User } from '@assets/sidebar/user.svg';
import Accordion from '@components/Accordion';
import Filter from '@components/Filter';
import SearchField from '@components/SearchField';
import { productFilters } from '@stores/atoms/filters';
import type { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { SidebarCategories, SidebarFilters } from './config';
import { useSidebar } from './hooks';
import { Account, Container, Content, NavTitle, NavWrapper } from './style';

const Sidebar: FC = () => {
  const currentFilterState = useRecoilValue(productFilters);
  const { updateProductFilters } = useSidebar();

  return (
    <Container>
      <Content>
        <Vision />
        <SearchField
          placeholder='검색어'
          withIcon={true}
          style={{ marginTop: 40 }}
        />
        <NavWrapper hasBottomBorder={true}>
          <NavTitle>카테고리</NavTitle>
          {SidebarCategories.map((props, idx) => (
            <Accordion {...props} key={`sidebar-category-${idx}`} />
          ))}
        </NavWrapper>
        <NavTitle>제품 필터</NavTitle>
        <NavWrapper>
          {SidebarFilters.map(({ name, icon }, idx) => (
            <Filter
              icon={icon}
              name={name}
              key={name}
              isChecked={currentFilterState[idx].value}
              onClick={updateProductFilters}
            />
          ))}
        </NavWrapper>
        <Account>
          <User />
          <span>조한정</span>
          <Setting style={{ marginLeft: 'auto' }} />
        </Account>
      </Content>
    </Container>
  );
};

export default Sidebar;
