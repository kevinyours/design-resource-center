import styled from '@emotion/styled';

export const Container = styled.aside`
  min-width: 320px;
  height: 100%;
  padding: 40px 24px 32px;
  border-right: 1px solid #dbdee6;
  background: #eef6ff;
`;

export const Content = styled.div`
  height: calc(100vh - 48px);
`;

export const NavTitle = styled.h4`
  margin: 12px 0 0;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.light_gray70};
`;

export const NavWrapper = styled.div<{ hasBottomBorder?: boolean }>`
  padding: 12px 0;
  box-sizing: border-box;
  border-bottom: ${({ hasBottomBorder }) =>
    hasBottomBorder ? `1px solid #e0e0e0` : `none`};
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
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
`;
