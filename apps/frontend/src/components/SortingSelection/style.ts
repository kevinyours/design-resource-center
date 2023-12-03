import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 4px;
  box-sizing: border-box;
  padding: 2px;
  border: 1px solid ${({ theme }) => theme.colors.ligth_gray20};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.ligth_gray20};
`;

export const Button = styled.button<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: 32px;
  background: ${({ isActive, theme }) =>
    isActive ? 'white' : theme.colors.ligth_gray20};
  outline: none;
  border: ${({ isActive }) => (isActive ? `1px solid #cfd4de` : 'none')};
  border-radius: 4px;
  cursor: pointer;

  :active {
    opacity: 0.8;
  }
`;
