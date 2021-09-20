import styled from "styled-components";
import { white, blue } from "../../styles/colors";

interface Styles {
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  flexWrap?: string;
  margin?: string;
  padding?: string;
}

export const FlexWrapper = styled.div<Styles>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  flex-wrap: ${({ flexWrap }) => flexWrap || ""};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
`;

export const HeaderWrapper = styled.div`
  background: ${white};
  height: 4.5rem;
  box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 4%);
  margin-bottom: 3rem;
`;

export const HeaderSectionWrapper = styled.div`
  width: 100%;
  background: ${blue};
  height: 3.5rem;
`;
export const CenterContentWrapper = styled(FlexWrapper)`
  height: 100%;
`;

export const HeaderTextWrapper = styled.p`
  font-size: 0.938rem;
  color: ${white};
  margin-left: 1.125rem;
`;

interface ContentStyles {
  display?: string;
  flexDirection?: string;
  margin?: string;
  width?: string;
}

export const ContentWrapper = styled.div<ContentStyles>`
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  margin: ${({ margin }) => margin || ""};
  width: ${({ width }) => width || ""};
`;
