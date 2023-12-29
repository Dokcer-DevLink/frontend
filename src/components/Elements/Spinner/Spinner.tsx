// import Lottie from 'react-lottie';

import loadingAnimation from '@/assets/animations/loading.json';
import { Wrapper } from './Spinner.style';

export const Spinner = () => {
  if (typeof document !== undefined) {
    return;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Wrapper>
      {/* <Lottie options={defaultOptions} isClickToPauseDisabled={true} />; */}
    </Wrapper>
  );
};
