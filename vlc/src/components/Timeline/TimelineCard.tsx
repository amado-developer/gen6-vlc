import { Card, Text, CardBody, Box, Flex } from "@chakra-ui/react";
import { convertSecondsToHMS } from "../../utils/index";
const TimelineCard = ({
  title,
  duration,
  description,
  startTime,
  endTime,
  image,
}: Content) => {
  return (
    <Card
      variant="timeline"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <CardBody>
        <Flex align="center" justify="space-between">
          <Box maxW="50%">
            <Text fontSize="2xl">{title}</Text>
            <Text as="i">"{description}"</Text>
            <Text>Duration: {convertSecondsToHMS(duration)}</Text>
          </Box>
          <Box>
            <Text mb="4">Start Time: {startTime}</Text>
            <Text>End Time: {endTime}</Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};
export default TimelineCard;
