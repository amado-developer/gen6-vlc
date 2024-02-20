import { ChangeEvent, useEffect, useState } from "react";
import { assignStartAndEndTime } from "../utils";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Timeline from "../components/Timeline/Timeline";
import SimpleModal from "../components/global/SimpleModal";
import ContentModalBody from "../components/ContentModal/ContentModalBody";

export const AddChannel = () => {
  const [creationDate, setCreationDate] = useState<string>("");
  const [channelName, setChannelName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<Content[]>([]);
  const [parsedContent, setParsedContent] = useState<Content[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const isDisabled = (): boolean => {
    return channelName === "" || creationDate === "" || content.length === 0;
  };

  useEffect(() => {
    if (content.length > 0) {
      const newContent = assignStartAndEndTime(content);
      setParsedContent(newContent);
    }
  }, [content]);

  return (
    <Box mt="4" mb="8">
      <SimpleModal
        open={open}
        setOpen={setOpen}
        title="Add Content"
        body={<ContentModalBody content={content} setContent={setContent} />}
        footer={
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            Close
          </Button>
        }
      />
      <FormControl id="channel">
        <Flex justify="flex-end">
          <Button isDisabled={isDisabled()} mr="4" variant="solid">
            Save
          </Button>
          <Button isDisabled={isDisabled()} variant="solid">
            Save & Publish
          </Button>
        </Flex>
        <FormLabel>Channel</FormLabel>
        <Input
          type="text"
          value={channelName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setChannelName(e.target.value)
          }
        />
        <FormHelperText>Enter the channel name</FormHelperText>

        <FormLabel mt={8}>Author</FormLabel>
        <Input
          type="text"
          value={author}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAuthor(e.target.value)
          }
        />

        <FormLabel mt={8}>Creation Date</FormLabel>
        <Input
          mb="8"
          type="datetime-local"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setCreationDate(e.target.value)
          }
        />
        <Box>
          <Flex justify="flex-end">
            <Button leftIcon={<AddIcon />} onClick={() => setOpen(true)}>
              Add Content
            </Button>
          </Flex>
        </Box>
      </FormControl>

      {parsedContent && parsedContent.length > 0 && (
        <Box>
          <Timeline data={parsedContent} />
        </Box>
      )}
    </Box>
  );
};

export default AddChannel;
