export const formatTime = (time) => {
  const milliseconds = time % 1000;
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${milliseconds.toString().padStart(3, "0")}`;
};
