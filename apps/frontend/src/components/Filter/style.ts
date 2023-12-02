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
  color: ${({ theme }) => theme.colors.dark_gray80};
  cursor: pointer;

  &:hover {
    border-radius: 6px;
    background: #eaeaea;
    color: #000000;
  }

  span {
    margin-left: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  span:not(:first-of-type) {
    margin-left: auto;
  }
`;
