import styled from '@emotion/styled';

export const Container = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const Content = styled.div<{ isChecked?: boolean }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${({ isChecked, theme }) =>
    isChecked ? theme.colors.navy80 : theme.colors.white};
  border: 2px solid
    ${({ isChecked, theme }) =>
      isChecked ? theme.colors.navy80 : theme.colors.ligth_gray40};
  border-radius: 4px;
  transition: all 0.5s;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.navy80};
  }

  ${Icon} {
    visibility: ${({ isChecked }) => (isChecked ? 'visible' : 'hidden')};
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;
