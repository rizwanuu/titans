import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { commonMessages } from "@temp/intl";
import { useAccountUpdate, useAuth } from "@saleor/sdk";

import {
  Attribute,
  IconButton,
  Tile
} from "@components/atoms";

import { AccountUpdateForm } from "./AccountUpdateForm";
import * as S from "./styles";

export const AccountTile: React.FC = () => {
  const [isEditing, setIsEditing] = React.useState(true);
  const [setAccountUpdate, { data, error }] = useAccountUpdate();
  const intl = useIntl();
  const { user } = useAuth();

  React.useEffect(() => {
    if (data && !error) {
      setIsEditing(false);
    }
  }, [data, error]);
  return (
    <S.TileWrapper>
      <Tile>
        <S.Wrapper>
          <S.Header>
            <FormattedMessage defaultMessage="ACCOUNT Information" />
          </S.Header>
          <S.Content>
            {isEditing ? (
              <AccountUpdateForm
                initialValues={{
                  firstName: (user && user.firstName) || "",
                  lastName: (user && user.lastName) || "",
                }}
                handleSubmit={data => {
                  setAccountUpdate({ input: data });
                }}
                hide={() => {
                  setIsEditing(false);
                }}
              />
            ) : (
              <S.ShowDetail>
                <S.HeaderSmall>
                  <FormattedMessage defaultMessage="Personal information" />
                  {!isEditing && (
                    <IconButton
                      testingContext="editDetailsButton"
                      name="edit"
                      size={22}
                      onClick={() => setIsEditing(isEditing => !isEditing)}
                    />
                  )}
                </S.HeaderSmall>
                <S.ContentOneLine data-test="personalDetailsSection">
                  <Attribute
                    description={intl.formatMessage(commonMessages.firstName)}
                    attributeValue={(user && user.firstName) || "-"}
                    testingContext="firstNameText"
                  />
                  <Attribute
                    description={intl.formatMessage(commonMessages.lastName)}
                    attributeValue={(user && user.lastName) || "-"}
                    testingContext="lastNameText"
                  />
                </S.ContentOneLine>
              </S.ShowDetail>
            )}
          </S.Content>
        </S.Wrapper>
      </Tile>
    </S.TileWrapper>
  );
};
