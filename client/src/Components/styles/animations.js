import styled, { keyframes } from "styled-components";
import { bounce, fadeInLeft, fadeIn } from "react-animations";

export const Bounce = styled.div`
  animation: 3s ${keyframes`${bounce}`} 1;
`;
export const BounceInfinity = styled.div`
  animation: 3s ${keyframes`${bounce}`} infinite;
`;

export const FadeInLeft = styled.div`
  animation: 0.5s ${keyframes`${fadeInLeft}`} 1;
`;

export const FadeIn = styled.div`
  animation: 4s ${keyframes`${fadeIn}`} 1;
`;
