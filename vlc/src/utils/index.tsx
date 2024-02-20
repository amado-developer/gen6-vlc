export const dateConverter = (date: string) => {
  const unFormattedDate: Date = new Date(date);
  const formattedDate: string = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(unFormattedDate);

  return formattedDate;
};

export const isObjectWithIdExists = (array: any[], id: string | number) => {
  return array.some((obj) => obj.id === id);
};

export const convertSecondsToHMS = (seconds: number) => {
  let hours: string = Math.floor(seconds / 3600).toString();
  let minutes: string = Math.floor((seconds % 3600) / 60).toString();
  let remainingSeconds: string = (seconds % 60).toString();

  if (parseFloat(hours) < 10) hours = "0" + hours.toString();
  if (parseFloat(minutes) < 10) minutes = "0" + minutes.toString();
  if (parseFloat(remainingSeconds) < 10)
    remainingSeconds = "0" + remainingSeconds.toString();

  return `${hours}:${minutes}:${remainingSeconds}`;
};

export const convertHMSToSeconds = (time: string) => {
  const [hours, minutes, seconds] = time.split(":");
  return (
    parseInt(hours, 10) * 3600 +
    parseInt(minutes, 10) * 60 +
    parseInt(seconds, 10)
  );
};

export const calculateStartTime = (duration: number, endTime: string) => {
  console.log(endTime, "endTime");
  const endTimeInSeconds = convertHMSToSeconds(endTime);
  const startTimeInSeconds = endTimeInSeconds - duration;
  return convertSecondsToHMS(startTimeInSeconds);
};

export const calculateEndTime = (duration: number, startTime: string) => {
  const startTimeInSeconds = convertHMSToSeconds(startTime);
  const endTimeInSeconds = startTimeInSeconds + duration;
  return convertSecondsToHMS(endTimeInSeconds);
};

export const assignStartAndEndTime = (content: Content[]): Content[] => {
  const previousEndTime: string[] = [];

  const newContent = content.map((item, index) => {
    if (index === 0) {
      previousEndTime.push(calculateEndTime(item.duration, "00:00:00"));
      return {
        ...item,
        startTime: "00:00:00",
        endTime: calculateEndTime(item.duration, "00:00:00"),
      };
    } else {
      const endTime = calculateEndTime(
        item.duration,
        previousEndTime[index - 1]
      );
      previousEndTime.push(endTime);
      return {
        ...item,
        startTime: previousEndTime[index - 1],
        endTime: endTime,
      };
    }
  });

  return newContent;
};
