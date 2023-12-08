import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  min-height: 437px;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 12px;
  background: #f1f4fa;
`;

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Preview = styled.div`
  width: 168px;
  height: 240px;
  border-radius: 4px;
  border: 1px solid #cfd4de;
  background: #ffffff;
`;

export const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 389px;
`;

export const PropertyArea = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;

export const PropertyName = styled.div<{ required?: boolean }>`
  width: 80px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  color: #8b8f98;

  ${({ required }) =>
    required &&
    `::after {
      content: ' *';
      color: #ff3030;
    }`};
`;
