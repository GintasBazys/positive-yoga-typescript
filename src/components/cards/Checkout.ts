import { FlexWrapper } from "components";
import styled from "styled-components";
import { orange, yellow } from "styles/colors";

export const CheckoutBlock = styled.div`
  padding: 1rem;
  height: 8.188rem;
  border: 0.125rem solid ${orange};
  box-sizing: border-box;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
`;
export const PricingLeftRight = styled(FlexWrapper)`
  height: 6.188rem;
  position: relative;
`;
export const PricingLeft = styled(FlexWrapper)`
  height: 6.188rem;
`;

export const Prices = styled(FlexWrapper)``;

export const PricingTitleAndDiscount = styled(FlexWrapper)``;

export const PricingDiscount = styled(FlexWrapper)`
  width: 4.813rem;
  height: 1.5rem;
  background: ${yellow};
  border-radius: 0.375rem;
`;

export const PricingInfo = styled(FlexWrapper)`
  display: inline-flex;
  gap: 1rem;
`;

interface Styles {
  opacity?: string;
}

export const PlanSelection = styled.div<Styles>`
  opacity: ${({ opacity }) => opacity || "0.08"};
  position: absolute;
  top: 2rem;
  right: 0;
`;
