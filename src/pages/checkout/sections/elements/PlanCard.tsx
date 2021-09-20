import React from "react";

import {
  CheckoutBlock,
  HeadingH5,
  PricingLeftRight,
  PricingLeft,
  Image,
  HeadingH2,
  SmallText,
  Prices,
  PricingTitleAndDiscount,
  PricingDiscount,
  PricingInfo,
  RegularText,
  TextBaseBold,
  PlanSelection,
  FlexWrapper,
  TextWrapper,
} from "components";

type Props = {
  card: {
    month_plan: string;
    discount: string;
    monthly_payment: string;
    pricing_old: string;
    pricing_info: {
      __html: string;
    };
    id: string;
  };
  selectedCard: string | boolean;
};

export const PlanCard: React.FC<Props> = ({ card, selectedCard }: any) => {
  return (
    <CheckoutBlock>
      <PricingLeftRight
        flexDirection="row"
        alignItems="center"
        margin="0.5rem 0"
      >
        <PricingLeft
          flexDirection="column"
          alignItems="flex-start"
          margin="0 0.25rem 2.813rem"
        >
          <PricingTitleAndDiscount
            flexDirection="row"
            alignItems="flex-start"
            margin="0.438rem 0"
          >
            <HeadingH5>{card.month_plan}</HeadingH5>
            {card.discount !== "" ? (
              <PricingDiscount
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                margin="0 1rem"
              >
                <TextBaseBold fontSize="0.75rem">{card.discount}</TextBaseBold>
              </PricingDiscount>
            ) : (
              ""
            )}
          </PricingTitleAndDiscount>

          <Prices flexDirection="column" margin="0.438rem 0">
            <FlexWrapper alignItems="center">
              <HeadingH2>{card.monthly_payment}</HeadingH2>{" "}
              <SmallText marginLeft="1rem">/ month</SmallText>
            </FlexWrapper>

            <PricingInfo margin="0.25rem 0" flexWrap="wrap">
              {card.pricing_old !== "" ? (
                <RegularText>
                  <TextWrapper textDecorationLine="line-through">
                    {card.pricing_old}
                  </TextWrapper>
                </RegularText>
              ) : (
                ""
              )}
              <RegularText>
                <span dangerouslySetInnerHTML={card.pricing_info} />
              </RegularText>
            </PricingInfo>
          </Prices>
        </PricingLeft>
        {selectedCard ? (
          <PlanSelection opacity="1">
            <Image src="plan_selected_icon" />
          </PlanSelection>
        ) : (
          <PlanSelection opacity="0.08">
            <Image src="plan_not_selected" />
          </PlanSelection>
        )}
      </PricingLeftRight>
    </CheckoutBlock>
  );
};
