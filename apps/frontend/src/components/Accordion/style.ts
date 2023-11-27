import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  background: transparent;
  color: #333539;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  box-sizing: border-box;
  padding: 6px 10px 6px 0;
  line-height: 24px;
  border-radius: 6px;

  :hover {
    background: #f3f4f7;
  }

  span {
    margin: 2px 0 0 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    font-family: Pretendard;
  }
`;

export const Content = styled.div<{ isOpen?: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 4px;
  height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
`;

export const Item = styled.a<{
  isActive?: boolean;
  hasLeftPadding?: boolean;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  padding: 6px 10px;
  line-height: 24px;
  border-radius: 6px;
  background: transparent;
  padding-left: ${({ hasLeftPadding }) => (hasLeftPadding ? 32 : 0)}px;

  span {
    margin-left: 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-family: Pretendard;
  }

  :hover {
    background: #e3ebff;
  }
`;
