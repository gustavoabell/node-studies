// import React from 'react';
import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 2rem;
  background-color: palegoldenrod;
`;

export const FadeIn = keyframes`
0% {
  opacity: 0;
  transform: scale(0);
}

100% {
  opacity: 1;
}
`;
