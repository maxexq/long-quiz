import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInButton from "@/components/button/SigninButton";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

type Props = {};

const Home = async (props: Props) => {
  const session = await getAuthSession();
  if (session?.user) {
    redirect("dashboard");
  }
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to LongQuiz!</CardTitle>
          <CardDescription>
            LongQuiz is a quiz app that allows you to create and share quizz
            with your friends.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sign In with Google" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
