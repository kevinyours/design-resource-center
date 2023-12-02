import styled from '@emotion/styled';

export const Container = styled.div``;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
`;

export const Title = styled.h4`
  margin: 0 0 0 4px;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
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
