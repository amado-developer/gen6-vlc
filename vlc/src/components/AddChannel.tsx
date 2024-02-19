import { ChangeEvent } from "react";
import { dateConverter } from "../utils";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const AddChannel = () => {
  const [creationDate, setCreationDate] = useState<string>("");
  const [channelName, setChannelName] = useState<string>("");

  useEffect(() => {
    console.log(dateConverter(creationDate));
  }, [creationDate]);
  return (
    <FormControl id="channel">
      <FormLabel>Channel</FormLabel>
      <Input
        type="text"
        value={channelName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setChannelName(e.target.value)
        }
      />
      <FormHelperText>Enter the channel name</FormHelperText>

      <FormLabel>Author</FormLabel>
      <Input type="text" value="Amado" disabled />

      <FormLabel>Creation Date</FormLabel>
      <Input
        type="datetime-local"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCreationDate(e.target.value)
        }
      />
    </FormControl>
  );
};

export default AddChannel;
