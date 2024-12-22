import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';



const ContactContainer = styled.div`
  padding: 40px;
  background-color: transparent;
  text-align: center;
`;

const ContactForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color:transparent;
  
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  height: 100px;
  background-color:transparent

`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #0078d4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;



const ContactMe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  
const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
  
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    const templateParams = {
      from_email: email,
      message: message,
    };
  
    emailjs
      .send('service_3ip9e2f', 'template_qqez124', templateParams, '0Je0MlGHskbCqrmZs')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent!');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('FAILED...', error);
          setError('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <ContactContainer>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></Textarea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </ContactContainer>
  );
};

export { ContactMe };
