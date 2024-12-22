import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 40px;
  background-color:transparent;
`;

const ServiceCard = styled.div`
  width: 700px;
  height: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s;
  font-weight:bolder;


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const Icon = styled.div`
  font-size: 6rem;
  margin-bottom: 15px;
  color: #0078d4;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Building modern and efficient websites tailored to your needs.',
    },
    {
      icon: '📱',
      title: 'Responsive Development',
      description: 'Ensuring your website looks great on all devices.',
    },
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Creating interactive and dynamic user interfaces.',
    },
    {
      icon: '🎨',
      title: 'Figma to Website',
      description: 'Converting your Figma designs into fully functional websites.',
    },
  ];

  return (
    <ServicesContainer>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <Icon>{service.icon}</Icon>
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
        </ServiceCard>
      ))}
    </ServicesContainer>
  );
};

export default Services;
