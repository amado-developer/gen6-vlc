import SimpleButton from "../components/global/SimpleButton";
import SimpleTable from "../components/global/SimpleTable";
import Select from "../components/global/Dropdown";
import _ from "lodash";

import { dateConverter } from "../utils/index";
import { useEffect, useState } from "react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { QUERY_GET_BY_STATUS } from "../graphql/Queries";
import { useQuery } from "@apollo/client";
import { Box, Flex } from "@chakra-ui/layout";

type ChannelsProps = {
  setCurrentTab: (tab: number) => void;
  setChannelID: (id: string) => void;
};

const Channels = ({ setCurrentTab, setChannelID }: ChannelsProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [channelsHeader, setChannelsHeader] = useState<string[]>([
    "ID",
    "Channel",
    "Creation Date",
    "Created By",
    "Status",
  ]);
  const [filter, setFilter] = useState<string>("Publish");

  const { data } = useQuery(QUERY_GET_BY_STATUS, {
    variables: { status: filter },
  });

  useEffect(() => {
    if (data) {
      const formattedData = data.getChannelsByStatus.map((channel: Channel) => {
        return {
          channelID: channel.channelID,
          id: channel.id,
          title: channel.title,
          dateCreated: dateConverter(channel.dateCreated),
          author: channel.author,
          status: channel.status,
        };
      });

      setChannels(formattedData);
    }
  }, [data]);

  useEffect(() => {
    const editChannels = channels.map((channel: Channel) => {
      return {
        ...channel,
        edit: (
          <EditIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              console.log(channel);
              setChannelID(channel.channelID);
              setCurrentTab(2);
            }}
          />
        ),
      };
    });

    const noEditChannels = _.map(channels, (channel) => {
      return _.omit(channel, "edit");
    });

    setChannels(edit ? editChannels : noEditChannels);
    setChannelsHeader(
      edit
        ? [...channelsHeader, "Edit"]
        : ["ID", "Channel", "Creation Date", "Created By", "Status"]
    );
  }, [edit]);

  return (
    <>
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
        <Box>
          <SimpleButton
            variant="solid"
            text={!edit ? "Edit" : "View"}
            onClick={() => {
              setEdit(!edit);
            }}
            icon={!edit ? <EditIcon /> : <ViewIcon />}
          />
        </Box>
      </Flex>
      <SimpleTable
        variant="simple"
        headers={channelsHeader}
        body={channels}
        caption={"Virtual Channels"}
      />
    </>
  );
};

export default Channels;
