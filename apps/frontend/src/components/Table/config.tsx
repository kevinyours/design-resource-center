import { ReactComponent as SortIcon } from '@assets/icons/icon_sort_24_filled.svg';
import type { ItemProps } from '@interfaces/shared';
import type { ReactNode } from 'react';

interface TableHeaderProps extends ItemProps {
  width?: number;
  icon?: ReactNode;
}

export const TableHeaders: Array<TableHeaderProps> = [
  {
    key: 'thumbnail',
    value: '썸네일',
    width: 104,
  },
  {
    key: 'name',
    value: '이름',
    width: 193,
    icon: <SortIcon />,
  },
  {
    key: 'category',
    value: '카테고리',
    width: 144,
    icon: <SortIcon />,
  },
  {
    key: 'ext',
    value: '확장명',
    width: 144,
    icon: <SortIcon />,
  },
  {
    key: 'product',
    value: '제품',
    width: 144,
    icon: <SortIcon />,
  },
  {
    key: 'size',
    value: '사이즈',
    width: 144,
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
    width: 120,
    icon: <SortIcon />,
  },
];
