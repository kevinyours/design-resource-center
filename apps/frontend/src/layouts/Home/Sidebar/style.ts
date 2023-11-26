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

export const NavTitle = styled.h3`
  font-weight: 600;
  font-size: 12px;
`;

export const NavWrapper = styled.div<{ hasBottomBorder?: boolean }>`
  margin: 6px 0 28px;
  padding-bottom: 20px;
  box-sizing: border-box;
  border-bottom: ${({ hasBottomBorder }) =>
    hasBottomBorder ? `1px solid #e0e0e0` : `none`};
`;
