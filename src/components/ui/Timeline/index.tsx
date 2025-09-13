import React, { useState } from 'react';
import styled from 'styled-components';
import timelineData from '../../../data/timeline.json';

const TimelineContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-image: radial-gradient(hsla(210, 20%, 98%, 0.02) 1px, transparent 0);
  background-size: 7px 7px;
`;

const TimelineTitle = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
`;

const TimelineSubtitle = styled.p`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Timeline = styled.ul`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: ${({ theme }) => theme.colors.pacificDepths};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.li`
  position: relative;
  width: 50%;
  padding: ${({ theme }) => theme.spacing.md};
  box-sizing: border-box;

  &:nth-child(odd) {
    left: 0;
    padding-right: 35px;

    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      right: -10px;
      background-color: ${({ theme }) => theme.colors.congressionalNavy};
      border: 4px solid ${({ theme }) => theme.colors.cerebralGrey};
      top: calc(50% - 10px);
      border-radius: 50%;
      z-index: 1;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: 0;
      width: 100%;
      padding-left: 70px;
      padding-right: 0;

      &::after {
        left: 21px;
        right: auto;
      }
    }
  }

  &:nth-child(even) {
    left: 50%;
    padding-left: 35px;

    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      left: -10px;
      background-color: ${({ theme }) => theme.colors.congressionalNavy};
      border: 4px solid ${({ theme }) => theme.colors.cerebralGrey};
      top: calc(50% - 10px);
      border-radius: 50%;
      z-index: 1;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: 0;
      width: 100%;
      padding-left: 70px;
      padding-right: 0;

      &::after {
        left: 21px;
        right: auto;
      }
    }
  }
`;

const TimelineContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.congressionalNavy};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.pacificDepths};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: calc(50% - 10px);
    right: -10px;
    background-color: ${({ theme }) => theme.colors.congressionalNavy};
    border-right: 1px solid ${({ theme }) => theme.colors.pacificDepths};
    border-top: 1px solid ${({ theme }) => theme.colors.pacificDepths};
    transform: rotate(45deg);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: -10px;
      right: auto;
      border-left: 1px solid ${({ theme }) => theme.colors.pacificDepths};
      border-bottom: 1px solid ${({ theme }) => theme.colors.pacificDepths};
      border-right: none;
      border-top: none;
    }
  }

  ${TimelineItem}:nth-child(even) &::after {
    right: auto;
    left: -10px;
    border-left: 1px solid ${({ theme }) => theme.colors.pacificDepths};
    border-bottom: 1px solid ${({ theme }) => theme.colors.pacificDepths};
    border-right: none;
    border-top: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      left: -10px;
    }
  }
`;

const TimelineYear = styled.h3`
  color: ${({ theme }) => theme.colors.cerebralGrey};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TimelineTitleItem = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.colors.cerebralGrey};
`;

const FutureItem = styled(TimelineItem)`
  &::after {
    background-color: ${({ theme }) => theme.colors.boboliGardens} !important;
  }
`;

export const TimelineComponent: React.FC = () => {
  return (
    <TimelineContainer id='experience'>
      <TimelineTitle>Experiência</TimelineTitle>
      <TimelineSubtitle>
        Mais de 7 anos de experiência e muitas conquistas!
      </TimelineSubtitle>

      <Timeline>
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineContent>
              <TimelineYear>{item.year}</TimelineYear>
              <TimelineTitleItem>{item.title}</TimelineTitleItem>
              <TimelineDescription>{item.description}</TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        ))}

        <FutureItem>
          <TimelineContent>
            <TimelineYear>...?</TimelineYear>
            <TimelineTitleItem>O futuro</TimelineTitleItem>
            <TimelineDescription>
              Estou sempre aberta a novos desafios e oportunidades!
            </TimelineDescription>
          </TimelineContent>
        </FutureItem>
      </Timeline>
    </TimelineContainer>
  );
};