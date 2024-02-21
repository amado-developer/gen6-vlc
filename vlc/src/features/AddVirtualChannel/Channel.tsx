import Timeline from "./components/Timeline/Timeline";
import SimpleModal from "../../shared/components/SimpleModal";
import ContentModalBody from "./components/ContentModal/ContentModalBody";

import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useEffect, useState } from "react";
import { assignStartAndEndTime } from "../../shared/utils";
import {
  MUTATION_CREATE_CHANNEL,
  MUTATION_CREATE_CONTENT,
} from "./graphql/Mutations";

import { useMutation } from "@apollo/client";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Button,
  Flex,
  Container,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";

export const Channel = () => {
  const navigate = useNavigate();
  const [creationDate, setCreationDate] = useState<string>("");
  const [channelName, setChannelName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<Content[]>([]);
  const [parsedContent, setParsedContent] = useState<Content[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [createChannel] = useMutation(MUTATION_CREATE_CHANNEL);
  const [createContent] = useMutation(MUTATION_CREATE_CONTENT);

  const isDisabled = (): boolean => {
    return channelName === "" || creationDate === "" || content.length === 0;
  };

  useEffect(() => {
    if (content.length > 0) {
      const newContent = assignStartAndEndTime(content);
      setParsedContent(newContent);
    }
  }, [content]);

  const saveChannel = (status: string) => {
    const UUID = uuidv4();
    createChannel({
      variables: {
        channelID: UUID,
        title: channelName,
        dateCreated: creationDate,
        author: author,
        status,
      },
    });

    parsedContent.forEach((c: Content) => {
      createContent({
        variables: {
          channelID: UUID,
          title: c.title,
          description: c.description,
          duration: c.duration.toString(),
          startTime: c.startTime,
          endTime: c.endTime,
          image: c.image,
        },
      });
    });

    navigate("/");
  };

  return (
    <Container as="section" mt="4" mb="8" maxW="1400">
      <SimpleModal
        open={open}
        setOpen={setOpen}
        title="Add Content"
        body={<ContentModalBody content={content} setContent={setContent} />}
        footer={
          <Button
            aria-label="Close"
            onClick={() => {
              setOpen(false);
            }}
          >
            Close
          </Button>
        }
      />
      <FormControl id="channel">
        <Flex justify="flex-end" mb={10} mt={10}>
          <Button
            aria-label="Save"
            isDisabled={isDisabled()}
            mr="4"
            variant="solid"
            onClick={() => saveChannel("Draft")}
          >
            Save
          </Button>
          <Button
            aria-label="Save & Publish"
            isDisabled={isDisabled()}
            variant="solid"
            mr="4"
            onClick={() => saveChannel("Publish")}
          >
            Save & Publish
          </Button>
          <Button
            aria-label="Cancel"
            mr="4"
            variant="outline"
            onClick={() => navigate("/")}
          >
            Cancel
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
            <Button
              aria-label="Add Content"
              leftIcon={<AddIcon />}
              onClick={() => setOpen(true)}
            >
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
    </Container>
  );
};

export default Channel;
