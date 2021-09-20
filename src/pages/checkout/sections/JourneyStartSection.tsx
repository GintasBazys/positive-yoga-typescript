import { ContainerSmall, FlexWrapper, HeadingH3 } from "components";
import React from "react";
import { Image } from "components";

import { useQuery } from "styles/breakpoints";
import { Steps } from "./elements/Steps";

const JourneyStartSection = () => {
  const { isMobile, isTablet, issmMobile } = useQuery();

  return (
    <ContainerSmall>
      <FlexWrapper
        flexDirection={isMobile || isTablet || issmMobile ? "column" : "row"}
      >
        <FlexWrapper flexDirection="column">
          <HeadingH3 margin="1.5rem 0">Start your yoga yourney now!</HeadingH3>
          <Image maxWidth="92%" src="start_yoga" />
        </FlexWrapper>

        <div>
          <HeadingH3 margin="1.5rem 0">
            Is Positive Yoga right for me?
            <Steps />
          </HeadingH3>
        </div>
      </FlexWrapper>
    </ContainerSmall>
  );
};

export default JourneyStartSection;
