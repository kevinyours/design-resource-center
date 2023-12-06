import styled from '@emotion/styled';

export const Container = styled.section`
  box-sizing: border-box;
  padding: 28px 32px;
  background: white;
  border: 1px solid #cfd4de;
  border-radius: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 682px;
  box-sizing: border-box;
  padding-bottom: 28px;

  h5 {
    margin: 0 0 0 8px;
    color: #333539;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
  }
`;

export const Content = styled.div`
  height: 540px;
  margin: 0 -32px;
  box-sizing: border-box;
  padding: 24px 32px;
  border-top: 1px solid #cfd4de;
  border-bottom: 1px solid #cfd4de;

  span {
    color: #8b8f98;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
  }
`;

export const Dropzone = styled.div`
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

export const Footer = styled.div`
  height: max-content;
  box-sizing: border-box;
  padding: 28px 0 0 0;
`;
