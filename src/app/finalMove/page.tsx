import { Button } from "@/components/ui/button";
import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { FaPrint } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
const Page = () => {
  return (
    <div className="max-w-xl space-y-5 border rounded-md p-5 my-20 mx-auto shadow-sm shadow-bigtitle/10">
      <div className="space-y-10">
        <div className="flex flex-col items-center w-full">
          <CiCircleCheck className="text-green-600 size-20" />
          <div className="text-center">
            <p className="text-lg font-semibold text-bigtitle">
              merci d&apos;avoir choisi notre service
            </p>
            <p className="text-lg font-semibold text-bigtitle">
              Voici les informations que vous avez remplies, vous pouvez les
              imprimer ou choisir un autre service.
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {" "}
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium leading-none">Code</p>
            <p className="text-sm text-muted-foreground">#26 BG-KL</p>
          </div>{" "}
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium leading-none">Nom complet</p>
            <p className="text-sm text-muted-foreground">El gad aymen</p>
          </div>{" "}
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium leading-none">E-mail</p>
            <p className="text-sm text-muted-foreground">
              aymanelgad65@gmail.com
            </p>
          </div>{" "}
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium leading-none">Type de paiement</p>
            <p className="text-sm text-muted-foreground">Paiement en ligne</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium leading-none">
              Nombre de personnes
            </p>
            <p className="text-sm text-muted-foreground">1 adulte</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium leading-none">Destination</p>
            <div className="flex gap-2 items-center">
              <p className="text-sm text-muted-foreground">casablanca</p>
              <FaArrowRight />
              <p className="text-sm text-muted-foreground">Marrakech</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Button variant="outline">
          <FaPrint />
          imprimer
        </Button>{" "}
        <Button variant="default">
          <MdHomeFilled />
          Accueil
        </Button>
      </div>
      <p className="text-sm text-muted-foreground text-center px-5 py-4">
        Veuillez conserver cette facture pour vos dossiers, car il se peut
        qu&apos;on vous demande de la présenter à l&apos;avenir. Nous vous avons
        envoyé une copie par e-mail pour téléchargement. Vous pouvez également
        cliquer sur le bouton d&apos;impression pour obtenir une version papier.
        Merci de votre attention.
      </p>
    </div>
  );
};

export default Page;
