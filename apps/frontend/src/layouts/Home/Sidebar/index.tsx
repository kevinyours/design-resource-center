import { ReactComponent as Vision } from '@assets/logos/vision.svg';
import Accordion from '@components/Accordion';
import Filter from '@components/Filter';
import SearchField from '@components/SearchField';
import type { FC } from 'react';
import { SidebarItems } from './config';
import { Container, Content, NavTitle, NavWrapper } from './style';

const Sidebar: FC = () => {
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
          {SidebarItems.map((props) => (
            <Accordion {...props} />
          ))}
        </NavWrapper>
        <NavTitle>제품 필터</NavTitle>
        <NavWrapper>
          <Filter />
        </NavWrapper>
        {/* <NavWrapper>
          <NavItem
            icon={<InHR style={{ width: 24, height: 24 }} />}
            name={'INHR+'}
            totalCount={123}
          />
          <NavItem
            icon={<JOBDA style={{ width: 24, height: 24 }} />}
            name={'JOBDA'}
            totalCount={123}
          />
          <NavItem
            icon={<JOBDA_DEV style={{ width: 24, height: 24 }} />}
            name={'JOBDA DEV'}
            totalCount={123}
          />
          <NavItem
            icon={<ACCA style={{ width: 24, height: 24 }} />}
            name={'ACCA'}
            totalCount={123}
          />
          <NavItem
            icon={<ATS style={{ width: 24, height: 24 }} />}
            name={'ATS'}
            totalCount={123}
          />
        </NavWrapper>
        <NavWrapper style={{ marginTop: 84 }}>
          <NavItem
            icon={<Speaker style={{ width: 24, height: 24 }} />}
            name={'리소스 센터 사용가이드'}
          />
          <NavItem
            icon={<Speaker style={{ width: 24, height: 24 }} />}
            name={'이런거 만들어 주세요!'}
          />
        </NavWrapper> */}
      </Content>
    </Container>
  );
};

export default Sidebar;
