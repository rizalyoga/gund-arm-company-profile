import { gql } from "@apollo/client";

export const GET_LAUNCHES_PAST = gql`
  query GetLaunchesPast($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      launch_date_local
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
      details
    }
  }
`;

// export const GET_LAUNCHES_PAST = gql`
//   query GetLaunchesPast($limit: Int) {
//     launchesPast(limit: $limit) {
//       mission_name
//       launch_date_local
//       links {
//         article_link
//         video_link
//       }
//       rocket {
//         rocket_name
//       }
//       ships {
//         name
//         home_port
//         image
//       }
//       details
//     }
//   }
// `;
