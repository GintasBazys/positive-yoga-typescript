import React from "react";

import {
  CenterContentWrapper,
  ContainerSmall,
  FlexWrapper,
  HeadingH3,
  TextWrapper,
} from "components";
import { SecondaryButton } from "components/buttons/SecondaryButton";

import { white } from "styles/colors";

import { FAQItem } from "./elements/FAQItem";

const FAQSection = () => {
  const FAQ = [
    {
      question: "What happens after I order?",
      answer: {
        __html: `After you place your order, we get to work!<br /> Based on the
            questions you answered in the quiz, we’ll craft your personal plan
            to your level with recomendations on how to improve.`,
      },
      id: "1",
    },
    {
      question: "Where can I access my plan?",
      answer: {
        __html: `Your plan will be accessible in Positive Yoga's web app with a
          special link generated after your purchase.`,
      },
      id: "2",
    },
    {
      question: "How can I cancel my subscription?",
      answer: {
        __html: `You can manage or cancel your subscription by writing our customer
          support hello@positiveyoga.app.`,
      },
      id: "3",
    },
    {
      question: "Why this program is paid?",
      answer: {
        __html: `We are aiming to offer our clients the best experience, which comes
          with a lot of work. The entire yoga program is developed by our large
          team of experts that work long hours to prepare effective, trustworthy
          and enjoyable content and workouts that can help you to reach your
          goals. The program is also completely free of ads and is constantly
          being updated based on your feedback!`,
      },
      id: "4",
    },
  ];

  return (
    <ContainerSmall>
      <CenterContentWrapper justifyContent="center" alignItems="center">
        <HeadingH3>Frequently Asked Questions</HeadingH3>
      </CenterContentWrapper>
      <FlexWrapper flexDirection="column">
        {FAQ.map((faq) => {
          return <FAQItem faq={faq} key={faq.id} />;
        })}
      </FlexWrapper>
      <CenterContentWrapper justifyContent="center" alignItems="center">
        <SecondaryButton margin="3rem 0">
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
    </ContainerSmall>
  );
};

export default FAQSection;
