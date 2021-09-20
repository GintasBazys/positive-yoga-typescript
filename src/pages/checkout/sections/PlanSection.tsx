import React from "react";

import {
  Container,
  ContainerSmall,
  ContentWrapper,
  FlexWrapper,
  HeadingH3,
  SecondaryButton,
  TextBase,
  Image,
  TextWrapper,
  RegularText,
} from "components";

import { grey, lightBlue, orange, white } from "styles/colors";

import PlanCards from "./elements/PlanCards";

import { useQuery } from "styles/breakpoints";
import ProgramDescriptionList from "./elements/ProgramDescriptionList";

const PlanSection = () => {
  const { isMobile, isTablet, issmMobile } = useQuery();

  return (
    <Container>
      <ContainerSmall>
        <FlexWrapper
          flexDirection={isMobile || isTablet || issmMobile ? "column" : "row"}
          alignItems={
            isMobile || isTablet || issmMobile ? "center" : "flex-start"
          }
          justifyContent="center"
        >
          <ContentWrapper width="22rem" flexDirection="column">
            <HeadingH3 marginBottom="1rem">
              Choose your plan and get{" "}
              <TextWrapper color={orange}> 7 days free trial</TextWrapper>
            </HeadingH3>
            <PlanCards />
            <SecondaryButton maxWidth="19rem">
              <RegularText>
                <TextWrapper
                  color={white}
                  fontWeight="700"
                  letterSpacing="-0.4px"
                  textShadow="0 0.25rem 0.5rem rgb(0 0 0 / 16%)"
                >
                  Get your plan
                </TextWrapper>
              </RegularText>
            </SecondaryButton>
            <TextBase
              color={grey}
              margin="1rem 0"
              fontSize="0.75rem"
              textAlign="center"
            >
              Your free trial will automatically become a paid subscription on
              the 8th day after you begin your trial. To cancel your
              subscription, please contact us at least 24 hours before the end
              of the trial period.
            </TextBase>
            <TextBase
              color={grey}
              margin="0.5rem 0"
              fontSize="0.75rem"
              textAlign="center"
            >
              By choosing a payment method you agree to the{" "}
              <TextWrapper color={lightBlue}>T&Cs</TextWrapper> and{" "}
              <TextWrapper color={lightBlue}>Privacy Policy</TextWrapper>
            </TextBase>
            <Image maxWidth="100%" src="safe_checkout" />
          </ContentWrapper>

          <ContentWrapper flexDirection="column" margin="0 2rem">
            <HeadingH3 marginBottom="1rem">What's in my program?</HeadingH3>
            <ProgramDescriptionList />
          </ContentWrapper>
        </FlexWrapper>
      </ContainerSmall>
    </Container>
  );
};

export default PlanSection;
