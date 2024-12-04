-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "serviceType" TEXT NOT NULL,
    "startPlace" TEXT NOT NULL,
    "endPlace" TEXT NOT NULL,
    "transferDate" TIMESTAMP(3) NOT NULL,
    "transferHour" TEXT NOT NULL,
    "vehicleTypes" TEXT NOT NULL,
    "passengersNumber" INTEGER NOT NULL,
    "baggage" BOOLEAN NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExtraService" (
    "id" SERIAL NOT NULL,
    "formId" INTEGER NOT NULL,
    "locationDesiredVehicleType" TEXT,
    "locationStartDate" TIMESTAMP(3),
    "locationEndDate" TIMESTAMP(3),
    "locationReturnLocation" TEXT,
    "locationAdditionalOptions" TEXT,
    "locationGps" BOOLEAN DEFAULT false,
    "locationbabySeat" BOOLEAN DEFAULT false,
    "locationAdditionalInsurance" BOOLEAN DEFAULT false,
    "locationCommentsOrSpecialRequests" TEXT,
    "pickupLocations" TEXT,
    "locationComment" TEXT,
    "companyName" TEXT,
    "vehicleTypeAvailable" TEXT,
    "durationAvailable" TEXT,
    "startDateAvailable" TIMESTAMP(3),
    "EndDateAvailable" TIMESTAMP(3),
    "startTimeAvailable" TEXT,
    "departureLocationAvailable" TIMESTAMP(3),
    "driverOptionsAvailable" BOOLEAN,

    CONSTRAINT "ExtraService_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExtraService" ADD CONSTRAINT "ExtraService_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
