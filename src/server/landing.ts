"use server";

import { db } from "@/lib/prisma";

export const fillThirdForm = async ({
  baggage,
  comment,
  email,
  endPlace,
  firstName,
  lastName,
  passengersNumber,
  phone,
  vehicleTypes,
  serviceType,
  startPlace,
  transferDate,
  transferHour,
}: {
  baggage: boolean;
  comment: string;
  email: string;
  endPlace: string;
  firstName: string;
  lastName: string;
  passengersNumber: number;
  phone: string;
  vehicleTypes: string;
  serviceType: string;
  startPlace: string;
  transferDate: Date;
  transferHour: string;
}) => {
  return await db.form.create({
    data: {
      baggage,
      comment,
      email,
      endPlace,
      firstName,
      lastName,
      passengersNumber,
      phone,
      vehicleTypes,
      serviceType,
      startPlace,
      transferDate,
      transferHour,
    },
  });
};
// cm
export const fillExtraForm = async ({
  locationAdditionalInsurance,
  locationbabySeat,
  locationComment,
  locationDesiredVehicleType,
  locationEndDate,
  locationGps,
  locationReturnLocation,
  locationStartDate,
  dispositionCommentsOrSpecialRequests,
  dispositionCompany,
  dispositionDepartureEndDate,
  dispositionDepartureLocation,
  dispositionDepartureStartDate,
  dispositionDestinationLocation,
  dispositionDriverOptions,
  dispositionPreferredVehicleType,
  dispositionRentalDuration,
  dispositionStartTime,
  formId,
}: {
  locationAdditionalInsurance?: boolean;
  locationbabySeat?: boolean;
  locationComment?: string;
  locationDesiredVehicleType?: string;
  locationEndDate?: Date;
  locationGps?: boolean;
  locationReturnLocation?: string;
  locationStartDate?: Date;
  dispositionCommentsOrSpecialRequests?: string;
  dispositionCompany?: string;
  dispositionDepartureEndDate?: Date;
  dispositionDepartureLocation?: string;
  dispositionDepartureStartDate?: Date;
  dispositionDestinationLocation?: string;
  dispositionDriverOptions?: boolean;
  dispositionPreferredVehicleType?: string;
  dispositionRentalDuration?: string;
  dispositionStartTime?: string;
  formId: number;
}) => {
  await db.extraService.create({
    data: {
      locationAdditionalInsurance,
      locationbabySeat,
      locationCommentsOrSpecialRequests: locationComment,
      locationDesiredVehicleType,
      locationEndDate,
      locationGps,
      locationReturnLocation,
      locationStartDate,
      formId,
      dispositionCommentsOrSpecialRequests,
      dispositionCompany,
      dispositionDepartureEndDate,
      dispositionDepartureLocation,
      dispositionDepartureStartDate,
      dispositionDestinationLocation,
      dispositionDriverOptions,
      dispositionPreferredVehicleType,
      dispositionRentalDuration,
      dispositionStartTime,
    },
  });
  return;
};
