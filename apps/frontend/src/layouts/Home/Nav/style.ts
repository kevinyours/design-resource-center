import styled from '@emotion/styled';

export const Container = styled.nav`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 14px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #dbdee6;
  background: #f5f5f8;
`;

export const NavLink = styled.a<{ isActive?: boolean }>`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: ${({ isActive }) => (isActive ? '#6A7081' : '#adb3c2')};
  cursor: pointer;
`;
