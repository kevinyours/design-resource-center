import Checkbox from '@components/Checkbox';
import Tag from '@components/Tag';
import type { FC, ReactElement } from 'react';
import { TableHeaders } from './config';
import { Body, Container, Data, DataRow, Head } from './style';

export interface TableDataProps {
  thumbnail: ReactElement;
  name: string;
  category: string;
  ext: string;
  product: string;
  size: string;
  tags: string[];
  createdAt: string;
}

interface TableProps {
  data?: TableDataProps[];
}

const Table: FC<TableProps> = ({ data = [] }) => {
  return (
    <Container>
      <Head>
        <tr>
          <th scope='column' style={{ width: 56 }}>
            <span>
              <Checkbox />
            </span>
          </th>
          {TableHeaders.map(({ key, value, width, icon }) => {
            return (
              <th
                scope='column'
                key={`admin-table-head-th-${key}`}
                style={{ width }}
              >
                {value}
                {icon}
              </th>
            );
          })}
        </tr>
      </Head>
      <Body>
        {data.map(
          (
            { thumbnail, name, category, ext, product, size, tags, createdAt },
            idx,
          ) => {
            return (
              <DataRow key={`admin-table-body-tr-${idx}`}>
                <Data>
                  <span>
                    <Checkbox />
                  </span>
                </Data>
                <Data>{thumbnail}</Data>
                <Data>{name}</Data>
                <Data>{category}</Data>
                <Data>{ext}</Data>
                <Data>{product}</Data>
                <Data>{size}</Data>
                <Data
                  style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}
                >
                  {tags.map((tag) => (
                    <Tag>{tag}</Tag>
                  ))}
                </Data>
                <Data>{createdAt}</Data>
              </DataRow>
            );
          },
        )}
      </Body>
    </Container>
  );
};

export default Table;
