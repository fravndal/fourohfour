import gql from "graphql-tag";

export const GET_MAPS = gql`
  {
    maps {
      id
      name
      image
    }
  }
`;
