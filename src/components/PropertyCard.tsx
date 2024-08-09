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
  width: 250px;
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
  color: #0b7f7f;
`;

const Description = styled.p`
  margin: 8px 0;
  text-align: left;
  color: #333333;
  width: 100%;
`;

const Details = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 8px;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  font-size: 0.9em;
  color: #888;
  padding: 10px;
`;

const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  font-size: 0.9em;
  color: #095959;
`;

const ViewDetailsButton = styled(Link)`
  background-color: #0b7f7f;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #095959;
  }
`;

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit' as '2-digit', month: 'short' as 'short', year: '2-digit' as '2-digit' };
  return new Date(dateString).toLocaleDateString('en-GB', options);
};



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
      <Image src={image} alt="Property picture coming soon" />
      <Info>
        <Header>
          <Price>{price} <span>per month</span> </Price>
          <Price>{pricePerWeek}<span>p/w</span> </Price>
        </Header>
        <Description>{description}</Description>
        <Details>
          <Detail>🛏️ {beds}</Detail>
          <Detail>🛁 {baths}</Detail>
          <Detail>🛋️ {receptions}</Detail>
        </Details>
        <MetaData>
        <div>Listed on: {formatDate(listedDate)}</div>
        <div>Available from: {formatDate(availableDate)}</div>
        <ViewDetailsButton to={`/property/${id}`}>View Details</ViewDetailsButton>
        <div>{agentName}</div>
        </MetaData>
      </Info>
    </Card>
  );
};

export default PropertyCard;
