import { gql } from "@apollo/client";

export const QUERY_GET_CHANNELS = gql`
  query {
    getAllChannels {
      id
      channelID
      title
      dateCreated
      author
      status
    }
  }
`;

export const QUERY_GET_BY_STATUS = gql`
  query getChannelsByStatus($status: String!) {
    getChannelsByStatus(status: $status) {
      id
      channelID
      title
      dateCreated
      author
      status
    }
  }
`;

export const QUERY_GET_CHANNEL_BY_ID = gql`
  query getChannelByID($channelID: String!) {
    getChannelByID(channelID: $channelID) {
      id
      channelID
      title
      dateCreated
      author
      status
    }
  }
`;

export const QUERY_GET_CONTENT_BY_CHANNEL = gql`
  query getContentByChannel($channelID: String!) {
    getContentByChannel(channelID: $channelID) {
      id
      channelID
      title
      description
      duration
      startTime
      endTime
      image
    }
  }
`;
