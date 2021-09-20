import {
  CaptionText,
  FlexWrapper,
  HeadingH5,
  Image,
  TextWrapper,
} from "components";
import React from "react";

const ProgramDescriptionList = () => {
  const PROGRAM__DESCRIPTION = [
    {
      image: "plan",
      text: "A personalized yoga program",
      caption: "Completely safe and focused on key goals",
    },
    {
      image: "exercise",
      text: "Easy & enjoyable yoga workouts for your level",
      caption: "Program adjusts to your level and pace",
    },
    {
      image: "shoe",
      text: "No special preparation needed",
      caption:
        "Perfect for begginners! Requires no special preparation or equipment",
    },
    {
      image: "diet",
      text: "Daily motivation & accountability",
      caption:
        "Track your progress, develop a healthy routine, reach goals faster",
    },
    {
      image: "whistle",
      text: "Browse from various yoga challenges",
      caption:
        "30 d morning yoga, mindful yoga, back flexibility challenge, and more!",
    },
    {
      image: "smartwatch",
      text: "Easy access on any device",
      caption: "Do your yoga anywhere across all types of devices",
    },
    {
      image: "bookcheck",
      text: "A complete guide to get started",
      caption:
        "Best tips, guidelines, advice, and recommendations for successful practice",
    },
  ];

  return (
    <>
      {PROGRAM__DESCRIPTION.map((program) => {
        return (
          <FlexWrapper
            key={program.image}
            margin="0.5rem 0"
            flexDirection="row"
          >
            <Image height="3rem" width="3rem" src={program.image}></Image>
            <TextWrapper margin="0 1.125rem">
              <HeadingH5>{program.text}</HeadingH5>
              <CaptionText fontWeight="400">{program.caption}</CaptionText>
            </TextWrapper>
          </FlexWrapper>
        );
      })}
    </>
  );
};

export default ProgramDescriptionList;
