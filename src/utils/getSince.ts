type getSinceProps = {
  ISOTime: string;
};

export const getSince = ({ ISOTime }: getSinceProps) => {
  const offset = new Date().getTimezoneOffset() * 60000;
  const now = Date.now() - offset;
  const date = new Date(ISOTime);
  const milliSecond = date.getTime() - offset;
  const gap = now - milliSecond;

  // 1y = 31104000000
  // 1m = 2592000000
  // 1d = 86400000
  // 1h = 3600000
  // 1m = 60000
  // 1s = 1000

  if (gap <= 60000) {
    return '방금 전';
  }

  if (gap <= 3600000) {
    return `${Math.floor(gap / 60000)}분 전`;
  }

  if (gap <= 86400000) {
    return `${Math.floor(gap / 3600000)}시간 전`;
  }

  if (gap <= 2592000000) {
    return `${Math.floor(gap / 86400000)}일 전`;
  }

  if (gap <= 31104000000) {
    return `${Math.floor(gap / 2592000000)}달 전`;
  }

  return `${Math.floor(gap / 31104000000)}년 전`;
};
