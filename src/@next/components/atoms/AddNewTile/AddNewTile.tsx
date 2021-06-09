import React from "react";
import { FormattedMessage } from "react-intl";

import { Icon } from "../Icon";
import { Tile } from "../Tile";
import * as S from "./styles";
import { IProps } from "./types";

export const AddNewTile: React.FC<IProps> = ({ type, ...props }: IProps) => {
  return (
    <Tile tileType="addNew" {...props}>
      <S.Content>
        <p>
          <FormattedMessage defaultMessage="Add new {type}" values={{ type }} /><Icon size={15} color="#C41425" name="plus" />
        </p>
      </S.Content>
    </Tile>
  );
};
