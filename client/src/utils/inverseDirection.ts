const inverseDirection = (direction: 'right'|'left'): 'right'|'left' => {
  if (direction === 'right') return 'left';
  return 'right';
};

export default inverseDirection;
