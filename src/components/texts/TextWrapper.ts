import styled from "styled-components";

interface Styles {
  color?: string;
  fontWeight?: string;
  textDecorationLine?: string;
  letterSpacing?: string;
  textShadow?: string;
  margin?: string;
}

export const TextWrapper = styled.span<Styles>`
  color: ${({ color }) => color || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  text-decoration-line: ${({ textDecorationLine }) => textDecorationLine || ""};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || ""};
  text-shadow: ${({ textShadow }) => textShadow || ""};
  margin: ${({ margin }) => margin || ""}; ;
`;
