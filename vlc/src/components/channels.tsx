import SimpleButton from "./global/SimpleButton";
import SimpleTable from "./global/SimpleTable";
import Select from "./global/Dropdown";
import _ from "lodash";
import { useEffect, useState } from "react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { QUERY_GET_BY_STATUS } from "../graphql/Queries";
import { useQuery } from "@apollo/client";

type Channel = {
  id: string;
  title: string;
  dateCreated: string;
  author: string;
  status: string;
};

const Channels = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [channelsHeader, setChannelsHeader] = useState<string[]>([
    "Channel",
    "Creation Date",
    "Created By",
    "Status",
  ]);
  const [filter, setFilter] = useState<string>("Published");
  const { loading, error, data } = useQuery(QUERY_GET_BY_STATUS, {
    variables: { status: filter },
  });

  useEffect(() => {
    if (data) {
      setChannels(data.getChannelsByStatus);
    }
  }, [data]);

  useEffect(() => {
    const editChannels = channels.map((channel) => {
      return {
        ...channel,
        edit: (
          <EditIcon
            style={{ cursor: "pointer" }}
            onClick={() => {
              console.log(channel.title);
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
        : ["Channel", "Creation Date", "Created By", "Status"]
    );
  }, [edit]);

  return (
    <>
      <Select
        options={[
          { value: "Published", label: "Published" },
          { value: "Draft", label: "Draft" },
        ]}
        variant="filled"
        onChange={(e: any) => {
          setFilter(e);
        }}
      />
      <SimpleButton
        variant="solid"
        text={!edit ? "Edit" : "View"}
        onClick={() => {
          setEdit(!edit);
        }}
        icon={!edit ? <EditIcon /> : <ViewIcon />}
      />
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
