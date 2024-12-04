"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const service = () => {
  return (
    <>
      <Head>
        <title>Beausoleil - Services</title>
        <meta name="description" content="service page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default service;

const Hero = () => {
  return (
    <div>
      <div className="mb-20 bg-textblue py-28">
        <p className="Cabinet pb-4 text-center text-5xl font-semibold text-white">
          Découvrez le monde, un voyage
          <br />
          en bus à la fois
        </p>
        <p className="mx-auto max-w-[38rem] text-center text-gray-300">
          Chez Beausoleil, nous plaçons votre confort et votre sécurité
          au-dessus de tout. Avec des bus modernes et bien entretenus, ainsi que
          des chauffeurs formés professionnellement, chaque voyage avec nous est
          sûr et agréable. Voyagez en toute tranquillité, en sachant que votre
          sécurité est notre priorité absolue.
        </p>
      </div>
      {/* //? here you can see the three cards */}
      <div className="flex flex-col gap-20">
        <SecondSection />
        <FirstSection />
        <Contact />
      </div>
    </div>
  );
};

const FirstSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={ref}
      className="mx-auto flex h-[28rem] max-w-7xl justify-between gap-10 rounded-xl border shadow-xl"
    >
      <div className="flex flex-col p-8">
        <h1 className="cabinet scroll-m-20 text-4xl tracking-tight text-bigtitle lg:text-6xl">
          Mise à Disposition
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut
          elementum risus. Nam id lacus quis dolor tempus fringilla. Curabitur
          commodo dui pharetra malesuada eleifend. Curabitur diam nunc, dapibus
          at dui et, scelerisque interdum nunc. Curabitur pharetra nunc non
          mattis mollis. Nunc malesuada elit neque, sed tempus dui pretium ac.{" "}
          <br /> <br />
          Curabitur diam nunc, dapibus at dui et, scelerisque interdum nunc.
          Curabitur pharetra nunc non mattis mollis. Nunc malesuada elit neque,
          sed tempus dui pretium ac.
        </p>
        <Link
          href={`/service/service01`}
          className="cabinet mt-6 flex h-14 w-fit gap-5 place-self-end px-5 py-2.5 text-xl transition-transform duration-500 ease-in-out hover:scale-105 hover:text-orangeboom"
        >
          Réserver
          <ChevronRight />
        </Link>
      </div>
      <div className="flex w-[30rem] shrink-0 flex-col justify-center overflow-hidden rounded-r-xl">
        <Image
          className="h-full w-[30rem] overflow-hidden rounded-r-md object-cover object-bottom"
          alt="image"
          width={500}
          height={500}
          src="https://i.pinimg.com/control/564x/50/c5/6c/50c56c24456c242465383d4fe79289d7.jpg"
        />
      </div>
    </motion.div>
  );
};

const SecondSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={ref}
      className="mx-auto flex h-[28rem] max-w-7xl justify-between gap-10 rounded-xl border shadow-xl"
    >
      <div className="flex w-[30rem] shrink-0 flex-col justify-center overflow-hidden rounded-l-xl">
        <Image
          className="h-full w-[30rem] overflow-hidden rounded-l-md object-cover object-bottom"
          alt="image"
          width={500}
          height={500}
          src="https://i.pinimg.com/control/564x/50/c5/6c/50c56c24456c242465383d4fe79289d7.jpg"
        />
      </div>
      <div className="flex flex-col p-8">
        <h1 className="cabinet scroll-m-20 text-4xl tracking-tight text-bigtitle lg:text-6xl">
          Location de Véhicule
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut
          elementum risus. Nam id lacus quis dolor tempus fringilla. Curabitur
          commodo dui pharetra malesuada eleifend. Curabitur diam nunc, dapibus
          at dui et, scelerisque interdum nunc. Curabitur pharetra nunc non
          mattis mollis. Nunc malesuada elit neque, sed tempus dui pretium ac.{" "}
          <br /> <br />
          Curabitur diam nunc, dapibus at dui et, scelerisque interdum nunc.
          Curabitur pharetra nunc non mattis mollis. Nunc malesuada elit neque,
          sed tempus dui pretium ac.
        </p>
        <Link
          href={`/service/service02`}
          className="cabinet mt-6 flex h-14 w-fit gap-5 place-self-end px-5 py-2.5 text-xl transition-transform duration-500 ease-in-out hover:scale-105 hover:text-orangeboom"
        >
          Réserver
          <ChevronRight />
        </Link>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div className="mt-20">
      <div className="flex w-full flex-col justify-center bg-textblue py-12">
        <motion.p
          style={{ scale: scaleProgress, opacity: opacityProgress }}
          ref={ref}
          className="cabinet text-center text-4xl text-white"
        >
          Prêt à emmener votre <br /> voyage vers de nouveaux horizons ?
        </motion.p>

        <Link
          href="/contact"
          className="cabinet mx-auto mt-4 inline-flex h-14 w-full max-w-48 items-center justify-center rounded-xl border border-transparent bg-orangeboom px-5 py-2.5 text-lg text-slate-50 transition-transform duration-500 ease-in-out hover:scale-105"
        >
          Contactez-nous
        </Link>
      </div>
    </div>
  );
};
