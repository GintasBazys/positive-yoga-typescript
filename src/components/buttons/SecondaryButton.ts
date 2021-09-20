import styled from "styled-components";
import { orange } from "styles/colors";
import { Button } from "./Button";

export const SecondaryButton = styled(Button)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 21.438rem;
  height: 2rem;
  background: ${orange};
  box-shadow: 0 1rem 2rem rgb(255 155 78 / 24%);
  border-radius: 0.5rem;
`;
