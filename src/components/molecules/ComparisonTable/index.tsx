import { TableProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import * as S from "./styles";

export const ComparisonTable = ({
  teamsRows,
  benchmarkRow,
  columns,
  firstColumn,
}: TableProps) => {
  const pickTdColor = (value: string | number): string => {
    let color: string = "";
    if (typeof value === "number") {
      if (value > 9.9) {
        color = "#FFFFFF";
      } else if (value <= 2.4) {
        color = "#FF7777";
      } else if (value >= 2.5 && value <= 4.9) {
        color = "#FFBEB8";
      } else if (value >= 5 && value <= 7.4) {
        color = "#DBF2E3";
      } else if (value >= 7.5) {
        color = "#9BE7B7";
      }
    } else {
      color = "#FFFFFF";
    }
    return color;
  };

  const calculateAverage = (teams: any[]): { [key: string]: number } => {
    const keys = Object.keys(teams[0]);
    const result: { [key: string]: number } = {};
    for (const key of keys) {
      if (typeof teams[0][key] === "number") {
        const sum = teams.reduce((acc, team) => acc + team[key], 0);
        result[key] = parseFloat((sum / teams.length).toFixed(1));
      }
    }
    return result;
  };

  const average = calculateAverage(teamsRows);

  return (
    <S.Table id={"comparison-table"} data-testid="comparison-table">
      <S.Thead>
        <S.TrColumns>
          <S.ThFirstColumn>
            <S.FirstColumnContent className="columnContent">
              <S.FirstColumnLabel>{firstColumn.label}</S.FirstColumnLabel>
              <FontAwesomeIcon
                className="icon"
                icon={firstColumn.icon as IconProp}
              />
            </S.FirstColumnContent>
          </S.ThFirstColumn>
          {columns.map((column, index) => (
            <S.ThColumns key={index}>
              <S.ColumnContent className="columnContent">
                <S.ColumnLabel>{column.label}</S.ColumnLabel>
                <FontAwesomeIcon
                  className="icon"
                  icon={column.icon as IconProp}
                />
              </S.ColumnContent>
            </S.ThColumns>
          ))}
        </S.TrColumns>
      </S.Thead>
      <tbody>
        <S.TrRows>
          {Object.entries(benchmarkRow).map((array, index) => (
            <S.TdRows tdColor={"#F1F1F5"} key={`${index}`}>
              {array[1]}
            </S.TdRows>
          ))}
        </S.TrRows>
        <S.TrRows>
          <S.TdRows>All Teams</S.TdRows>
          {Object.entries(average).map((array, index) => (
            <S.TdRows tdColor={pickTdColor(array[1])} key={`${index}`}>
              {array[1]}
            </S.TdRows>
          ))}
        </S.TrRows>
        {teamsRows.map((row, rowIndex) => (
          <S.TrRows key={rowIndex}>
            {Object.entries(row).map((array, index) => (
              <S.TdRows tdColor={pickTdColor(array[1])} key={`${index}`}>
                {array[1]}
              </S.TdRows>
            ))}
          </S.TrRows>
        ))}
      </tbody>
    </S.Table>
  );
};

export default ComparisonTable;
