import Head from "next/head";

import FirstService from "@/components/services/firstService";
import SecondService from "@/components/services/secondService";
import ThirdService from "@/components/services/thirdService";

const Index = ({ params }: { params: { serviceId: string } }) => {
  return (
    <>
      <Head>
        <title>Beausoleil - Services</title>
        <meta name="description" content="service page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {params.serviceId === "service01" && <FirstService />}
        {params.serviceId === "service02" && <SecondService />}
        {params.serviceId === "service03" && <ThirdService />}
      </main>
    </>
  );
};

export default Index;
