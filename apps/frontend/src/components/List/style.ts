import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 240px;
  width: 100%;
  height: max-content;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.ligth_gray40};
  background: ${({ theme }) => theme.colors.white};
`;

export const Item = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.dark_gray80};
  cursor: pointer;

  :hover {
    background: #f3f4f7;
  }
`;
