import styled from "styled-components";
import { white } from "styles/colors";

export const FaqToggle = styled.div`
  background: ${white};
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 1rem;
  margin-top: 0.3rem;
  position: relative;
  cursor: pointer;
`;

type Props = {
  transform?: string;
};

export const FaqImage = styled.div<Props>`
  display: inline-block;
  position: absolute;
  top: 1.375rem;
  right: 1.25rem;
  transform: ${({ transform }) => transform || ""};
`;
