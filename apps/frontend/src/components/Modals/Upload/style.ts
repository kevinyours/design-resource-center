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
  min-height: 540px;
  height: max-content;
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

export const FileList = styled.div``;

export const Footer = styled.div`
  height: max-content;
  box-sizing: border-box;
  padding: 28px 0 0 0;
`;
