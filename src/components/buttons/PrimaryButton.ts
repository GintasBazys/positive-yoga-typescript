import styled, { keyframes } from "styled-components";
import { Button } from "../buttons/Button";

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

export const PrimaryButton = styled(Button)`
  animation: ${fadeIn} 2s ease-out;
`;
