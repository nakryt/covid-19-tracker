import React, { FC } from "react";
import "./InfoBox.scss";
import { Card, CardContent, Typography } from "@material-ui/core";

interface Props {
  title: string;
  cases: number;
  total: number;
}

const InfoBox: FC<Props> = ({ title, cases, total }) => {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography color="textSecondary" className="infoBox__title">
          {title}
        </Typography>
        <h2 className="infoBox__cases">{cases}</h2>
        <Typography color="textSecondary" className="infoBox__total">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
