import styled from "styled-components";

interface Styles {
  position?: string;
  margin?: string;
}

export const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
  margin-top: 3rem;
`;

export const ContainerSmall = styled.div<Styles>`
  padding: 0 1rem;
  max-width: 48rem;
  display: block;
  position: ${({ position }) => position || "relative"};
  margin: ${({ margin }) => margin || "auto"};
  margin-top: 3rem;
`;
