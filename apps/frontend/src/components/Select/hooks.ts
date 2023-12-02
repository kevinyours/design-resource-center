import type { ItemProps } from '@interfaces/shared';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

export function useSelect(items: ItemProps[]) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState(
    items.length > 0 ? items[0].value : '',
  );

  const onClickOutside = () => {
    setIsOpen(false);
  };

  const onClick = () => {
    setIsOpen(true);
  };

  useOnClickOutside(ref, onClickOutside);

  return { ref, isOpen, onClick, defaultValue };
}
