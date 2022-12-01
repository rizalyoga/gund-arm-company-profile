import { gql } from "@apollo/client";

export const GET_MISSIONS = gql`
  query GetMissions($limit: Int) {
    missions(limit: $limit) {
      id
      description
      name
      website
      wikipedia
      manufacturers
    }
  }
`;
