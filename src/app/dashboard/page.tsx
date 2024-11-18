import DashboardPage from "@/features/dashboard";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = async ({ params }: { params: { id: number } }) => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return <DashboardPage id={params.id} />;
};

export default Dashboard;
