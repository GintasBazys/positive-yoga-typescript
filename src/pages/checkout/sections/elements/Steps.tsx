import React from "react";

import { FlexWrapper, SmallText, Image } from "components";

export const Steps = () => {
  const STEPS = [
    {
      text: "Each program adapts to your age or fitness level",
    },
    {
      text: "Mindful way to exercise and get real results",
    },
    {
      text: "Effective and long-term lasting results",
    },
    {
      text: "Suited activities that benefit both the mind and body",
    },
    {
      text: "Low-intensity but highly-effective workouts",
    },
    {
      text: "Extra attention to muscle, joint and back health",
    },
  ];

  return (
    <>
      {STEPS.map((step) => {
        return (
          <FlexWrapper
            flexDirection="row"
            alignItems="flex-start"
            margin="0.5rem 0"
          >
            <Image src="green_checkmark" />
            <SmallText fontWeight="400" padding="0 1rem">
              {step.text}
            </SmallText>
          </FlexWrapper>
        );
      })}
    </>
  );
};
