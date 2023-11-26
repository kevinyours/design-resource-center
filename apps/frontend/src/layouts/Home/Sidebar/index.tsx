import { ReactComponent as Vision } from '@assets/logos/vision.svg';
import { ReactComponent as ACCA } from '@assets/sidebar/acca.svg';
import { ReactComponent as ATS } from '@assets/sidebar/ats.svg';
import { ReactComponent as InHR } from '@assets/sidebar/inhr.svg';
import { ReactComponent as JOBDA } from '@assets/sidebar/jobda.svg';
import { ReactComponent as JOBDA_DEV } from '@assets/sidebar/jobda_dev.svg';
import { ReactComponent as SpaceShip } from '@assets/sidebar/spaceship.svg';
import { ReactComponent as Speaker } from '@assets/sidebar/speaker.svg';
import SearchField from '@components/SearchField';
import type { FC } from 'react';
import NavItem from './Item';
import { Container, Content, NavTitle, NavWrapper } from './style';

const Sidebar: FC = () => {
  return (
    <Container>
      <Content>
        <Vision />
        <SearchField placeholder='검색어' />
        <NavWrapper hasBottomBorder={true}>
          <NavItem
            icon={<SpaceShip style={{ width: 24, height: 24 }} />}
            name={'전체'}
            totalCount={1234}
          />
          <NavItem
            icon={<SpaceShip style={{ width: 24, height: 24 }} />}
            name={'Icon'}
            totalCount={23}
          />
          <NavItem
            icon={<SpaceShip style={{ width: 24, height: 24 }} />}
            name={'3D Grahic'}
            totalCount={77}
          />
          <NavItem
            icon={<SpaceShip style={{ width: 24, height: 24 }} />}
            name={'2D Grahic'}
            totalCount={146}
          />
          <NavItem
            icon={<SpaceShip style={{ width: 24, height: 24 }} />}
            name={'Illust'}
            totalCount={234}
          />
          <NavItem
            icon={<SpaceShip style={{ width: 24, height: 24 }} />}
            name={'Movie'}
            totalCount={75}
          />
          <NavItem
            icon={<SpaceShip style={{ width: 24, height: 24 }} />}
            name={'Photo'}
            totalCount={123}
          />
        </NavWrapper>
        <NavTitle>제품별 필터</NavTitle>
        <NavWrapper>
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
        </NavWrapper>
      </Content>
    </Container>
  );
};

export default Sidebar;
