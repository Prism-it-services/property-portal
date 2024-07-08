// src/components/PropertyDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  max-width: 75%;
  margin: 0 auto;
  padding: 20px;
`;

const Gallery = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-bottom: 20px;
`;

const GalleryImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin-right: 10px;
`;

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Fetch the property details using the id
  const property = {
    images: ['../../assets/house1.jpeg', '../../assets/house2.jpeg', '../../assets/house3.jpeg', '../../assets/house4.jpeg', '../../assets/house5.jpeg'], // Add your image paths
    price: '£1,725 pcm',
    pricePerWeek: '£398 pw',
    beds: 2,
    baths: 2,
    receptions: 1,
    description: '2 bed flat to rent...',
    listedDate: '28th Jun 2024',
    availableDate: '2nd Sep 2024',
    agentName: 'Haslams',
    details: 'A superbly presented five-bedroom detached house, extended to provide ideal living accommodation for a family home. The property consists of a large spacious lounge, separate family room and an open plan dining room with luxury fitted kitchen. Furthermore, there is a study, gym, utility room and cloakroom. The first floor comprises a large master with ensuite, four further bedrooms and family bathroom. The front driveway provides parking for at least six vehicles and the rear garden is approximately 65 X 50 and mainly laid to lawn, with a patio and decked area. Early viewing is recommended and by appointment only. EPC Banding D. Windsor and Maidenhead Royal Borough Council, Council Tax Band G for Wraysbury, being £2,696.11 for 2023/24.'
  };

  return (
    <DetailContainer>
      <Gallery>
        {property.images.map((src, index) => (
          <GalleryImage key={index} src={src} alt={`Property image ${index + 1}`} />
        ))}
      </Gallery>
      <h1>{property.price} ({property.pricePerWeek})</h1>
      <p>{property.description}</p>
      <p><strong>Listed on:</strong> {property.listedDate}</p>
      <p><strong>Available from:</strong> {property.availableDate}</p>
      <p><strong>Agent:</strong> {property.agentName}</p>
      <p>{property.details}</p>
    </DetailContainer>
  );
};

export default PropertyDetail;
