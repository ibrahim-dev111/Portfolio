import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 700px;
  height:400px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: transparent;
  transition: transform 0.3s;
 

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position:center;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 8px;
  color: black;
  font-weight:bolder
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: black;
  margin: 0 0 16px;
  font-weight:bold
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 10px 16px;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  color: black;
  background-color: #F5E4BC;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
    color:white
  }
`;

const ProjectCard = ({ image, title, description, liveLink }) => {
  return (

    
    <CardContainer>
      <Image  src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <LinkButton href={liveLink} target="_blank" rel="noopener noreferrer">
          View Live
        </LinkButton>
      </Content>
    </CardContainer>
  );
};

export default ProjectCard;
