export {};

declare global {
  type Content = {
    id: string;
    title: string;
    duration: number;
    description: string;
    startTime: string;
    endTime: string;
    image: string;
  };
}
