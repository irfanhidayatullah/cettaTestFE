"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import useUpdateAirPolutionData from "@/hooks/api/airPolution/useUpdateAirPolutionData";
import { useFormik } from "formik";
import { FC, useState } from "react";
import { AirPolutionSchema } from "../schema/AirPolutionSchema";
import useGetAirPolution from "@/hooks/api/airPolution/useGetAirPolutionData";
import { FaEdit } from "react-icons/fa";
import { Label } from "@/components/ui/label";
import useDeleteAirPolution from "@/hooks/api/airPolution/useDeleteAirPolution";

interface UpdateAirPolutionButton {
  id: number;
}

export const UpdateAirPolutionButton: FC<UpdateAirPolutionButton> = ({
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isPending } = useGetAirPolution(id);
  const { mutateAsync: updateAirPolution, isPending: pendingUpdate } =
    useUpdateAirPolutionData(id);
  const { mutateAsync: deleteAirPolution, isPending: pendingDelete } =
    useDeleteAirPolution();
  const formik = useFormik({
    initialValues: {
      country: data?.country || "",
      city: data?.city || "",
      aqiValue: data?.aqiValue || 0,
      aqiCategory: data?.aqiCategory || "",
      coAqiValue: data?.coAqiValue || 0,
      coAqiCategory: data?.coAqiCategory || "",
      ozoneAqiValue: data?.ozoneAqiValue || 0,
      ozoneAqiCategory: data?.ozoneAqiCategory || "",
      no2AqiValue: data?.no2AqiValue || 0,
      no2AqiCategory: data?.no2AqiCategory || "",
      pm25AqiValue: data?.pm25AqiValue || 0,
      pm25AqiCategory: data?.pm25AqiCategory || "",
      id,
    },
    validationSchema: AirPolutionSchema,
    onSubmit: async (values) => {
      await updateAirPolution(values);
      setIsOpen(false);
    },
    enableReinitialize: true,
  });
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          <FaEdit />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit / Delete</DialogTitle>
            <DialogDescription>
              Make changes to your air polution data here.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <div>
                <Label htmlFor="country" className="text-right">
                  Country
                </Label>
                <Input
                  name="country"
                  type="text"
                  placeholder={data?.country}
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.country && !!formik.errors.country ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.country}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="country" className="text-right">
                  City
                </Label>
                <Input
                  name="city"
                  type="text"
                  placeholder={data?.city}
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.city && !!formik.errors.city ? (
                  <p className="text-xs text-red-500">{formik.errors.city}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="aqiValue" className="text-right">
                  AQI Value
                </Label>
                <Input
                  name="aqiValue"
                  type="number"
                  placeholder="AQI Value"
                  value={formik.values.aqiValue}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.aqiValue && !!formik.errors.aqiValue ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.aqiValue}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="aqiCategory" className="text-right">
                  AQI Category
                </Label>
                <Input
                  name="aqiCategory"
                  type="text"
                  placeholder={data?.aqiCategory}
                  value={formik.values.aqiCategory}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.aqiCategory && !!formik.errors.aqiCategory ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.aqiCategory}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="coAqiValue" className="text-right">
                  CO AQI Value
                </Label>
                <Input
                  name="coAqiValue"
                  type="number"
                  placeholder="CO AQI Value"
                  value={formik.values.coAqiValue}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.coAqiValue && !!formik.errors.coAqiValue ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.coAqiValue}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="coAqiCategory" className="text-right">
                  CO AQI Category
                </Label>
                <Input
                  name="coAqiCategory"
                  type="text"
                  placeholder={data?.coAqiCategory}
                  value={formik.values.coAqiCategory}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.coAqiCategory &&
                !!formik.errors.coAqiCategory ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.coAqiCategory}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="ozoneAqiValue" className="text-right">
                  Ozone AQI Value
                </Label>
                <Input
                  name="ozoneAqiValue"
                  type="number"
                  placeholder="Ozone AQI Value"
                  value={formik.values.ozoneAqiValue}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.ozoneAqiValue &&
                !!formik.errors.ozoneAqiValue ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.ozoneAqiValue}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="ozoneAqiCategory" className="text-right">
                  Ozone AQI Category
                </Label>
                <Input
                  name="ozoneAqiCategory"
                  type="text"
                  placeholder={data?.ozoneAqiCategory}
                  value={formik.values.ozoneAqiCategory}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.ozoneAqiCategory &&
                !!formik.errors.ozoneAqiCategory ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.ozoneAqiCategory}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="no2AqiValue" className="text-right">
                  NO2 AQI Value
                </Label>
                <Input
                  name="no2AqiValue"
                  type="number"
                  placeholder="NO2 AQI Value"
                  value={formik.values.no2AqiValue}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.no2AqiValue && !!formik.errors.no2AqiValue ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.no2AqiValue}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="no2AqiCategory" className="text-right">
                  NO2 AQI Category
                </Label>
                <Input
                  name="no2AqiCategory"
                  type="text"
                  placeholder={data?.no2AqiCategory}
                  value={formik.values.no2AqiCategory}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.no2AqiCategory &&
                !!formik.errors.no2AqiCategory ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.no2AqiCategory}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="pm25AqiValue" className="text-right">
                  PM2,5 AQI Value
                </Label>
                <Input
                  name="pm25AqiValue"
                  type="number"
                  placeholder="PM2,5 AQI Value"
                  value={formik.values.pm25AqiValue}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.pm25AqiValue &&
                !!formik.errors.pm25AqiValue ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.pm25AqiValue}
                  </p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="pm25AqiCategory" className="text-right">
                  PM2,5 AQI Category
                </Label>
                <Input
                  name="pm25AqiCategory"
                  type="text"
                  placeholder={data?.pm25AqiCategory}
                  value={formik.values.pm25AqiCategory}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {!!formik.touched.pm25AqiCategory &&
                !!formik.errors.pm25AqiCategory ? (
                  <p className="text-xs text-red-500">
                    {formik.errors.pm25AqiCategory}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant={"destructive"}
              disabled={pendingDelete}
              onClick={() => deleteAirPolution(id)}
            >
              {pendingDelete ? "Deleting..." : "Delete"}
            </Button>
            <Button type="submit" disabled={pendingUpdate}>
              {pendingUpdate ? "Updating..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
