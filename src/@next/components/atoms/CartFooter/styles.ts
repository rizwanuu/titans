import { media, styled } from "@styles";

export const Container = styled.div``;

export const Shiping = styled.div`
  display: flex;
  ${media.largeScreen`
  display: block;
  `}
`;
export const ShipingEligible = styled.div`
  width: 50%;
  background: #f6f6f6;
  padding: 1rem;
  margin: 1rem 1rem 0 0;
  ${media.largeScreen`
  width: 100%;
  padding: 1rem;
  height: 10rem;
  `}
`;
export const ShipingInfo = styled.div`
  margin: 1rem 0 0 0;
  width: 50%;
  background: #f6f6f6;
  padding: 1rem;
  ${media.largeScreen`
  width: 100%;
  padding: 1rem;
  height: 10rem;
  `}
`;
export const Text1 = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  padding: 0.5rem 0;
`;
export const Text2 = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #323232;
`;
export const Img = styled.img``;

export const Wrapper = styled.div<{
  showShipping: boolean;
  showDiscount: boolean;
}>`
  display: grid;
  grid-template-areas:
    ". discountcodeText discountCode ."
    ". subtotalText subtotalPrice ."
    ${props => props.showShipping && `". shippingText shippingPrice ."`}
    ${props => props.showDiscount && `". discountText discountPrice ."`}
    ". totalText totalPrice .";
  grid-template-columns: 4fr 1.1fr 0.9fr 0.5fr;
  grid-gap: 1rem;
  padding: 1rem 0;
  ${props => media.mediumScreen`
    grid-template-areas:
    ". discountcodeText discountCode ."
      ". subtotalText subtotalPrice"
      ${props.showShipping && `". shippingText shippingPrice"`}
      ${props.showDiscount && `". discountText discountPrice"`}
      ". totalText totalPrice";
    grid-template-columns: 0.5fr 3.5fr 2fr;
  `}
  border-bottom: 1px solid rgba(50, 50, 50, 0.1);
`;

export const SubtotalText = styled.div`
  grid-area: subtotalText;
  text-align: right;
`;
export const SubtotalPrice = styled.div`
  grid-area: subtotalPrice;
  ${media.mediumScreen`
    text-align: right;
  `}
`;
export const DiscountcodeText = styled.div`
  grid-area: discountcodeText;
  font-size: 14px;
  text-align: right;
`;
export const DiscountCode = styled.div`
  grid-area: discountCode;
  color: #c41425;
  ${media.mediumScreen`
    text-align: right;
  `}
`;

export const ShippingText = styled.div`
  grid-area: shippingText;
`;
export const ShippingPrice = styled.div`
  grid-area: shippingPrice;
  ${media.mediumScreen`
    text-align: right;
  `}
`;

export const DiscountText = styled.div`
  grid-area: discountText;
`;
export const DiscountPrice = styled.div`
  grid-area: discountPrice;
  ${media.mediumScreen`
    text-align: right;
  `}
`;

export const TotalText = styled.div`
  grid-area: totalText;
  font-weight: bold;
`;
export const TotalPrice = styled.div`
  grid-area: totalPrice;
  font-weight: bold;
  ${media.mediumScreen`
    text-align: right;
  `}
`;
