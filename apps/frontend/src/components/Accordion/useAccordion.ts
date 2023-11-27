import { useState } from 'react';

export function useAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggle };
}
