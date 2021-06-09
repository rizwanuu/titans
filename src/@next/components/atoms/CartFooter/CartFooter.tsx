import React from "react";
import { FormattedMessage } from "react-intl";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

import Free from '../../../../images/free.png';
import Shiping from '../../../../images/three.png';

/**
 * Cart footer to use with conjunction of cart rows
 */
const CartFooter: React.FC<IProps> = ({
  subtotalPrice,
  shippingPrice,
  discountPrice,
  totalPrice,
}: IProps) => {
  return (
    <S.Container>
      <S.Wrapper showShipping={!!shippingPrice} showDiscount={!!discountPrice}>
        <S.DiscountcodeText>
          <FormattedMessage {...commonMessages.discountCode} />
        </S.DiscountcodeText>
        <S.DiscountCode>Enter Here</S.DiscountCode>

        <S.SubtotalText>
          <FormattedMessage {...commonMessages.subtotal} />
        </S.SubtotalText>
        <S.SubtotalPrice>{subtotalPrice}</S.SubtotalPrice>
        {/* {shippingPrice && (
        <>
          <S.ShippingText>
            <FormattedMessage {...commonMessages.shipping} />
          </S.ShippingText>
          <S.ShippingPrice>{shippingPrice}</S.ShippingPrice>
        </>
      )} */}
        {/* {discountPrice && (
        <>
          <S.DiscountText>
            <FormattedMessage {...commonMessages.promoCode} />
          </S.DiscountText>
          <S.DiscountPrice>{discountPrice}</S.DiscountPrice>
        </>
      )} */}
        {/* <S.TotalText>
        <FormattedMessage {...commonMessages.total} />
      </S.TotalText>
      <S.TotalPrice>{totalPrice}</S.TotalPrice> */}
      </S.Wrapper>
      <S.Shiping>
        <S.ShipingEligible>
          <S.Img src={Free} />
          <S.Text1>FREE SHIPPING ELIGIBILITY</S.Text1>
          <S.Text2>Free Shipping Qualified</S.Text2>
        </S.ShipingEligible>
        <S.ShipingInfo>
          <S.Img src={Shiping} />
          <S.Text1>Shipping information</S.Text1>
          <S.Text2>This order has product that requires complex shipping.</S.Text2>
        </S.ShipingInfo>
      </S.Shiping>
    </S.Container>
  );
};

export { CartFooter };
