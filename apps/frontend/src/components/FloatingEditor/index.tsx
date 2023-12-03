import { ReactComponent as ClearIcon } from '@assets/icons/clear.svg';
import PrimatyButton from '@components/PrimaryButton';
import { ButtonThemeTypes } from '@components/PrimaryButton/theme';
import Select from '@components/Select';

import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import { ProductOptions, TypeOptions } from './config';
import {
  ButtonArea,
  ButtonContent,
  Container,
  Divider,
  ItemCount,
  Text,
} from './style';

interface FloatingEditorProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const FloatingEditor: FC<FloatingEditorProps> = (props) => {
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
      <Select items={TypeOptions} />
      <Select items={ProductOptions} />
      <ButtonArea>
        <PrimatyButton buttonTheme={ButtonThemeTypes.SECONDARY}>
          <ButtonContent>
            <span>태그&nbsp;일괄&nbsp;등록</span>
          </ButtonContent>
        </PrimatyButton>
        <PrimatyButton buttonTheme={ButtonThemeTypes.SECONDARY}>
          <ButtonContent>
            <span>가이드&nbsp;일괄&nbsp;등록</span>
          </ButtonContent>
        </PrimatyButton>
        <PrimatyButton buttonTheme={ButtonThemeTypes.SECONDARY}>
          <ButtonContent>
            <ClearIcon />
            <span>리소스&nbsp;삭제</span>
          </ButtonContent>
        </PrimatyButton>
      </ButtonArea>
    </Container>
  );
};

export default FloatingEditor;
