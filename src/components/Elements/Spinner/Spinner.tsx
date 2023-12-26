import Lottie from 'react-lottie';

import loadingAnimation from '@/assets/animations/loading.json';

export const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} isClickToPauseDisabled={true} />;
};
