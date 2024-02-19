export const dateConverter = (date: string) => {
  const unFormattedDate: Date = new Date(date);
  const formattedDate: String = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format();

  return formattedDate;
};
