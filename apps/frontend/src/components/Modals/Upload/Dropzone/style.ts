import styled from '@emotion/styled';

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 440px;
  margin-top: 20px;
  border: 2px dashed #cfd4de;
  border-radius: 4px;
  color: #a8acb4;
  cursor: pointer;

  p {
    margin: 8px 0;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const FileList = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 14px 24px;
  margin-top: 20px;
  border-radius: 8px;
  background: #eef6ff;

  span {
    margin-left: 12px;
    color: #333539;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }
`;
