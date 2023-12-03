import { ReactComponent as GridIcon } from '@assets/icons/grid.svg';
import { ReactComponent as StackIcon } from '@assets/icons/stack.svg';

import type { FC } from 'react';
import { Button, Container } from './style';

export enum SortType {
  GRID,
  LIST,
}

interface SortingSelectionProps {
  currentType?: SortType;
  onClick?: (sortType: SortType) => void;
}

const SortingSelection: FC<SortingSelectionProps> = ({
  currentType = SortType.GRID,
  onClick,
}) => {
  return (
    <Container>
      <Button
        isActive={SortType.GRID === currentType}
        onClick={() => onClick?.(SortType.GRID)}
      >
        <GridIcon />
      </Button>
      <Button
        isActive={SortType.LIST === currentType}
        onClick={() => onClick?.(SortType.LIST)}
      >
        <StackIcon />
      </Button>
    </Container>
  );
};

export default SortingSelection;
