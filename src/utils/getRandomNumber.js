export const getRandomNumber = (min, max) => {
  const amplitude = max - min;
  const randomAmplitude = Math.round(Math.random() * amplitude);

  return min + randomAmplitude;
};
