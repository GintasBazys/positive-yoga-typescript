import styled from "styled-components";

import { TextBaseBold } from "./TextBase";

interface Styles {
  fontSize?: string;
  lineHeight?: string;
  marginBottom?: string;
}

export const HeadingH1 = styled(TextBaseBold).attrs(() => ({
  as: "h1",
}))<Styles>`
  font-size: ${({ fontSize }) => fontSize || "2.5rem"};
  line-height: ${({ lineHeight }) => lineHeight || "3.5rem"};
  padding: 0 1rem;
`;

export const HeadingH2 = styled(TextBaseBold).attrs(() => ({
  as: "h2",
}))<Styles>`
  font-size: ${({ fontSize }) => fontSize || "2rem"};
  line-height: ${({ lineHeight }) => lineHeight || "2.75rem"};
`;

export const HeadingH3 = styled(TextBaseBold).attrs(() => ({
  as: "h3",
}))<Styles>`
  font-size: ${({ fontSize }) => fontSize || "1.5rem"};
  line-height: ${({ lineHeight }) => lineHeight || "2rem"};
  margin-bottom: ${({ marginBottom }) => marginBottom || ""};
`;

export const HeadingH5 = styled(TextBaseBold).attrs(() => ({
  as: "h5",
}))<Styles>`
  font-size: 0.938rem;
  line-height: 1.25rem;
  letter-spacing: -0.025rem;
`;
