import { atomicKeys } from '@constants/key';
import { atom } from 'recoil';

export const completeModalStatus = atom<boolean>({
  key: atomicKeys.modals.complete,
  default: false,
});
