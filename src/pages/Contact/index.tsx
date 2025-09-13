import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/common/Button';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-image: radial-gradient(hsla(210, 20%, 98%, 0.02) 1px, transparent 0);
  background-size: 7px 7px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
`;

const Subtitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.cerebralGrey};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.congressionalNavy};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.pacificDepths};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-right: ${({ theme }) => theme.spacing.md};
  flex-shrink: 0;
`;

const ContactText = styled.div`
  color: ${({ theme }) => theme.colors.cerebralGrey};
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.cerebralGrey};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.softsun};
  }
`;

const ContactImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 350px;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: -1;
  }
`;

export const Contact: React.FC = () => {
  return (
    <ContactContainer id='contato'>
      <Title>Contato</Title>
      <Subtitle>Tem algum projeto? Vamos marcar um café :)</Subtitle>
      <Description>
        Vamos bater um papo sobre como eu posso te ajudar. Seja com um site,
        ou até mesmo uma mentoria de carreira eu estou à disposição.
      </Description>

      <Content>
        <ContactInfo>
          <ContactItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactText>
              <ContactLink href='mailto:contato@mariviana.dev'>
                contato@mariviana.dev
              </ContactLink>
            </ContactText>
          </ContactItem>

          <ContactItem>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactText>
              Cabo Frio, RJ
            </ContactText>
          </ContactItem>

          <Button
            size='large'
            as='a'
            href='https://api.whatsapp.com/send?phone=5522997382668&text=Ol%C3%A1,%20gostaria%20de%20conversar%20sobre%20um%20projeto.'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWhatsapp /> Mandar um oi
          </Button>
        </ContactInfo>

        <ContactImage>
          <img
            src='/images/about/mari-escritorio2.jpg'
            alt='Entre em contato'
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/10083a/FFFFFF/png?text=Vamos+conversar%3F';
            }}
          />
        </ContactImage>
      </Content>
    </ContactContainer>
  );
};