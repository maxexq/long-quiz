import React from "react";
import { Card, CardHeader } from "../ui/card";

type Props = {};

const QuizMeCard = (props: Props) => {
  return (
    <Card className="hover:cursor-pointer hover:opacity-75">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2"></CardHeader>
    </Card>
  );
};

export default QuizMeCard;
