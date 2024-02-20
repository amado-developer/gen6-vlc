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
  const baseHeight = 200;
  const calculateHeight = (duration: number) => {
    if (duration > 3600 || duration < 3600)
      return (duration / 3600) * baseHeight - baseHeight * 0.2;
  };
  return (
    <Card
      variant="timeline"
      style={{
        backgroundImage: `url(${image})`,
        height: `${calculateHeight(duration)}px`,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <CardBody p={duration < 3600 ? 0 : "inherit"}>
        {duration >= 3600 ? (
          <Flex align="center" justify="space-between">
            <Box maxWidth={"50%"}>
              <Text fontSize="2xl">{title}</Text>
              <Text as="i">"{description}"</Text>
              <Text>Duration: {convertSecondsToHMS(duration)}</Text>
            </Box>
            <Box>
              <Text mb="4">Start Time: {startTime}</Text>
              <Text>End Time: {endTime}</Text>
            </Box>
          </Flex>
        ) : (
          <></>
        )}
      </CardBody>
      {duration < 3600 && (
        <Flex justify="space-between" align="center">
          <Text fontSize="2xl" mt={-5}>
            {title}
          </Text>
          <Text mt={-5}>Duration: {convertSecondsToHMS(duration)}</Text>
        </Flex>
      )}
    </Card>
  );
};
export default TimelineCard;
