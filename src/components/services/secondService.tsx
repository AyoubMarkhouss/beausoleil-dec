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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "@radix-ui/react-icons";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays, format } from "date-fns";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Separator } from "../ui/separator";
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  oneEmail: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  cars: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  Lieudedépart: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  secLieudedépart: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  twolieudedestination: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lieudedestination: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
  date: z
    .object({
      from: z.date(),
      to: z.date(),
    })
    .refine(
      (data) => data.from > addDays(new Date(), -1),
      "Start date must be in the future"
    ),
  mobile: z.boolean().default(false).optional(),
  desktop: z.boolean().default(false).optional(),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

const SecondService = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success("Success");
    console.log(data);
  }

  return (
    <div className="mb-20">
      <div className="mx-auto mt-20 w-1/2">
        <div className="mb-5 flex h-32 items-center justify-center rounded-2xl bg-textblue">
          <h2 className="cabinet text-center text-6xl text-white">
            Location de véhicule
          </h2>
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
        <div className="pb-10">
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
            name="oneEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
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
          <FormField
            control={form.control}
            name="cars"
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
            name="date"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel>Date de début et fin de location</FormLabel>
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
                          <span>
                            Sélectionnez la date de début et la date de fin
                          </span>
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lieu de prise en charge</FormLabel>
                  <FormControl>
                    <Input placeholder="Lieu de prise en charge" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Lieu de restitution </FormLabel>
                  <FormControl>
                    <Input placeholder="Lieu de restitution " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lieu de prise en charge</FormLabel>
                <FormControl>
                  <Input placeholder="Lieu de prise en charge" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  GPS
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  siège bébé
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  assurance supplémentaire
                </label>
              </div>
            </div>
          </div>
          <FormField
            control={form.control}
            name="bio"
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
              name="mobile"
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
          {form.watch("mobile") === true && (
            <>
              <Separator className="my-4" />
              <FormField
                control={form.control}
                name="email"
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
                name="email"
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
                  name="date"
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
                  name="email"
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
                  name="Lieudedépart"
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
                  name="lieudedestination"
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
                name="type"
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
                name="bio"
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
    </div>
  );
};

export default SecondService;
