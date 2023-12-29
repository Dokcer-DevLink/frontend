const storagePrefix = 'devlink_web_';

export const storage = {
  getValue: (keyword: string) => {
    if (!checkWindow()) {
      return;
    }
    return window.localStorage.getItem(`${storagePrefix}${keyword}`);
  },
  setValue: (keyword: string, value: string) => {
    if (!checkWindow()) {
      return;
    }
    return window.localStorage.setItem(`${storagePrefix}${keyword}`, value);
  },
  clearValue: (keyword: string) => {
    if (!checkWindow()) {
      return;
    }
    return window.localStorage.removeItem(`${storagePrefix}${keyword}`);
  },
};

const checkWindow = () => {
  return typeof window !== undefined;
};
