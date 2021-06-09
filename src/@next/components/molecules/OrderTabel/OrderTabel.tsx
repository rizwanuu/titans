import React from "react";
import { FormattedMessage, FormattedDate, useIntl } from "react-intl";
import Media from "react-media";
import { ThemeContext } from "styled-components";

import { TaxedMoney } from "@components/containers";
import { commonMessages, translateOrderStatus } from "@temp/intl";

// import { Thumbnail } from "..";
// import { generateProductUrl } from "../../../../core/utils";

import * as S from "./styles";
import { IProps } from "./types";

const header = (matches: boolean) => (
  <S.HeaderRow>
    <S.IndexNumber>
      <FormattedMessage defaultMessage="Order#" />
    </S.IndexNumber>
    {matches && (
      <>
        <S.ProductsOrdered>
          <FormattedMessage defaultMessage="Status" />
        </S.ProductsOrdered>
        <S.DateOfOrder>
          <FormattedMessage defaultMessage="Last Updated" />
        </S.DateOfOrder>
        <S.Value>
          <FormattedMessage defaultMessage="Order Total" />
        </S.Value>
        <S.Status>
          <FormattedMessage {...commonMessages.action} />
        </S.Status>
      </>
    )}
  </S.HeaderRow>
);

export const OrderTabel: React.FC<IProps> = ({ orders, history }: IProps) => {
  const theme = React.useContext(ThemeContext);
  const intl = useIntl();
  return (
    <S.Wrapper>
      <S.Heading>Orders</S.Heading>
      <S.Filters>
        <S.Sort>
          <S.Label>Sort by:</S.Label>
          <S.Select name="Newest" id="Newest">
            <S.SelectOptions value="Newest">Newest</S.SelectOptions>
            <S.SelectOptions value="decending">Decending Order</S.SelectOptions>
            <S.SelectOptions value="acending">Acending Order</S.SelectOptions>
            <S.SelectOptions value="latest">Latest</S.SelectOptions>
          </S.Select>
        </S.Sort>
        <S.StatusFilter>
          <S.Label>Filter By Status</S.Label>
          <S.Select name="cars" id="cars">
            <S.SelectOptions value="volvo" disabled >Select Status</S.SelectOptions>
            <S.SelectOptions value="saab">Saab</S.SelectOptions>
            <S.SelectOptions value="mercedes">Mercedes</S.SelectOptions>
            <S.SelectOptions value="audi">Audi</S.SelectOptions>
          </S.Select>
        </S.StatusFilter>
      </S.Filters>
      <Media
        query={{
          minWidth: theme.breakpoints.smallScreen,
        }}
      >
        {(matches: boolean) => {
          return (
            <>
              <S.Row>{header(matches)}</S.Row>
              {orders &&
                orders.map(order => {
                  const date = new Date(order.node.created);
                  return (
                    <S.Row
                      data-test="orderEntry"
                      data-test-id={order.node.number}
                      key={order.node.number}
                    >
                      <S.IndexNumber>{order.node.number}</S.IndexNumber>
                      {matches ? (
                        <>
                          {/* <S.ProductsOrdered>
                            {order.node.lines
                              .slice(0, 5)
                              .map((product: any) => (
                                <span
                                  key={product.variant.product.id}
                                  onClick={evt => {
                                    evt.stopPropagation();
                                    history.push(
                                      generateProductUrl(
                                        product.variant.product.id,
                                        product.variant.product.name
                                      )
                                    );
                                  }}
                                >
                                  <Thumbnail source={product} />
                                </span>
                              ))}
                          </S.ProductsOrdered> */}
                          <S.Status>
                            {translateOrderStatus(order.node.statusDisplay, intl)}
                          </S.Status>
                          <S.DateOfOrder>
                            <FormattedDate value={date} />
                          </S.DateOfOrder>
                          <S.Value>
                            <TaxedMoney taxedMoney={order.node.total} />
                          </S.Value>
                          <S.Action
                            onClick={evt => {
                              evt.stopPropagation();
                              history.push(`/order-history/${order.node.token}`);
                            }}>View</S.Action>
                        </>
                      ) : (
                        ""
                      )}
                    </S.Row>
                  );
                })}
            </>
          );
        }}
      </Media>
    </S.Wrapper>
  );
};
