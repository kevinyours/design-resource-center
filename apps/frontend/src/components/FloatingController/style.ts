import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 798px;
  height: 60px;
  box-sizing: border-box;
  padding: 12px 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.dark_gray90};
`;

export const ItemCount = styled.div`
  width: max-content;
  height: 28px;
  box-sizing: border-box;
  padding: 4px 12px;
  background: #3184ff;
  border-radius: 26px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: white;
`;

export const Text = styled.span`
  color: white;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

export const Divider = styled.div`
  width: 1px;
  height: calc(100% - 14px);
  box-sizing: border-box;
  margin: 0 2px 0 20px;
  background: white;
`;

export const FileInfoArea = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

export const ButtonContent = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
`;
