import { Card, Text, Image } from "@chakra-ui/react";

type TimelineCardProps = {
  title: string;
  duration: number;
  description: string;
  startTime: string;
  endTime: string;
  image: string;
};
const TimelineCard = ({
  title,
  duration,
  description,
  startTime,
  endTime,
  image,
}: TimelineCardProps) => {
  return (
    <Card variant="timeline">
      <Text>{title}</Text>
      <Text>{duration}</Text>
      <Text>{description}</Text>
      <Text>{startTime}</Text>
      <Text>{endTime}</Text>
      <Image src={image} alt={title} width={100} height={100} />
    </Card>
  );
};
export default TimelineCard;
