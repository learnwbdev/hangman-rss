const attemptCounter = {
  value: 0,
};

const setAttemptCounter = (newValue) => {
  attemptCounter.value = newValue;
};

export { attemptCounter, setAttemptCounter };
