import { ReactComponent as Folder } from '@assets/sidebar/folder.svg';
import { ReactComponent as Graphic } from '@assets/sidebar/graphic.svg';
import { ReactComponent as Icon } from '@assets/sidebar/icon.svg';
import { ReactComponent as Photo } from '@assets/sidebar/photo.svg';
import { ReactComponent as Video } from '@assets/sidebar/video.svg';
import type { AccordionProps } from '@components/Accordion';

const svgStyle = { width: 32, height: 32 };

export const SidebarItems: AccordionProps[] = [
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
