import { styled } from "@styles";

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.light};
  height: 360px;
  /* height: auto; */
  /*padding-left: 3rem; */
  padding-top: 2rem;
`;

export const MenuHeader = styled.div`
  font-size: ${props => props.theme.typography.h3FontSize};
  font-weight: ${props => props.theme.typography.boldFontWeight};
  text-transform: "uppercase";
  padding-bottom: 2rem;
`;

export const MenuItem = styled.div<{
  active: boolean;
}>`
  cursor: pointer;
  font-weight: ${props => (props.active ? "bold" : "")};
  padding: 0.5rem 2rem;
  color: ${props => (props.active ? props.theme.colors.activeMenuOption : "")};
  border-left: ${props =>
    props.active ? `3px solid ${props.theme.colors.activeMenuOption}` : ""};
`;
