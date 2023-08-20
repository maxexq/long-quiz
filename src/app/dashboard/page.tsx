import QuizMeCard from "@/components/dashboard/QuizMeCard";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export const metadata = {
  title: "Dashboard | LongQuiz",
};

const Dashboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <QuizMeCard />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2"></div>
    </main>
  );
};

export default Dashboard;
