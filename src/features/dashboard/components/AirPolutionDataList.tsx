"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetAirPolutions from "@/hooks/api/airPolution/useGetsAirPolutionData";
import { FC, useState } from "react";
import { UpdateAirPolutionButton } from "./UpdateAirPolution";
import Pagination from "@/components/Pagination";

const AirPolutionDataList = () => {
  const [page, setPage] = useState(1);
  const { data, isPending } = useGetAirPolutions({
    page,
    take: 10,
  });

  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  if (!data) {
    return <p className="mt-9">Air Polution data are empty</p>;
  }

  return (
    <>
      <h3 className="font-semibold text-center text-2xl text-[#0f172a]">
        Air Polution Data
      </h3>
      <Table className="mt-9">
        <TableCaption>A list of your air polution data</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Country</TableHead>
            <TableHead>City</TableHead>
            <TableHead>AQI Value</TableHead>
            <TableHead>AQI Category</TableHead>
            <TableHead>CO AQI Value</TableHead>
            <TableHead>CO AQI Category</TableHead>
            <TableHead>Ozone AQI Value</TableHead>
            <TableHead>Ozone AQI Category</TableHead>
            <TableHead>NO2 AQI Value</TableHead>
            <TableHead>NO2 AQI Category</TableHead>
            <TableHead>PM2,5 AQI Value</TableHead>
            <TableHead>PM2,5 AQI Category</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((airPolution, index) => {
            return (
              <TableRow key={airPolution.id}>
                <TableCell className="font-medium">
                  {airPolution.country}
                </TableCell>
                <TableCell className="font-medium">
                  {airPolution.city}
                </TableCell>
                <TableCell className="font-medium">
                  {airPolution.aqiValue}
                </TableCell>
                <TableCell className="font-medium">
                  {airPolution.aqiCategory}
                </TableCell>
                <TableCell className="font-medium">
                  {airPolution.coAqiValue}
                </TableCell>
                <TableCell className="font-medium">
                  {airPolution.coAqiCategory}
                </TableCell>
                <TableCell className="font-medium">
                  {airPolution.ozoneAqiValue}
                </TableCell>
                <TableCell className="font-medium">
                  {airPolution.ozoneAqiCategory}
                </TableCell>
                <TableCell className="font-medium">
                  {airPolution.no2AqiValue}
                </TableCell>
                <TableCell className="font-medium">
                  {airPolution.no2AqiCategory}
                </TableCell>
                <TableCell className="font-medium">
                  {airPolution.pm25AqiValue}
                </TableCell>
                <TableCell className="font-medium">
                  {airPolution.pm25AqiCategory}
                </TableCell>
                <TableCell className="flex items-center gap-3">
                  <UpdateAirPolutionButton id={airPolution.id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="container max-w-7xl mx-auto flex justify-center mt-10">
        <Pagination
          take={data.meta.take}
          total={data.meta.total}
          onPageChange={onPageChange}
          page={page}
        />
      </div>
    </>
  );
};

export default AirPolutionDataList;
