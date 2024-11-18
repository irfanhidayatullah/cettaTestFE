"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaDatabase, FaRocketchat, FaUser } from "react-icons/fa";

import useCreateAirPolution from "@/hooks/api/airPolution/useCreateAirPolution";
import { useFormik } from "formik";
import { signOut, useSession } from "next-auth/react";
import { FC } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import AirPolutionDataList from "./components/AirPolutionDataList";
import { AirPolutionSchema } from "./schema/AirPolutionSchema";
import { CreateAirPolutionButton } from "./components/AddAirPolutionData";

const DashboardPage = () => {
  const session = useSession();

  return (
    <div className="grid grid-cols-[1fr_6fr] h-screen">
      <section className="shadow-lg flex flex-col justify-between">
        <div>
          <div className="py-5 bg-[#7fe4ff] rounded-b-3xl">
            <h3 className="font-semibold text-center text-2xl text-[#0f172a]">
              Dashboard
            </h3>
          </div>
          <div className="px-3 flex gap-2 items-center mt-7">
            <div>
              <FaUser size={17} />
            </div>
            <p>{session.data?.user?.name}</p>
          </div>
          <Link href="/">
            <div className="mt-7 px-3 flex items-center gap-2">
              <div>
                <FaDatabase size={17} />
              </div>
              <p>Air Polution Data</p>
            </div>
          </Link>
          <div
            className="flex items-center gap-2 px-3 mt-2 hover:cursor-pointer"
            onClick={() => signOut()}
          >
            <div>
              <RiLogoutCircleLine size={17} />
            </div>
            <p>Logout</p>
          </div>
        </div>
        <div className="bg-[#7fe4ff] py-10 justify-items-center">
          <h3 className="font-semibold text-center text-[#0f172a]">
            Help Center
          </h3>
          <Button className="mt-5 items-center">
            <FaRocketchat />
            Chat With Us
          </Button>
        </div>
      </section>
      <section className="max-w-7xl mx-auto py-10">
        <CreateAirPolutionButton />
        <AirPolutionDataList />
      </section>
    </div>
  );
};

export default DashboardPage;
