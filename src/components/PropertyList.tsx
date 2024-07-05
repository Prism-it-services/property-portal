// src/components/PropertyList.tsx
import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  {
    image: '../../assets/house1.jpeg',
    price: '£1,450 pcm',
    pricePerWeek: '£335 pw',
    beds: 2,
    baths: 2,
    receptions: 1,
    description: '2 bed flat to rent...',
    listedDate: '19th Jun 2024',
    availableDate: '31st Jul 2024',
    agentName: 'Haslams'
  },
  {
    image: '../../assets/house2.jpeg',
    price: '£1,725 pcm',
    pricePerWeek: '£398 pw',
    beds: 2,
    baths: 2,
    receptions: 1,
    description: '2 bed flat to rent...',
    listedDate: '28th Jun 2024',
    availableDate: '2nd Sep 2024',
    agentName: 'Haslams'
  },
  {
    image: '../../assets/house3.jpeg',
    price: '£1,900 pcm',
    pricePerWeek: '£498 pw',
    beds: 3,
    baths: 3,
    receptions: 1,
    description: '3 bed flat to rent...',
    listedDate: '28th Jun 2024',
    availableDate: '2nd Sep 2024',
    agentName: 'Prospect'
  },
  {
    image: '../../assets/house4.jpeg',
    price: '£2,100 pcm',
    pricePerWeek: '600 pw',
    beds: 2,
    baths: 2,
    receptions: 1,
    description: '4 bed flat to rent...',
    listedDate: '28th Jun 2024',
    availableDate: '2nd Sep 2024',
    agentName: 'Avacado'
  },
  {
    image: '../../assets/house5.jpeg',
    price: '£2,400 pcm',
    pricePerWeek: '700 pw',
    beds: 2,
    baths: 2,
    receptions: 1,
    description: '5 bed flat to rent...',
    listedDate: '28th Jun 2024',
    availableDate: '2nd Sep 2024',
    agentName: 'Chancellors'
  }
  // Add more properties as needed
];

export  const PropertyList  = () => {
  return (
    
    <div>
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
    
  );
};


