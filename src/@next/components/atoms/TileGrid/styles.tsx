import { media, styled } from "@styles";

type TileProps = {
  columns: number;
};

export const Wrapper = styled.div`
  display: flex;
  margin-top: ${props => `${props.theme.spacing.gutter}`};
  justify-content: space-between;
  flex-wrap: wrap;
`;

// padding-top: ${props => props.theme.spacing.gutter};
// padding-left: ${props => props.theme.spacing.gutter};
// width: calc(100% / ${props => props.columns});
export const Tile = styled.div<TileProps>`
  border: 1px solid #E6E9EB;
  padding: 1rem;
  margin: 1rem 0;
  width: 21rem;

  ${media.smallScreen`
    width: 100%;
  `}
`;
