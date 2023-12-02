import { selectorKeys } from '@constants/key';
import { productFilters } from '@stores/atoms/filters';
import { selector } from 'recoil';

export const sidebarFilters = selector({
  key: selectorKeys.sidebarFilters,
  get: ({ get }) => {
    return get(productFilters);
  },
});
