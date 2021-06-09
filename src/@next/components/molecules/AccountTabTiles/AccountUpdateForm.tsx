import { Formik } from "formik";
import React from "react";
import { useIntl, FormattedMessage } from "react-intl";
import { Button, ButtonLink } from "@components/atoms";
import { commonMessages } from "@temp/intl";

import { TextField } from "../TextField";

import * as S from "./styles";

export const AccountUpdateForm: React.FC<{
  handleSubmit: (data: any) => void;
  hide: () => void;
  initialValues: {
    firstName: string;
    lastName: string;
  };
}> = ({ handleSubmit, hide, initialValues }) => {
  const intl = useIntl();
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit({
            firstName: values.firstName,
            lastName: values.lastName,
          });
          setSubmitting(false);
        }}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          isSubmitting,
          isValid,
        }) => {
          return (
            <S.Form onSubmit={handleSubmit} data-test="accountUpdateForm">
              <S.ContentEditOneLine>
                <S.ContentExtendInput>
                  <S.HeaderSmall>
                    <FormattedMessage defaultMessage="General Information" />
                  </S.HeaderSmall>
                  <TextField
                    name="firstName"
                    label={intl.formatMessage(commonMessages.firstName)}
                    type="text"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <TextField
                    name="lastName"
                    label={intl.formatMessage(commonMessages.lastName)}
                    type="text"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <TextField
                    name="companyName"
                    label={intl.formatMessage(commonMessages.companyName)}
                    type="text"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <TextField
                    name="address1"
                    label={intl.formatMessage(commonMessages.address1)}
                    type="text"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <TextField
                    name="address2"
                    label={intl.formatMessage(commonMessages.address2)}
                    type="text"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <S.CityState>
                    <TextField
                      name="city"
                      label={intl.formatMessage(commonMessages.city)}
                      type="text"
                      value={values.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <TextField
                      name="state"
                      label={intl.formatMessage(commonMessages.state)}
                      type="text"
                      value={values.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </S.CityState>
                  <S.CityState>
                    <TextField
                      name="country"
                      label={intl.formatMessage(commonMessages.country)}
                      type="text"
                      value={values.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <TextField
                      name="zip"
                      label={intl.formatMessage(commonMessages.zip)}
                      type="text"
                      value={values.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </S.CityState>
                </S.ContentExtendInput>
                <S.HeaderSmall>
                  <FormattedMessage defaultMessage="Contact Information" />
                </S.HeaderSmall>
                <S.CityState>
                  <TextField
                    name="primaryPhone"
                    label={intl.formatMessage(commonMessages.primaryPhone)}
                    type="text"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <TextField
                    name="phoneExt"
                    label={intl.formatMessage(commonMessages.phoneExt)}
                    type="text"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </S.CityState>
              </S.ContentEditOneLine>
              <S.ContentEditOneLine>
                <S.HeaderSmall>
                  <FormattedMessage defaultMessage="Tax Exemption" />
                </S.HeaderSmall>
                <S.CheckBox>
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <p style={{ fontSize: "14px", paddingLeft: "1rem" }}>Are you a tax exemption certificate owner?</p>
                </S.CheckBox>
                <TextField
                  name="checkbox"
                  label={intl.formatMessage(commonMessages.firstName)}
                  type="text"
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </S.ContentEditOneLine>
              <S.FormButtons>
                <ButtonLink
                  testingContext="cancelButton"
                  type="button"
                  color="secondary"
                  onClick={hide}
                >
                  <FormattedMessage {...commonMessages.cancel} />
                </ButtonLink>
                <Button
                  testingContext="submit"
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  size="sm"
                >
                  <FormattedMessage {...commonMessages.save} />
                </Button>
              </S.FormButtons>
            </S.Form>
          );
        }}
      </Formik>
    </>
  );
};
