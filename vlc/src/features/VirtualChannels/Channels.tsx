import SimpleButton from "../../shared/components/SimpleButton";
import SimpleTable from "../../shared/components/SimpleTable";
import MobileTable from "../../shared/components/MobileTable";
import Select from "../../shared/components/Dropdown";
import { omit, map } from "lodash";
import { dateConverter } from "../../shared/utils/index";
import { useEffect, useState } from "react";
import { EditIcon, ViewIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { QUERY_GET_BY_STATUS } from "./graphql/Queries";
import { useQuery } from "@apollo/client";
import { Box, Container, Flex } from "@chakra-ui/layout";
import { useNavigate } from "react-router";

const Channels = () => {
  const router = useNavigate();
  const [edit, setEdit] = useState<boolean>(false);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [channelsHeader, setChannelsHeader] = useState<string[]>([
    "Channel",
    "Creation Date",
    "Created By",
    "Status",
  ]);
  const [filter, setFilter] = useState<string>("Publish");

  const { data, refetch } = useQuery(QUERY_GET_BY_STATUS, {
    variables: { status: filter },
  });

  const refetchData = async () => {
    const { data } = await refetch({ variables: { status: filter } });
    const formatedData = formatData(data);
    setChannels(formatedData);
    return data;
  };

  const formatData = (data: any) => {
    return data.getChannelsByStatus.map((channel: Channel) => {
      return {
        id: channel.id,
        title: channel.title,
        dateCreated: dateConverter(channel.dateCreated),
        author: channel.author,
        status: channel.status,
      };
    });
  };

  useEffect(() => {
    if (data) {
      refetchData();
    }
  }, [data]);

  return (
    <Container
      as="section"
      maxWidth="1400px"
      mt="40px"
      mb="40px"
      fontSize={["sm", "md", "lg", "xl"]}
    >
      <Flex direction="column" align="flex-end">
        <Select
          options={[
            { value: "Publish", label: "Publish" },
            { value: "Draft", label: "Draft" },
          ]}
          variant="filled"
          onChange={(e: any) => {
            setFilter(e);
          }}
        />

        <Flex align="center">
          <SimpleButton
            variant="solid"
            text="Add Channel"
            onClick={() => {
              router("/add-channel");
            }}
            icon={<PlusSquareIcon />}
          />
          <SimpleButton
            variant="solid"
            text={!edit ? "Edit" : "View"}
            onClick={() => {
              setEdit(!edit);
            }}
            icon={!edit ? <EditIcon /> : <ViewIcon />}
          />
        </Flex>
      </Flex>
      <Box display={{ sm: "none", md: "block" }}>
        <SimpleTable
          variant="simple"
          headers={channelsHeader}
          body={channels}
          caption={"Virtual Channels"}
        />
      </Box>
      <Box display={{ sm: "block", md: "none" }}>
        <MobileTable
          headers={channelsHeader}
          body={channels}
          variant="simple"
        />
      </Box>
    </Container>
  );
};

export default Channels;
