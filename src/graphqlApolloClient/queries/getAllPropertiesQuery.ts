import { gql} from '@apollo/client';

export const GET_ALL_PROPERTIES =gql`
query GetAllProperties {
getAllProperties {
id
image
galleryImages
price
pricePerWeek
beds
baths
receptions
description
listedDate
availableDate
agentName
category
status
}
}
`;

export const GET_PROPERTY = gql`
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      image
      galleryImages
      price
      pricePerWeek
      beds
      baths
      receptions
      description
      listedDate
      availableDate
      agentName
      category
      status
    }
  }
`;