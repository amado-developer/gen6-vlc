import data from "../../../../data.json";
import { isObjectWithIdExists } from "../../../../shared/utils/index";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

type ContentModalBodyProps = {
  content: Content[];
  setContent: (content: Content[]) => void;
};

const ContentModalBody = ({ content, setContent }: ContentModalBodyProps) => {
  const programming: Content[] = data;
  const boxBorder = "2px solid #d8640d";

  return (
    <Box p="4" display="flex" flexWrap="wrap">
      {programming.map((program: Content) => (
        <Flex
          key={uuidv4()}
          justify="center"
          mb="4"
          align="center"
          flexDir="column"
          onClick={() => {
            if (isObjectWithIdExists(content, program.id)) {
              setContent(content.filter((c) => c.id !== program.id));
            } else {
              setContent([...content, program]);
            }
          }}
        >
          <Box>
            <Flex justify="center" mb="4" align="center" flexWrap="nowrap">
              <Image
                onClick={() => {}}
                border={
                  isObjectWithIdExists(content, program.id) ? boxBorder : ""
                }
                src={program.image}
                alt={program.title}
                width={200}
                height={200}
                borderRadius="16px"
                mr="2"
                ml="2"
              />
            </Flex>
          </Box>

          <Box>
            <Text>{program.title}</Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default ContentModalBody;
