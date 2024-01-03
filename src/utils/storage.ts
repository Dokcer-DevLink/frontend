const storagePrefix = 'devlink_web_';

export const storage = {
  getValue: (keyword: string) => {
    return window.localStorage.getItem(`${storagePrefix}${keyword}`);
  },
  setValue: (keyword: string, value: string) => {
    return window.localStorage.setItem(`${storagePrefix}${keyword}`, value);
  },
  clearValue: (keyword: string) => {
    return window.localStorage.removeItem(`${storagePrefix}${keyword}`);
  },
};
