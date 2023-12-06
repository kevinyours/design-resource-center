import styled from '@emotion/styled';

export const Container = styled.table`
  width: 100%;
  box-shadow: 0 0 0 1px #cfd4de;
  border-style: hidden;
  border-radius: 50%;
  border-radius: 10px;
  border-collapse: collapse;
`;

export const Head = styled.thead`
  font-weight: 500;
  font-size: 14px;
  color: #8b8f98;
  line-height: 24px;
  text-align: left;

  th {
    vertical-align: middle;
    box-sizing: border-box;
    padding: 14px 0;
    height: 100%;
    line-height: 24px;

    svg {
      vertical-align: text-top;
      margin-top: -1px;
    }

    :first-of-type {
      padding: 14px 0 14px 16px;
    }

    :last-of-type {
      padding: 14px 16px 14px 0;
    }
  }
`;

export const Body = styled.tbody``;
