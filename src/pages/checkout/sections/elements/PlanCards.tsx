import React, { useState } from "react";

import { orange } from "styles/colors";
import { PlanCard } from "./PlanCard";

const PlanCards = () => {
  const CHECKOUT_CARDS = [
    {
      month_plan: "6 month plan",
      discount: "save 50%",
      monthly_payment: "$9.99",
      pricing_old: "$119.94",
      pricing_info: {
        __html: `<span style="color: ${orange}">$59.94</span> billed every 3 months`,
      },
      id: "1",
    },
    {
      month_plan: "3 month plan",
      discount: "",
      monthly_payment: "$14.99",
      pricing_old: "$59.97",
      pricing_info: {
        __html: `<span style="color: ${orange}">$44.97</span> billed every 3 months`,
      },
      id: "2",
    },
    {
      month_plan: "1 month plan",
      discount: "",
      monthly_payment: "$19.99",
      pricing_info: {
        __html: `Billed monthly`,
      },
      pricing_old: "",
      id: "3",
    },
  ];

  const [isSelected, setIsSelected] = useState({
    six_months_plan: true,
    three_months_plan: false,
    one_month_plan: false,
  });
  const handleClick = (index: number) => {
    if (index === 0) {
      setIsSelected((prevState) => ({
        ...prevState,
        six_months_plan: true,
        three_months_plan: false,
        one_month_plan: false,
      }));
    }
    if (index === 1) {
      setIsSelected((prevState) => ({
        ...prevState,
        six_months_plan: false,
        three_months_plan: true,
        one_month_plan: false,
      }));
    }
    if (index === 2) {
      setIsSelected((prevState) => ({
        ...prevState,
        six_months_plan: false,
        three_months_plan: false,
        one_month_plan: true,
      }));
    }
  };

  return (
    <>
      {CHECKOUT_CARDS.map((card, index) => {
        return (
          <div key={card.id} onClick={() => handleClick(index)}>
            <PlanCard
              selectedCard={
                isSelected.six_months_plan && index === 0
                  ? true
                  : isSelected.three_months_plan && index === 1
                  ? true
                  : isSelected.one_month_plan && index === 2
                  ? true
                  : ""
              }
              card={card}
            />
          </div>
        );
      })}
    </>
  );
};

export default PlanCards;
