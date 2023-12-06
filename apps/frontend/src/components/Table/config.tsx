import { ReactComponent as SortIcon } from '@assets/icons/icon_sort_24_filled.svg';
import type { ItemProps } from '@interfaces/shared';
import type { ReactNode } from 'react';

interface HeaderProps extends ItemProps {
  width?: number;
  icon?: ReactNode;
}

export const Headers: Array<HeaderProps> = [
  {
    key: 'name',
    value: '이름',
    width: 297,
    icon: <SortIcon />,
  },
  {
    key: 'category',
    value: '카테고리',
    icon: <SortIcon />,
  },
  {
    key: 'ext',
    value: '확장명',
    icon: <SortIcon />,
  },
  {
    key: 'product',
    value: '제품',
    icon: <SortIcon />,
  },
  {
    key: 'size',
    value: '사이즈',
    icon: <SortIcon />,
  },
  {
    key: 'tag',
    value: '태그',
    width: 383,
    icon: <SortIcon />,
  },
  {
    key: 'uploadDate',
    value: '업로드 날짜',
    icon: <SortIcon />,
  },
];
