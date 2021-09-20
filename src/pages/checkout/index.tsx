import React from "react";

import FAQSection from "./sections/FAQSection";

import { CenterContentWrapper, HeadingH2 } from "components";
import Layout from "components/Layout";

import HeaderSection from "./sections/HeaderSection";
import JourneyStartSection from "./sections/JourneyStartSection";
import PlanSection from "./sections/PlanSection";
import SuccessSection from "./sections/SuccessSection";

const Checkout = () => {
  return (
    <>
      <Layout>
        <HeaderSection />
        <PlanSection />
        <SuccessSection />
        <JourneyStartSection />
        <FAQSection />
        <CenterContentWrapper justifyContent="center" alignItems="center">
          <HeadingH2 margin="0 1rem">Start your yoga journey today!</HeadingH2>
        </CenterContentWrapper>
        <PlanSection />
      </Layout>
    </>
  );
};

export default Checkout;
