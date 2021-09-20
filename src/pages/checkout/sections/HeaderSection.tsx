import React, { useEffect } from "react";

import {
  CenterContentWrapper,
  HeaderSectionWrapper,
  HeaderTextWrapper,
  HeaderWrapper,
  SmallText,
  HeadingH1,
} from "components";

import { Image } from "components";

const HeaderSection = () => {
  const format = (time: number) => {
    //format time
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds}`;
  };

  const [counter, setCounter] = React.useState(949); //15:49 in seconds
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000); //update Counter
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]); //render counter on each state change

  return (
    <>
      <HeaderSectionWrapper>
        {" "}
        <CenterContentWrapper
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          {" "}
          <Image src="shopping_icon" />
          <HeaderTextWrapper>
            50% discount only valid for <b>00:{format(counter)}</b>
          </HeaderTextWrapper>
        </CenterContentWrapper>
      </HeaderSectionWrapper>
      <HeaderWrapper>
        <CenterContentWrapper justifyContent="center" alignItems="center">
          <Image src="yoga_logo" />
        </CenterContentWrapper>
      </HeaderWrapper>

      <CenterContentWrapper
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <SmallText padding="0 1rem">
          Over <b>52 147</b> plans ordered.
        </SmallText>
        <HeadingH1>Get access to your yoga program now!</HeadingH1>
      </CenterContentWrapper>
    </>
  );
};

export default HeaderSection;
