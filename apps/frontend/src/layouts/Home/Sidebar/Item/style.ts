import styled from '@emotion/styled';

export const Container = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  margin: 0;
  padding: 0 8px 0 0;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #6a7081;
  cursor: pointer;

  &:hover {
    color: #000000;
    border-radius: 6px;
    background: #eaeaea;
  }

  span {
    margin-left: 14px;
  }

  span:not(:first-of-type) {
    margin-left: auto;
  }
`;
