// src/components/PropertyCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface PropertyCardProps {
  id: number;
  image: string;
  price: string;
  pricePerWeek: string;
  beds: number;
  baths: number;
  receptions: number;
  description: string;
  listedDate: string;
  availableDate: string;
  agentName: string;
}

const Card = styled(Link)`
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 16px;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  font-size: 1.25em;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 8px 0;
  color: #666;
`;

const Details = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 8px;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9em;
  color: #999;
  padding: 10px;
`;

const PropertyCard: React.FC< PropertyCardProps>  = ({
  id,
  image,
  price,
  pricePerWeek,
  beds,
  baths,
  receptions,
  description,
  listedDate,
  availableDate,
  agentName
}) => {
  return (
    <Card to={`/property/${id}`}>
      <Image src={image} alt="Property" />
      <Info>
        <Header>
          <Price>{price}</Price>
          <div>{pricePerWeek}</div>
        </Header>
        <Description>{description}</Description>
        <Details>
          <Detail>🛏️ {beds}</Detail>
          <Detail>🛁 {baths}</Detail>
          <Detail>🛋️ {receptions}</Detail>
        </Details>
        <div>Listed on: {listedDate}</div>
        <div>Available from: {availableDate}</div>
        <div>{agentName}</div>
      </Info>
    </Card>
  );
};

export default PropertyCard;
