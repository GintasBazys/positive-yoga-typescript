import React from "react";

import {
  Container,
  FlexWrapper,
  CenterContentWrapper,
  SecondaryButton,
  HeadingH3,
  TextWrapper,
} from "components";

import ReviewCard from "./elements/ReviewCard";

import { white } from "styles/colors";

import { useQuery } from "styles/breakpoints";

const SuccessSection = () => {
  const { isMobile, isTablet, issmMobile } = useQuery();

  return (
    <Container>
      <CenterContentWrapper
        padding="0 1rem"
        justifyContent="center"
        alignItems="center"
      >
        <HeadingH3>Hear success stories from our clients</HeadingH3>
      </CenterContentWrapper>
      <FlexWrapper
        flexDirection={isMobile || isTablet || issmMobile ? "column" : "row"}
        justifyContent="center"
        margin="1.5rem 0"
      >
        <ReviewCard />
      </FlexWrapper>
      <CenterContentWrapper justifyContent="center" alignItems="center">
        <SecondaryButton margin="2rem 0">
          <TextWrapper
            color={white}
            fontWeight="700"
            letterSpacing="-0.4px"
            textShadow="0 0.25rem 0.5rem rgb(0 0 0 / 16%)"
          >
            Get my plan
          </TextWrapper>
        </SecondaryButton>
      </CenterContentWrapper>
    </Container>
  );
};

export default SuccessSection;
