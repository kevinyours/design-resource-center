import { ReactComponent as ACCA } from '@assets/sidebar/acca.svg';
import { ReactComponent as ETC } from '@assets/sidebar/etc.svg';
import { ReactComponent as Folder } from '@assets/sidebar/folder.svg';
import { ReactComponent as Graphic } from '@assets/sidebar/graphic.svg';
import { ReactComponent as HRP } from '@assets/sidebar/hrp.svg';
import { ReactComponent as Icon } from '@assets/sidebar/icon.svg';
import { ReactComponent as JobdaDev } from '@assets/sidebar/jobda-dev.svg';
import { ReactComponent as JOBDA } from '@assets/sidebar/jobda.svg';
import { ReactComponent as NEWRROW } from '@assets/sidebar/newrrow.svg';
import { ReactComponent as Photo } from '@assets/sidebar/photo.svg';
import { ReactComponent as Video } from '@assets/sidebar/video.svg';
import type { AccordionProps } from '@components/Accordion';
import type { FilterProps } from '../Filter';

const svgStyle = { width: 32, height: 32 };

export const SidebarCategories: AccordionProps[] = [
  {
    icon: <Icon style={svgStyle} />,
    name: '아이콘',
    items: [
      {
        value: '전체',
        key: 'icon-all',
      },
      {
        value: 'Flat icon',
        key: 'flat-icon',
      },
      {
        value: 'Glyph icon',
        key: 'glyph-icon',
      },
    ],
  },
  {
    icon: <Video style={svgStyle} />,
    name: '영상',
    items: [],
  },
  {
    icon: <Photo style={svgStyle} />,
    name: '사진',
    items: [],
  },
  {
    icon: <Graphic style={svgStyle} />,
    name: '그래픽',
    items: [],
  },
  {
    icon: <Folder style={svgStyle} />,
    name: '기타',
    items: [],
  },
];

export const SidebarFilters: FilterProps[] = [
  {
    icon: <HRP style={svgStyle} />,
    name: 'HRP/INHR+',
  },
  {
    icon: <JOBDA style={svgStyle} />,
    name: '잡다',
  },
  {
    icon: <NEWRROW style={svgStyle} />,
    name: '뉴로우',
  },
  {
    icon: <ACCA style={svgStyle} />,
    name: '역검/역진',
  },
  {
    icon: <JobdaDev style={svgStyle} />,
    name: '잡다 데브',
  },
  {
    icon: <ETC style={svgStyle} />,
    name: '기타',
  },
];
