import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FeedbacksContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.congressionalNavy};
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
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.white};
`;

const CarouselContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  position: relative;
`;

const Carousel = styled.div`
  display: flex;
  overflow: hidden;
`;

const Slide = styled.div<{ active: boolean }>`
  min-width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.insomnia};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.pacificDepths};
  transform: translateX(${({ active }) => (active ? '0' : '100%')});
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: all 0.5s ease;
  animation: ${fadeIn} 0.5s ease;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.pacificDepths};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeedbackText = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.cerebralGrey};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-style: italic;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ClientImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing.md};
  object-fit: cover;
`;

const ClientDetails = styled.div``;

const ClientName = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ClientTitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.cerebralGrey};
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.sm};
`;

const NavButton = styled.button`
  background-color: ${({ theme }) => theme.colors.insomnia};
  border: 1px solid ${({ theme }) => theme.colors.pacificDepths};
  color: ${({ theme }) => theme.colors.white};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.softsun};
    color: ${({ theme }) => theme.colors.insomnia};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background-color: ${({ theme }) => theme.colors.insomnia};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Dot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.softsun : theme.colors.cerebralGrey};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.softsun};
    transform: scale(1.2);
  }
`;

// Dados de feedback fictícios
const feedbacksData = [
  {
    id: 1,
    text: `O profissionalismo da Mariana vai além do código. Ela está sempre focada na analise e resolução do problema
    do cliente e conhece muito bem as regras de negocio e pormenores de cada projeto. Foram vários os momentos em que
    suas pontuações mudaram o rumo dos nossos discovery pra algo melhor e mais eficaz.`,
    client: {
      name: 'Julio Gonçalves',
      title: 'Javascript Developer - Impulso',
      image: '/images/feedbacks/julio.avif'
    }
  },
  {
    id: 2,
    text: 'Trabalhar com a Mari foi uma experiência excepcional. Ela não apenas entregou um projeto impecável, mas também trouxe insights valiosos que melhoraram nossa estratégia digital.',
    client: {
      name: 'Max Goes',
      title: '',
      image: '/images/feedbacks/max.avif'
    }
  },
];

export const Feedbacks: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === feedbacksData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? feedbacksData.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://placehold.co/60x60/10083a/FFFFFF/png?text=Foto';
  };

  return (
    <FeedbacksContainer id='feedbacks'>
      <Title>Feedbacks</Title>
      <Subtitle>Veja aqui o que os clientes dizem</Subtitle>

      <CarouselContainer>
        <Carousel>
          {feedbacksData.map((feedback, index) => (
            <Slide key={feedback.id} active={index === currentSlide}>
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>

              <FeedbackText>'{feedback.text}'</FeedbackText>

              <ClientInfo>
                <ClientImage
                  src={feedback.client.image}
                  alt={feedback.client.name}
                  onError={handleImageError}
                />
                <ClientDetails>
                  <ClientName>{feedback.client.name}</ClientName>
                  <ClientTitle>{feedback.client.title}</ClientTitle>
                </ClientDetails>
              </ClientInfo>
            </Slide>
          ))}
        </Carousel>

        <Navigation>
          <NavButton onClick={prevSlide} aria-label='Slide anterior'>
            <FaChevronLeft />
          </NavButton>

          <NavButton onClick={nextSlide} aria-label='Próximo slide'>
            <FaChevronRight />
          </NavButton>
        </Navigation>

        <Dots>
          {feedbacksData.map((_, index) => (
            <Dot
              key={index}
              active={index === currentSlide}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </Dots>
      </CarouselContainer>
    </FeedbacksContainer>
  );
};