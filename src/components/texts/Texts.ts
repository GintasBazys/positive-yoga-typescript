import styled from "styled-components";

interface Styles {
  marginTop?: string;
}

export const RegularText = styled.p<Styles>`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: ${({ marginTop }) => marginTop || ""};
`;

type Props = {
  padding?: string;
  color?: string;
  marginLeft?: string;
  fontWeight?: string;
};

export const SmallText = styled.p<Props>`
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: ${({ padding }) => padding || ""};
  margin-left: ${({ marginLeft }) => marginLeft || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
`;
export const CaptionText = styled.p<Props>`
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: ${({ color }) => color || ""};
  mix-blend-mode: normal;
  opacity: 0.64;
  font-weight: ${({ fontWeight }) => fontWeight || ""};
`;
