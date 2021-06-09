import { media, styled } from "@styles";

export const Wrapper = styled.div``;
export const Heading = styled.div`
  font-style: normal;
  font-weight: ${props => props.theme.typography.extraBoldFontWeight};
  font-size: 36px;
  line-height: 150%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 1rem;
  background: #f4f4f4;
`;
export const Sort = styled.div``;
export const StatusFilter = styled.div``;
export const Label = styled.label``;
export const Select = styled.select`
  margin-left: 1rem;
  width: 154px;
  height: 48px;
  padding: 0.5rem;
  border: 1px solid;
  color: ${props => props.theme.colors.disabled};
  &:hover {
    color: ${props => props.theme.colors.dark};
  }
`;
export const SelectOptions = styled.option``;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 5rem;
  border-bottom: 1px solid ${props => props.theme.colors.tableDivider};
`;

export const HeaderRow = styled(Row)`
  color: ${props => props.theme.colors.lightFont};
  cursor: default;
`;

export const IndexNumber = styled.div`
  width: 15%;
  ${media.smallScreen`
     width: 50%;
  `}
`;
export const ProductsOrdered = styled.div`
  width: 25%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  img {
    max-width: 50px;
    height: auto;
  }
`;
export const DateOfOrder = styled.div`
  width: 25%;
`;
export const Value = styled.div`
  width: 25%;
`;
export const Status = styled.div`
  width: 25%;
  ${media.smallScreen`
     width: 50%;
  `}
`;
export const Action = styled.div`
  width: 25%;
  color: ${props => props.theme.colors.blueFont} 
  cursor: pointer;
  ${media.smallScreen`
     width: 50%;
  `};
`;
