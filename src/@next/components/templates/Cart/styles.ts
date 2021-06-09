import { media, styled } from "@styles";

export const Wrapper = styled.div`
  margin: 30px 0 100px 0;
`;

export const Breadcrumbs = styled.div``;

export const Title = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const CartHeader = styled.div`
  ${media.mediumScreen`
    display: none;
  `};
`;
export const CartFooter = styled.div``;
export const Cart = styled.div`
  border-top: 1px solid rgba(50, 50, 50, 0.1);
`;
export const FooterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  ${media.mediumScreen`
  display: block;
`};
`;
export const RightSide = styled.div`
  display: flex;
  ${media.mediumScreen`
  margin-top: 1rem
`};
`;
export const ContinueButton = styled.div`
  ${media.mediumScreen`
  display: none
`};
`;
export const HelpButton = styled.div`
  margin: 0 3rem;
`;

export const ProceedButton = styled.div``;
