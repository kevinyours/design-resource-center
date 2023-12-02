import { atomicKeys } from '@constants/key';
import type { Nullable } from '@interfaces/shared';
import { syncAccessTokenEffects } from '@stores/effects/auth';
import { atom } from 'recoil';

export const accessToken = atom<Nullable<string>>({
  key: atomicKeys.accessToken,
  default: null,
  effects: [syncAccessTokenEffects(atomicKeys.accessToken)],
});
