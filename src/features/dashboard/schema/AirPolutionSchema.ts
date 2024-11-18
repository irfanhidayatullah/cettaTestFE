import * as Yup from "yup";

export const AirPolutionSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  aqiValue: Yup.number().required("AQI Value is required"),
  aqiCategory: Yup.string().required("AQI Category is required"),
  coAqiValue: Yup.number().required("CO AQI Value is required"),
  coAqiCategory: Yup.string().required("CO AQI Category is required"),
  ozoneAqiValue: Yup.number().required("Ozone AQI Value is required"),
  ozoneAqiCategory: Yup.string().required("Ozone AQI Category is required"),
  no2AqiValue: Yup.number().required("NO2 AQI Value is required"),
  no2AqiCategory: Yup.string().required("NO2 AQI Category is required"),
  pm25AqiValue: Yup.number().required("PM2,5 AQI Value is required"),
  pm25AqiCategory: Yup.string().required("PM2,5 AQI Category is required"),
});
