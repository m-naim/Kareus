import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
      console.log('toggle');
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;