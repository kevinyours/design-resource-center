import Checkbox from '@components/Checkbox';
import type { FC } from 'react';
import { Headers } from './config';
import { Body, Container, Head } from './style';

interface TableProps {}

const Table: FC<TableProps> = () => {
  return (
    <Container>
      <Head>
        <tr>
          <th scope='column'>
            <span>
              <Checkbox />
            </span>
          </th>
          {Headers.map(({ key, value, width, icon }) => {
            return (
              <th scope='column' key={`admin-table-${key}`} style={{ width }}>
                {value}
                {icon}
              </th>
            );
          })}
        </tr>
      </Head>
      <Body></Body>
    </Container>
  );
};

export default Table;
