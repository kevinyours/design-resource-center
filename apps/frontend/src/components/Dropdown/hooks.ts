import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

export function useDropdown() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const onClickOutside = () => {
    setIsOpen(false);
  };

  const onClick = () => {
    setIsOpen(true);
  };

  useOnClickOutside(ref, onClickOutside);

  return { ref, isOpen, onClick };
}
