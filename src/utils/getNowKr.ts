export const getNowKr = () => {
  const offset = new Date().getTimezoneOffset() * 60000;
  const now = Date.now() - offset;
  return new Date(now).toISOString();
};
