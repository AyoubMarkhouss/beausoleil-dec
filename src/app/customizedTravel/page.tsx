"use client";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
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
  voyage: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  passagers: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  email: z.string().email(),
  téléphone: z.string().email(),
  souhaitée: z.string(),
  personne: z.string(),
  firstName: z.string(),
  lasName: z.string(),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

const CustomizedTravel = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success("done");
    console.log(data);
  }
  return (
    <div>
      <div className="mb-20 bg-textblue py-28">
        <p className="Cabinet pb-4 text-center text-5xl font-semibold text-white">
          Vous pouvez maintenant concevoir <br /> votre propre voyage
        </p>
        <p className="mx-auto max-w-[38rem] text-center text-gray-300">
          Vous avez maintenant l&apos;opportunité de concevoir votre propre
          voyage personnalisé. Personnalisez chaque détail pour créer une
          expérience unique qui correspond à vos envies et besoins.
        </p>
      </div>
      <div className="mx-auto mb-10 w-1/2">
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
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto mt-20 w-1/2 space-y-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="lasName"
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
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse email</FormLabel>
                  <FormControl>
                    <Input placeholder="Adresse email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="téléphone"
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
          </div>
          <FormField
            control={form.control}
            name="souhaitée"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destination souhaitée</FormLabel>
                <FormControl>
                  <Input placeholder="Destination souhaitée" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabel>Date de départ et retour</FormLabel>
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
                            Indiquez vos dates de départ et de retour pour
                            planifier votre voyage.
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
          <FormField
            control={form.control}
            name="passagers"
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
                    <SelectItem value="1 personne">1 personne</SelectItem>
                    <SelectItem value="2 personnes">2 personnes</SelectItem>
                    <SelectItem value="3 personnes">3 personnes</SelectItem>
                    <SelectItem value="4 personnes">4 personnes</SelectItem>
                    <SelectItem value="5 personnes">5 personnes</SelectItem>
                    <SelectItem value="6 personnes">6 personnes</SelectItem>
                    <SelectItem value="7 personnes">7 personnes</SelectItem>
                    <SelectItem value="8 personnes">8 personnes</SelectItem>
                    <SelectItem value="9 personnes">9 personnes</SelectItem>
                    <SelectItem value="10+ personnes">10+ personnes</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="voyage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type de voyage</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Type de voyage" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1 personne">Luxe</SelectItem>
                    <SelectItem value="2 personnes">Aventure</SelectItem>
                    <SelectItem value="3 personnes">Culturel</SelectItem>
                    <SelectItem value="Détente">Détente</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="personne"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget estimé par personne</FormLabel>
                <FormControl>
                  <Input placeholder="Budget estimé par personne" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-3">
            <div>
              <small className="text-sm font-medium leading-none">
                Options de voyage personnalisées
              </small>
              <p className="text-sm text-muted-foreground">
                Sélectionnez des services supplémentaires pour enrichir votre
                expérience de voyage, comme un guide local, un chauffeur privé,
                ou une assurance voyage.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Guide local
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms3" />
                <label
                  htmlFor="terms3"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Chauffeur privé
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms1" />
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Assurance voyage
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

export default CustomizedTravel;
