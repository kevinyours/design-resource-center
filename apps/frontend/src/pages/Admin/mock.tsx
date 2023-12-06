import { ReactComponent as DonutChart } from '@assets/icons/dount_chart.svg';
import type { TableDataProps } from '../../components/Table/index';

export const tableBodyMockData: TableDataProps[] = Array.from(
  { length: 12 },
  () =>
    ({
      thumbnail: <DonutChart />,
      name: 'resource',
      category: 'flat icon',
      ext: 'svg',
      product: '공용',
      size: '48 x 48',
      tags: ['Smile', 'happy'],
      createdAt: '23.12.30',
    }) as TableDataProps,
);
