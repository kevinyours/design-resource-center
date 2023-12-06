import type { TableDataProps } from '@components/Table';
import { atomicKeys } from '@constants/key';
import { atom } from 'recoil';

export const currentTableSelection = atom<TableDataProps[]>({
  key: atomicKeys.table.currentSelection,
  default: [],
});
