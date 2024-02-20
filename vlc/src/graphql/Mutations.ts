import { gql } from "@apollo/client";

export const MUTATION_CREATE_CHANNEL = gql`
  mutation createChannel($channel: ChannelInput!) {
    createChannel(channel: $channel) {
      id
      channelID
      title
      dateCreated
      author
      status
    }
  }
`;

export const MUTATION_CREATE_CONTENT = gql`
  mutation createContent($content: ContentInput!) {
    createContent(content: $content) {
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
