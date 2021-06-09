import { media, styled } from "@styles";
import { css } from "styled-components";

// font-size: ${props => props.theme.typography.baseFontSize};
const textProps = css`
  font-size: 12px;
  margin: 1rem 0 0.5rem 0;
  text-align: left;
`;

export const Wrapper = styled.div`
  border: 1px solid #EBEBEB;
  padding: 1rem 2rem;
  text-align: center;
  max-height: 30rem;
  transition: 0.3s;

  :hover {
    box-shadow: 0 0 10px ${props => props.theme.colors.lightFont};
  }

  ${media.largeScreen`
    padding: 1.8rem;
  `}
`;

export const Title = styled.h4`
  text-transform: uppercase;
  font-weight: normal;
  ${textProps}
`;

export const Price = styled.p`
  font-weight: bold ${textProps};
`;

export const Image = styled.div`
  width: auto;
  height: auto;
  max-width: 100%;

  > img {
    width: auto;
    height: auto;
    max-width: 100%;
  }
`;
