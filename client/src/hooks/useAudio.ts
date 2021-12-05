import { useState } from 'react';

const useAudio = (url: string) => {
  const [audio] = useState(() => new Audio(url));

  const toggle = () => audio.play();

  return toggle;
};

export default useAudio;
