import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

export enum ButtonThemeTypes {
  PRIMARY,
  SECONDARY,
  GHOST,
  LINE,
}

export const ButtonThemes: Record<ButtonThemeTypes, SerializedStyles> = {
  [ButtonThemeTypes.PRIMARY]: css`
    color: white;
    background: #134cde;
    border: solid 2px #134cde;

    :focus {
      border: solid 2px #8fbcff;
    }

    :active {
      opacity: 0.8;
    }

    :hover {
      border: solid 2px #16378f;
      background: #16378f;
    }
  `,
  [ButtonThemeTypes.SECONDARY]: css`
    color: #333539;
    background: #eef6ff;
    border: solid 2px #eef6ff;

    :focus {
      border: solid 2px #8fbcff;
      background: #eef6ff;
    }

    :active {
      opacity: 0.8;
    }

    :hover {
      border: solid 2px #8fbcff;
      background: #f3f4f7;
    }
  `,
  [ButtonThemeTypes.GHOST]: css`
    color: #333539;
    background: transparent;
    border: solid 2px transparent;

    :focus {
      border: solid 2px #8fbcff;
    }

    :active {
      opacity: 0.8;
    }

    :hover {
      border: solid 2px #f3f4f7;
    }
  `,
  [ButtonThemeTypes.LINE]: css`
    color: #333539;
    background: white;
    border: solid 2px #cfd4de;

    :focus {
      border: solid 2px #8fbcff;
      background: #eef6ff;
    }

    :active {
      opacity: 0.8;
    }

    :hover {
      border: solid 2px #cfd4de;
      background: #f3f4f7;
    }
  `,
};
