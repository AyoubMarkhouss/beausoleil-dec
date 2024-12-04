"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaCarAlt, FaRoad } from "react-icons/fa";
import { MdLocalAirport } from "react-icons/md";

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="mx-auto px-6 py-16 md:px-24 lg:px-20 lg:py-0 lg:pb-10">
      <div className="mb-10 flex flex-col gap-3 md:mb-12">
        <h2 className="cabinet flex gap-2 text-4xl text-bigtitle sm:text-5xl">
          Votre voyage, notre priorité.
        </h2>
        <p className="max-w-2xl text-base text-gray-500 md:text-xl">
          Nous offrons un voyage en bus sûr et fiable pour chaque trajet. Peu
          importe votre destination, nous sommes ici pour rendre le voyage
          fluide et agréable.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-5">
          <Image
            width={700}
            height={700}
            className="col-span-2 h-56 w-full rounded object-cover shadow-lg"
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <Image
            width={700}
            height={700}
            className="h-48 w-full rounded object-cover shadow-lg"
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <Image
            width={700}
            height={700}
            className="h-48 w-full rounded object-cover shadow-lg"
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : ""}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mb-4 border-b pb-4"
          >
            <motion.h6 className="cabinet mb-2 flex items-center gap-2 text-xl text-bigtitle">
              Transferts aéroport
            </motion.h6>
            <motion.div className="grid grid-cols-3 text-sm text-gray-900">
              <p className="col-span-2">
                Profitez de transferts confortables vers et depuis
                l&apos;aéroport avec Beausoleil. Nos services incluent des
                options flexibles pour répondre à vos besoins, avec des tarifs
                compétitifs pour rendre votre voyage aussi agréable que
                possible.
              </p>
              <div className="flex items-center justify-center">
                <MdLocalAirport size={70} className="fill-orangeboom" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : ""}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mb-4 border-b pb-4"
          >
            <motion.h6 className="cabinet mb-2 flex items-center gap-2 text-xl text-bigtitle">
              Excursions
            </motion.h6>
            <motion.div className="grid grid-cols-3 text-sm text-gray-900">
              <p className="col-span-2">
                Découvrez nos excursions populaires, comprenant des visites
                fascinantes de villes et des randonnées pittoresques. Chaque
                excursion est soigneusement planifiée avec des détails sur la
                durée, les tarifs et les points d&apos;intérêt, vous
                garantissant une expérience inoubliable.
              </p>
              <div className="flex items-center justify-center">
                <FaRoad size={70} className="fill-orangeboom" />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : ""}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mb-4 border-b pb-4"
          >
            <motion.h6 className="cabinet mb-2 flex items-center gap-2 text-xl text-bigtitle">
              Location de véhicules
            </motion.h6>
            <motion.div className="grid grid-cols-3 text-sm text-gray-900">
              <p className="col-span-2">
                Pour plus de liberté, choisissez parmi nos options de location
                de véhicules, y compris des voitures et des minibus. Nos tarifs
                transparents et nos conditions flexibles vous permettent de
                voyager à votre rythme et selon vos besoins.
              </p>
              <div className="flex items-center justify-center">
                <FaCarAlt size={70} className="fill-orangeboom" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
