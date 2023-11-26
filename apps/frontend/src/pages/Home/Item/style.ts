import styled from '@emotion/styled';

export const Container = styled.a`
  display: block;
  width: 110px;
  height: 124px;
  padding: 14px 10px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    background: #e9f4ff;
  }

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #6a7081;
  }
`;
