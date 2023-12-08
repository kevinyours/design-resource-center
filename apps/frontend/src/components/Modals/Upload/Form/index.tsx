import TextField from '@components/TextField';
import type { FC } from 'react';
import {
  Container,
  LeftArea,
  Preview,
  PropertyArea,
  PropertyName,
  RightArea,
} from './style';

const Form: FC = () => {
  return (
    <Container>
      <LeftArea>
        <Preview />
        {/* <PrimatyButton
          buttonTheme={ButtonThemeTypes.LINE}
          style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}
        >
          파일&nbsp;변경
          <UpdateIcon style={{ marginLeft: 4 }} />
        </PrimatyButton> */}
      </LeftArea>
      <RightArea>
        <PropertyArea>
          <PropertyName required={true}>리소스&nbsp;명</PropertyName>
          <TextField
            style={{ width: 265, height: 36, backgroundColor: 'white' }}
          />
        </PropertyArea>
        <PropertyArea>
          <PropertyName>가이드&nbsp;연결</PropertyName>
          <TextField
            style={{ width: 265, height: 36, backgroundColor: 'white' }}
          />
        </PropertyArea>
        <PropertyArea>
          <PropertyName required={true}>카테고리</PropertyName>
          <TextField
            style={{ width: 265, height: 36, backgroundColor: 'white' }}
          />
        </PropertyArea>
        <PropertyArea>
          <PropertyName required={true}>파일&nbsp;형식</PropertyName>
          <TextField
            style={{ width: 265, height: 36, backgroundColor: 'white' }}
          />
        </PropertyArea>
        <PropertyArea>
          <PropertyName required={true}>제품</PropertyName>
          <TextField
            style={{ width: 265, height: 36, backgroundColor: 'white' }}
          />
        </PropertyArea>
        <PropertyArea>
          <PropertyName>검색&nbsp;태그</PropertyName>
          <TextField
            style={{ width: 265, height: 36, backgroundColor: 'white' }}
          />
        </PropertyArea>
      </RightArea>
    </Container>
  );
};

export default Form;
