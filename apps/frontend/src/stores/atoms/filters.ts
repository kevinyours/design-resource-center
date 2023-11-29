import { atomicKeys } from '@constants/key';
import { atom } from 'recoil';

const productFiltersInitailState: Array<{ key: string; value: boolean }> = [
  {
    key: 'HRP/INHR+',
    value: false,
  },
  {
    key: '잡다',
    value: false,
  },
  {
    key: '뉴로우',
    value: false,
  },
  {
    key: '역검/역진',
    value: false,
  },
  {
    key: '잡다 데브',
    value: false,
  },
  {
    key: '기타',
    value: false,
  },
];

export const productFilters = atom<Array<{ key: string; value: boolean }>>({
  key: atomicKeys.productFilters,
  default: productFiltersInitailState,
});
