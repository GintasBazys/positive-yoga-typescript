import styled from "styled-components";
import { white } from "../../styles/colors";

interface Styles {
  display?: string;
  margin?: string;
  padding?: string;
  maxWidth?: string;
  minWidth?: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
}

export const Button = styled.button<Styles>`
  display: ${({ display }) => display || "inline-block"};
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ padding }) => padding || "0.8rem 1.5rem"};
  max-width: ${({ maxWidth }) => maxWidth || "16rem"};
  min-width: ${({ minWidth }) => minWidth || "none"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || "0.5rem"};
  color: ${({ color }) => color || white};
  cursor: pointer;
`;
