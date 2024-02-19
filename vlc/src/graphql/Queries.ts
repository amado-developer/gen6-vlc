import { gql } from "@apollo/client";

export const QUERY_GET_CHANNELS = gql`
  query {
    getAllChannels {
      id
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
      title
      dateCreated
      author
      status
    }
  }
`;
