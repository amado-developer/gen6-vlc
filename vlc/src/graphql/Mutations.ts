import { gql } from "@apollo/client";

export const MUTATION_CREATE_CHANNEL = gql`
  mutation createChannel(
    $channelID: String
    $title: String
    $author: String
    $status: String
    $dateCreated: String
  ) {
    createChannel(
      channelID: $channelID
      title: $title
      author: $author
      status: $status
      dateCreated: $dateCreated
    ) {
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
  mutation createContent(
    $channelID: String
    $title: String
    $description: String
    $duration: String
    $startTime: String
    $endTime: String
    $image: String
  ) {
    createContent(
      title: $title
      description: $description
      duration: $duration
      startTime: $startTime
      endTime: $endTime
      image: $image
      channelID: $channelID
    ) {
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
