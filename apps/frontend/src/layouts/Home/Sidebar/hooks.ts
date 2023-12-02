import { productFilters } from '@stores/atoms/filters';
import { useSetRecoilState } from 'recoil';

export function useSidebar() {
  const setProductFilters = useSetRecoilState(productFilters);

  const updateProductFilters = (name: string, isChecked: boolean) => {
    setProductFilters((prev) => {
      const items = prev.map(({ key, value }) => {
        return key === name ? { key, value: !isChecked } : { key, value };
      });

      console.log('items:', items);

      return [...items];
    });
  };

  return { updateProductFilters };
}
