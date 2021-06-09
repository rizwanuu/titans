import React from "react";
import * as S from "./styles";
import { IProps } from "./types";

export const TileGrid: React.FC<IProps> = ({
  elements,
  columns = 3,
}: IProps) => {
  return (
    <S.Wrapper>
      {elements.slice(1, 200).map((element: React.ReactNode, index) => (
        <S.Tile key={index} columns={columns}>
          {element}
        </S.Tile>
      ))}
    </S.Wrapper>
  );
};
