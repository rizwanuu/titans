import { media, styled } from "@styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const TileWrapper = styled.div`
  height: auto;
  margin-bottom: 1.5rem;
`;

// border-bottom: 1px solid ${props => props.theme.colors.dividerDark};
// height: 4rem;
export const Header = styled.div`
  width: 100%;
  padding: 1rem 0;
  font-weight: ${props => props.theme.typography.boldFontWeight};
  font-size: ${props => props.theme.typography.h4FontSize};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;

export const HeaderSmall = styled(Header)`
  width: 100%;
  border-bottom: none;
  text-transform: uppercase;
`;

export const Content = styled.div`
  width: 100%;
`;

export const ContentOneLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  ${media.smallScreen`
    flex-direction: column;
    width: 100%;
  `}
`;
export const ContentEdit = styled.div`
  width: 50%;
  ${media.smallScreen`
     width: 100%;
  `}
`;

// display: flex;
// width: 100%;
// flex-direction: row;
// justify-content: space-between;
export const ContentEditOneLine = styled.div`
  border: 1px solid ${props => props.theme.tile.outerBorderColor};
  padding: 2rem;
  margin-bottom: 2rem;
  > div {
    width: 100%;
    ${media.smallScreen`
      width: 100%;
    `}
  }

  ${media.smallScreen`
     flex-direction: column;
  `}
`;

export const ContentExtendInput = styled.div`
  width: 60%;
  border-bottom: 1px solid ${props => props.theme.tile.outerBorderColor};
`;

export const CityState = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${media.mediumScreen`
  display: block;
  `}
`;

// background-color: ${props => props.theme.tile.backgroundColor};
export const Form = styled.form``;

export const FormButtons = styled.div`
  height: 5rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  button {
    margin-left: 2rem;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.tile.outerBorderColor};
  margin-bottom: 1.5px;
`;

export const ShowDetail = styled.div`

`;
