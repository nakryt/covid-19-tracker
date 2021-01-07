import React, { FC } from "react";
import "./InfoBox.scss";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { CaseType } from "../../types";
import color from "../../styles/color";

interface Props {
  title: string;
  cases: string;
  total: string;
  onClick: () => void;
  active: boolean;
  casesType: CaseType;
}

const InfoBox: FC<Props> = ({
  title,
  cases,
  total,
  onClick,
  active,
  casesType,
}) => {
  return (
    <Button
      className={`infoBox ${active ? "infoBox--selected" : ""}`}
      onClick={onClick}
      style={{ borderColor: color[casesType].stroke }}
    >
      <Card>
        <CardContent>
          <Typography color="textSecondary" className="infoBox__title">
            {title}
          </Typography>
          <h2
            className="infoBox__cases"
            style={{
              color:
                title === "recovered"
                  ? color.recovered.stroke
                  : title === "deaths"
                  ? color.deaths.stroke
                  : color.cases.stroke,
            }}
          >
            {cases}
          </h2>
          <Typography color="textSecondary" className="infoBox__total">
            {total} Total
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
};

export default InfoBox;
