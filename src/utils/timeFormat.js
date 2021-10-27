export const setTimeFormat = (totalSeconds) => {
  const hour = Math.floor(totalSeconds /3600);
  const minute = Math.floor((totalSeconds - hour*3600)/60);
  const seconds = totalSeconds - (hour * 3600 + minute * 60);

  const formatedHours = (hour < 1 || hour > 23)
    ? '00'
    : (hour < 10) ? `0${hour}` : `${hour}`;
  const formatedMinutes = (minute < 10)
    ? ((minute === 0) ? '00' : `0${minute}`)
    : `${minute}`;
  const formatedSeconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;

  return {hh: formatedHours, mm: formatedMinutes, ss: formatedSeconds};
};