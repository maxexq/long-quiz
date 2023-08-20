import React from "react";
import { Card, CardHeader } from "../ui/card";

type Props = {};

const QuizMeCard = (props: Props) => {
  return (
    <Card className="hover:cursor-pointer hover:opacity-75">
      <CardHeader className=""></CardHeader>
    </Card>
  );
};

export default QuizMeCard;
