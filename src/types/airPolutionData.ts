export interface AirPolutionData {
  id: number;
  country: string;
  city: string;
  aqiValue: number;
  aqiCategory: string;
  coAqiValue: number;
  coAqiCategory: string;
  ozoneAqiValue: number;
  ozoneAqiCategory: string;
  no2AqiValue: number;
  no2AqiCategory: string;
  pm25AqiValue: number;
  pm25AqiCategory: string;
  createdAt: Date;
  updatedAt: Date;
}
