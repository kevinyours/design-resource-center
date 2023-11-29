import type { Nullable } from '@interfaces/shared';

export const syncAccessTokenEffects =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const accessToken: Nullable<string> = localStorage.get(key);

    if (accessToken !== null) {
      setSelf(JSON.parse(accessToken));
    }

    if (accessToken === null) {
      setSelf(null);
    }

    onSet((newValue: Nullable<string>, _: any, isReset: boolean) => {
      isReset ? localStorage.remove(key) : localStorage.set(key, newValue);
    });
  };
