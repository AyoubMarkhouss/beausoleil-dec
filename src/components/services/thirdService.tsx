"use client";
import Image from "next/image";

import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import "react-toastify/dist/ReactToastify.css";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Separator } from "../ui/separator";
import { fillExtraForm, fillThirdForm } from "@/server/landing";
import { toast, ToastContainer } from "react-toastify";
const FormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  startPoint: z.string(),
  endPoint: z.string(),
  baggage: z.enum(["oui", "non"], {
    required_error: "You need to select a notification type.",
  }),
  comment: z.string(),
  passengers: z.string(),
  leaveDate: z.date(),
  leaveHour: z.string(),
  vehicleTypes: z.string(),
  departureAndReturnDates: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine(
      (data) => data.from > addDays(new Date(), -1),
      "Start date must be in the future"
    )
    .optional(),

  // Location de Véhicule
  locationDesiredVehicleType: z.string().optional(),
  locationDepartureAndReturnDatesLocation: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine(
      (data) => data.from > addDays(new Date(), -1),
      "Start date must be in the future"
    )
    .optional(),
  locationReturnLocation: z.string().optional(),
  locationGps: z.boolean().default(false).optional(),
  locationbabySeat: z.boolean().default(false).optional(),
  locationAdditionalInsurance: z.boolean().default(false).optional(),
  locationCommentsOrSpecialRequests: z.string().optional(),
  locationPickupLocation: z.string().optional(),
  // Mise à Disposition
  dispositionCommentsOrSpecialRequests: z.string().optional(),
  dispositionCompany: z.string().optional(),
  dispositionDepartureEndDate: z.string().optional(),
  dispositionDepartureLocation: z.string().optional(),
  dispositionDestinationLocation: z.string().optional(),
  dispositionDriverOptions: z.string().optional(),
  dispositionPreferredVehicleType: z.string().optional(),
  dispositionRentalDuration: z.string().optional(),
  dispositionStartTime: z.string().optional(),
  dispositionDate: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine(
      (data) => data.from > addDays(new Date(), -1),
      "Start date must be in the future"
    )
    .optional(),

  location: z.boolean().default(false).optional(),
  disposition: z.boolean().default(false).optional(),
});

const ThirdService = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const gg = await fillThirdForm({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      startPlace: data.startPoint,
      endPlace: data.endPoint,
      baggage: data.baggage === "oui" ? true : false,
      comment: data.comment,
      passengersNumber: Number(data.passengers),
      serviceType: "third",
      transferDate: data.leaveDate,
      transferHour: data.leaveHour,
      vehicleTypes: data.vehicleTypes,
    });
    if (data.location || data.disposition) {
      await fillExtraForm({
        locationAdditionalInsurance: data.locationAdditionalInsurance,
        formId: gg.id,
        locationbabySeat: data.locationbabySeat,
        locationComment: data.locationCommentsOrSpecialRequests,
        locationDesiredVehicleType: data.locationDesiredVehicleType,
        locationEndDate:
          data.locationDepartureAndReturnDatesLocation?.to ?? new Date(),
        locationGps: data.locationGps,
        locationReturnLocation: data.locationReturnLocation,
        locationStartDate:
          data.locationDepartureAndReturnDatesLocation?.from ?? new Date(),
        dispositionCommentsOrSpecialRequests:
          data.dispositionCommentsOrSpecialRequests,
        dispositionCompany: data.dispositionCompany,
        dispositionDepartureEndDate: data.dispositionDate?.to,
        dispositionDepartureLocation: data.dispositionDepartureLocation,
        dispositionDepartureStartDate: data.dispositionDate?.from,
        dispositionDestinationLocation: data.dispositionDestinationLocation,
        dispositionDriverOptions:
          data.dispositionDriverOptions === "Avec Chauffeur" ? true : false,
        dispositionPreferredVehicleType: data.dispositionPreferredVehicleType,
        dispositionRentalDuration: data.dispositionRentalDuration,
        dispositionStartTime: data.dispositionStartTime,
      });
    }
    toast.success("le formulaire a été soumis avec succès");
  }

  return (
    <div className="mb-20">
      <div className="mx-auto mt-20 w-1/2">
        <div className="mb-5 flex h-32 items-center justify-center rounded-2xl bg-textblue">
          <h2 className="cabinet text-center text-6xl text-white">Transfert</h2>
        </div>
        <div className="mb-10">
          <div className="w-full overflow-hidden rounded-xl">
            <Image
              className="mx-auto h-72 rounded-md object-cover object-top"
              alt="image"
              width={1000}
              height={1000}
              src="https://i.pinimg.com/564x/83/cd/d7/83cdd7e329b1e61a590dbf68914cfe3c.jpg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="overflow-hidden rounded-xl">
              <Image
                className="mx-auto h-44 rounded-md object-cover object-bottom"
                alt="image"
                width={1000}
                height={1000}
                src="https://i.pinimg.com/564x/f0/bc/d6/f0bcd6f96e3ae1fae6a55c032aa4333d.jpg"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                className="mx-auto h-44 rounded-md object-cover object-top"
                alt="image"
                width={1000}
                height={1000}
                src="https://i.pinimg.com/564x/67/6a/8f/676a8f125482b3dda8653fae61c27017.jpg"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                className="mx-auto h-44 rounded-md object-cover object-bottom"
                alt="image"
                width={1000}
                height={1000}
                src="https://i.pinimg.com/control/564x/d4/55/75/d455750f6a7126c18b88608d68ec3455.jpg"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut elementum risus. Nam id lacus quis dolor tempus fringilla.
            Curabitur commodo dui pharetra malesuada eleifend. Curabitur diam
            nunc, dapibus at dui et, scelerisque interdum nunc. Curabitur
            pharetra nunc non mattis mollis. Nunc malesuada elit neque, sed
            tempus dui pretium ac.
          </p>
          <h3 className="scroll-m-20 pt-5 text-2xl font-semibold tracking-tight">
            what it includes?
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-1">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Quisque convallis sem nec neque bibendum dictum.</li>
            <li>Nam non nulla ut lorem ultrices rutrum non ac magna.</li>
            <li>
              In ornare ipsum et ante placerat, non vulputate turpis faucibus.
            </li>
          </ul>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto w-1/2 space-y-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prénom</FormLabel>
                  <FormControl>
                    <Input placeholder="Prénom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input placeholder="Nom" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numéro de téléphone</FormLabel>
                <FormControl>
                  <Input placeholder="Numéro de téléphone" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="startPoint"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lieu de départ</FormLabel>
                  <FormControl>
                    <Input placeholder="Lieu de départ" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endPoint"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lieu de destination</FormLabel>
                  <FormControl>
                    <Input placeholder="Lieu de destination" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full gap-4">
            <FormField
              control={form.control}
              name="leaveDate"
              render={({ field }) => (
                <FormItem className="flex grow flex-col">
                  <FormLabel>Date du transfert</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full grow pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Date du transfert</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="leaveHour"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Heure du transfert</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Heure du transfert" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="10:00">10:00</SelectItem>
                      <SelectItem value="11:30">11:30</SelectItem>
                      <SelectItem value="13:45">13:45</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="vehicleTypes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type de véhicule souhaité</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Type de véhicule souhaité" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Limousine">Limousine</SelectItem>
                    <SelectItem value="Berline">Berline</SelectItem>
                    <SelectItem value="Van">Van</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passengers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de passagers</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Nombre de passagers" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1 personne</SelectItem>
                    <SelectItem value="2">2 personnes</SelectItem>
                    <SelectItem value="3">3 personnes</SelectItem>
                    <SelectItem value="4">4 personnes</SelectItem>
                    <SelectItem value="5">5 personnes</SelectItem>
                    <SelectItem value="6">6 personnes</SelectItem>
                    <SelectItem value="7">7 personnes</SelectItem>
                    <SelectItem value="8">8 personnes</SelectItem>
                    <SelectItem value="9">9 personnes</SelectItem>
                    <SelectItem value="10">10 personnes</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="baggage"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Bagages supplémentaires</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="oui" />
                      </FormControl>
                      <FormLabel className="font-normal">oui</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="none" />
                      </FormControl>
                      <FormLabel className="font-normal">non</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Commentaire(s) ou demande spécifique</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Vos commentaires ou demandes spéciales ici..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <h4 className="cabinet scroll-m-20 pt-5 text-3xl text-orangeboom">
              Vous pouvez ajouter des services supplémentaires
            </h4>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Location de Véhicule</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="disposition"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Mise à Disposition</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          {form.watch("location") === true && (
            <>
              <Separator className="my-4" />
              <FormField
                control={form.control}
                name="locationDesiredVehicleType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de véhicule souhaité</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Type de véhicule souhaité" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Berline">Berline</SelectItem>
                        <SelectItem value="SUV">SUV</SelectItem>
                        <SelectItem value="Utilitaire">Utilitaire</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="locationDepartureAndReturnDatesLocation"
                render={({ field }) => (
                  <FormItem className="grow">
                    <FormLabel>Dates de départ et de retour</FormLabel>
                    <FormControl>
                      <Popover modal={true}>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value?.from ? (
                              field.value.to ? (
                                <div>
                                  {format(field.value.from, "LLL dd, y")} -{" "}
                                  {format(field.value.to, "LLL dd, y")}
                                </div>
                              ) : (
                                format(field.value.from, "LLL dd, y")
                              )
                            ) : (
                              <span>Dates de départ et de retour</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            initialFocus
                            mode="range"
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            defaultMonth={field.value?.from}
                            selected={field.value}
                            onSelect={field.onChange}
                            numberOfMonths={2}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="locationPickupLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lieu de prise en charge</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Lieu de prise en charge"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="locationReturnLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lieu de restitution</FormLabel>
                      <FormControl>
                        <Input placeholder="Lieu de restitution " {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <small className="text-sm font-medium leading-none">
                    Options supplémentaires
                  </small>
                  <p className="text-sm text-muted-foreground">
                    Ajoutez vos commentaires ou demandes spécifiques concernant
                    votre voyage pour mieux répondre à vos attentes.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <FormField
                    control={form.control}
                    name="locationGps"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>GPS</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="locationbabySeat"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>siège bébé</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="locationAdditionalInsurance"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>assurance supplémentaire</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="locationCommentsOrSpecialRequests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Commentaire(s) ou demande spécifique</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Vos commentaires ou demandes spéciales ici..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {form.watch("disposition") === true && (
            <>
              <Separator className="my-4" />
              <FormField
                control={form.control}
                name="dispositionCompany"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enterprise</FormLabel>
                    <FormControl>
                      <Input placeholder="enterprise" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dispositionPreferredVehicleType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de véhicule souhaité</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Type de véhicule souhaité" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="berline">Berline</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="utilitaire">Utilitaire</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dispositionRentalDuration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Durée de mise à disposition</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Durée de mise à disposition" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="oneHour">1 heure</SelectItem>
                        <SelectItem value="twoHours">2 heures</SelectItem>
                        <SelectItem value="half day">demi-journée</SelectItem>
                        <SelectItem value="full day">
                          journée complète
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-4">
                <FormField
                  control={form.control}
                  name="dispositionDate"
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormLabel>Dates de départ et de retour</FormLabel>
                      <FormControl>
                        <Popover modal={true}>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value?.from ? (
                                field.value.to ? (
                                  <div>
                                    {format(field.value.from, "LLL dd, y")} -{" "}
                                    {format(field.value.to, "LLL dd, y")}
                                  </div>
                                ) : (
                                  format(field.value.from, "LLL dd, y")
                                )
                              ) : (
                                <span>Dates de départ et de retour</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              initialFocus
                              mode="range"
                              disabled={(date) =>
                                date < new Date() ||
                                date < new Date("1900-01-01")
                              }
                              defaultMonth={field.value?.from}
                              selected={field.value}
                              onSelect={field.onChange}
                              numberOfMonths={2}
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dispositionStartTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Heure de début</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Heure de début" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="oneHour">8:00</SelectItem>
                          <SelectItem value="twoHours">10:00</SelectItem>
                          <SelectItem value="half day">11:30</SelectItem>
                          <SelectItem value="full day">15:00</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="dispositionDepartureLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lieu de départ</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Lieu de départ" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="oneHour">casablanca</SelectItem>
                          <SelectItem value="twoHours">rabat</SelectItem>
                          <SelectItem value="half day">fes</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dispositionDestinationLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lieu de destination</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Lieu de destination" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="oneHour">casablanca</SelectItem>
                          <SelectItem value="twoHours">rabat</SelectItem>
                          <SelectItem value="half day">fes</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="dispositionDriverOptions"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Options de chauffeur</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Avec Chauffeur" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Avec chauffeur
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Sans chauffeur" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Sans chauffeur
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dispositionCommentsOrSpecialRequests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Commentaire(s) ou demande spécifique</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Vos commentaires ou demandes spéciales ici..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <button
            className="cabinet inline-flex h-14 w-full items-center justify-center rounded-md border border-transparent bg-orangeboom px-5 py-2.5 text-lg text-slate-50 transition-transform duration-500 ease-in-out hover:scale-105"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </Form>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        theme="light"
        autoClose={2000}
      />
    </div>
  );
};

export default ThirdService;
