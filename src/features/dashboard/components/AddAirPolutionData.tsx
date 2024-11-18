"use client";

import FormInput from "@/components/FormInput";
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
import useCreateAirPolution from "@/hooks/api/airPolution/useCreateAirPolution";
import { useFormik } from "formik";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { AirPolutionSchema } from "../schema/AirPolutionSchema";

export const CreateAirPolutionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync: createAirPolution, isPending: pendingCreate } =
    useCreateAirPolution();

  const formik = useFormik({
    initialValues: {
      country: "",
      city: "",
      aqiValue: 0,
      aqiCategory: "",
      coAqiValue: 0,
      coAqiCategory: "",
      ozoneAqiValue: 0,
      ozoneAqiCategory: "",
      no2AqiValue: 0,
      no2AqiCategory: "",
      pm25AqiValue: 0,
      pm25AqiCategory: "",
    },
    validationSchema: AirPolutionSchema,
    onSubmit: async (values) => {
      await createAirPolution(values);
      setIsOpen(false);
    },
    enableReinitialize: true,
  });
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          <IoIosAddCircle />
          Add Data
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add Data</DialogTitle>
            <DialogDescription>
              Make data to your air polution data list here. Click create when
              you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <FormInput
                name="country"
                label="Country"
                type="text"
                placeholder="Country"
                value={formik.values.country}
                isError={!!formik.touched.country && !!formik.errors.country}
                error={formik.errors.country}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormInput
                name="city"
                label="City"
                type="text"
                placeholder="City"
                value={formik.values.city}
                isError={!!formik.touched.city && !!formik.errors.city}
                error={formik.errors.city}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormInput
                name="aqiValue"
                label="AQI Value"
                type="number"
                placeholder="AQI Value"
                value={formik.values.aqiValue}
                isError={!!formik.touched.aqiValue && !!formik.errors.aqiValue}
                error={formik.errors.aqiValue}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormInput
                name="aqiCategory"
                label="AQI Category"
                type="text"
                placeholder="AQI Category"
                value={formik.values.aqiCategory}
                isError={
                  !!formik.touched.aqiCategory && !!formik.errors.aqiCategory
                }
                error={formik.errors.aqiCategory}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormInput
                name="coAqiValue"
                label="CO AQI Value"
                type="number"
                placeholder="CO AQI Value"
                value={formik.values.coAqiValue}
                isError={
                  !!formik.touched.coAqiValue && !!formik.errors.coAqiValue
                }
                error={formik.errors.coAqiValue}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormInput
                name="coAqiCategory"
                label="CO AQI Category"
                type="text"
                placeholder="CO AQI Category"
                value={formik.values.coAqiCategory}
                isError={
                  !!formik.touched.coAqiCategory &&
                  !!formik.errors.coAqiCategory
                }
                error={formik.errors.coAqiCategory}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormInput
                name="ozoneAqiValue"
                label="Ozone AQI Value"
                type="number"
                placeholder="Ozone AQI Value"
                value={formik.values.ozoneAqiValue}
                isError={
                  !!formik.touched.ozoneAqiValue &&
                  !!formik.errors.ozoneAqiValue
                }
                error={formik.errors.ozoneAqiValue}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormInput
                name="ozoneAqiCategory"
                label="Ozone AQI Category"
                type="text"
                placeholder="Ozone AQI Category"
                value={formik.values.ozoneAqiCategory}
                isError={
                  !!formik.touched.ozoneAqiCategory &&
                  !!formik.errors.ozoneAqiCategory
                }
                error={formik.errors.ozoneAqiCategory}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormInput
                name="no2AqiValue"
                label="N02 AQI Value"
                type="number"
                placeholder="N02 AQI Value"
                value={formik.values.no2AqiValue}
                isError={
                  !!formik.touched.no2AqiValue && !!formik.errors.no2AqiValue
                }
                error={formik.errors.no2AqiValue}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormInput
                name="no2AqiCategory"
                label="NO2 AQI Category"
                type="text"
                placeholder="NO2 AQI Category"
                value={formik.values.no2AqiCategory}
                isError={
                  !!formik.touched.no2AqiCategory &&
                  !!formik.errors.no2AqiCategory
                }
                error={formik.errors.no2AqiCategory}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormInput
                name="pm25AqiValue"
                label="PM2,5 AQI Value"
                type="number"
                placeholder="PM2,5 AQI Value"
                value={formik.values.pm25AqiValue}
                isError={
                  !!formik.touched.pm25AqiValue && !!formik.errors.pm25AqiValue
                }
                error={formik.errors.pm25AqiValue}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <FormInput
                name="pm25AqiCategory"
                label="PM2,5 AQI Category"
                type="text"
                placeholder="PM2,5 AQI Category"
                value={formik.values.pm25AqiCategory}
                isError={
                  !!formik.touched.pm25AqiCategory &&
                  !!formik.errors.pm25AqiCategory
                }
                error={formik.errors.pm25AqiCategory}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={pendingCreate}>
              {pendingCreate ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
