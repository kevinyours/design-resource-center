import { ReactComponent as CopyIcon } from '@assets/icons/copy.svg';
import { ReactComponent as CopyDarkIcon } from '@assets/icons/copy_dark.svg';
import { ReactComponent as DownloadIcon } from '@assets/icons/download.svg';
import PrimatyButton from '@components/PrimaryButton';
import { ButtonThemeTypes } from '@components/PrimaryButton/theme';
import Select from '@components/Select';
import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { AssetTypeOptions, RatioOptions } from './config';
import {
  ButtonArea,
  ButtonContent,
  Container,
  Divider,
  ItemCount,
  Text,
} from './style';

interface FloatingControllerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const FloatingController: FC<FloatingControllerProps> = (props) => {
  return (
    <Container {...props}>
      <ItemCount>4개</ItemCount>
      <Text style={{ marginLeft: 12 }}>선택됨</Text>
      <Divider />

      <PrimatyButton
        buttonTheme={ButtonThemeTypes.GHOST}
        style={{ color: 'white' }}
      >
        선택&nbsp;해제
      </PrimatyButton>
      <Select items={RatioOptions} />
      <Select items={AssetTypeOptions} />
      <ButtonArea>
        <PrimatyButton buttonTheme={ButtonThemeTypes.SECONDARY}>
          <ButtonContent>
            <span>Code&nbsp;복사</span>
            <CopyIcon />
          </ButtonContent>
        </PrimatyButton>
        <PrimatyButton buttonTheme={ButtonThemeTypes.SECONDARY}>
          <ButtonContent>
            <span>클립보드</span>
            <CopyDarkIcon />
          </ButtonContent>
        </PrimatyButton>
        <PrimatyButton buttonTheme={ButtonThemeTypes.SECONDARY}>
          <ButtonContent>
            <span>다운로드</span>
            <DownloadIcon />
          </ButtonContent>
        </PrimatyButton>
      </ButtonArea>
    </Container>
  );
};

export default FloatingController;
