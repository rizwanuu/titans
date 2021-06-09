import { media, styled } from "@styles";

export const Wrapper = styled.div`
  margin-bottom: 1.4rem;
  ${media.largeScreen`
    margin-bottom: 0;
  `};
`;

export const Bar = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.theme.typography.smallFontSize};
  margin-top: 1rem;
  margin-bottom: 1.4rem;
  ${media.largeScreen`
    height: auto;
    display: block;
    margin-top: 0;
    margin-bottom: 0;
  `};
`;

export const Pagination = styled.div`
  display: flex;
  margin-left: -400px;
  justify-content: flex-end;
`;

export const Pages = styled.div`
  padding-right: 10%;
  font-weight: bold;
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

export const RightSide = styled.div`
  height: 1.2rem;
  ${media.largeScreen`
    display: none;
  `};
`;

export const FiltersButton = styled.button`
  font-size: ${props => props.theme.typography.smallFontSize};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Clear = styled.button`
  padding-left: 2rem;
  cursor: pointer;
  font-size: ${props => props.theme.typography.smallFontSize};
  color: ${props => props.theme.colors.lightFont};
`;
export const Element = styled.span``;

export const Filters = styled.span`
  font-weight: ${props => props.theme.typography.boldFontWeight};
  padding: 0 0.6rem;
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.lightFont};
`;

export const Sort = styled.div`
  width: 12rem;
  display: inline-block;
`;

export const FiltersChipsWrapper = styled.div`
  > div {
    margin: 0.4rem;
  }
`;
