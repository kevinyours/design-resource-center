import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const FilterArea = styled.div`
  display: flex;
  gap: 16px;
  height: 36px;
  box-sizing: border-box;
  padding-left: 16px;
  margin-left: 16px;
  border-left: 1px solid ${({ theme }) => theme.colors.ligth_gray40};
`;

export const SortArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
`;
