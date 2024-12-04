import Image from "next/image";
import Link from "next/link";
import React from "react";

const parc = () => {
  return (
    <div>
      <div className="relative">
        <div className="py-20">
          <p className="Cabinet pb-4 text-center text-5xl font-semibold text-textblue">
            Discover the World, One Bus <br /> Journey at a Time
          </p>
          <p className="mx-auto max-w-[38rem] text-center text-black">
            At Beausoleil, we prioritize your comfort and safety above all. With
            modern, well-maintained buses and professionally trained drivers,
            every journey with us is secure and enjoyable. Travel with peace of
            mind, knowing that your safety is our top priority.
          </p>
        </div>
        <ParcFirst />
        <div className="absolute left-1/2 top-[68rem] h-80 w-80 -translate-x-1/2 bg-textblue" />
        <ParcSecond />
        <div className="absolute left-1/2 top-[118rem] h-80 w-80 -translate-x-1/2 bg-textblue" />
        <ParcThird />
      </div>
    </div>
  );
};

export default parc;

const ParcFirst = () => {
  return (
    <div className="flex justify-center">
      <div className="relative h-[50rem] w-[80rem]">
        {/* top left */}
        <div className="absolute mt-[.3px] h-[27rem] w-[45rem] rounded-[4rem] bg-textblue p-10">
          <div className="relative h-full">
            <h3 className="cabinet scroll-m-20 text-5xl font-semibold tracking-tight text-white">
              Lorem impsum
            </h3>
            <p className="leading-7 text-white [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vehicula commodo dolor id pharetra. Nullam ut lorem posuere,
              cursus lorem eget, convallis odio. Vestibulum laoreet magna quis
              nunc cursus, eu varius leo congue. Cras aliquam libero ex, vel
              pretium erat dignissim non. Aliquam vitae magna eu enim dignissim
              euismod non.
              <br />
              <br />
              Cras aliquam libero ex, vel pretium erat dignissim non. Aliquam
              vitae magna eu enim dignissim euismod non.
            </p>
          </div>
        </div>
        {/* middle */}
        <div className="absolute left-1/2 top-1/2 -z-20 h-56 w-80 -translate-x-1/2 -translate-y-1/2 bg-textblue"></div>
        {/* bottom right */}
        <div className="absolute bottom-0 right-0 z-50 mb-[.3px] h-[27rem] w-[45rem] rounded-[4rem] bg-textblue p-10 text-white">
          <h3 className="scroll-m-20 pb-7 text-2xl font-semibold tracking-tight text-white">
            Lorem ipsum dolor sit.
          </h3>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Aliquam tincidunt justo in lacinia mollis.</li>
            <li>Etiam volutpat velit id commodo accumsan.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Aliquam tincidunt justo in lacinia mollis.</li>
          </ul>
          <div className="absolute -bottom-40 -right-40 -z-10 h-96 w-96 rounded-full border border-white" />
        </div>
        {/* bottom left */}
        <div className="absolute bottom-0 left-0 z-50 h-[23rem] w-[35rem] rounded-[4rem] bg-white">
          <div className="relative h-full w-full">
            <Image
              width={500}
              alt="image"
              height={500}
              className="absolute left-1/2 top-1/2 h-[21rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-[4rem] object-cover"
              src="https://i.pinimg.com/564x/47/23/94/4723947c6deeca4141907917d3de4b91.jpg"
            />
          </div>
        </div>
        {/* top right */}
        <div className="absolute right-0 top-0 z-50 h-[23rem] w-[35rem] rounded-[4rem] bg-white">
          <div className="relative h-full w-full">
            <Image
              width={500}
              alt="image"
              height={500}
              className="absolute left-1/2 top-1/2 h-[21rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-[4rem] object-cover"
              src="https://i.pinimg.com/564x/0b/ac/13/0bac13677e09f4c0cb046ac3c67f8a69.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ParcSecond = () => {
  return (
    <div className="flex justify-center">
      <div className="relative h-[50rem] w-[80rem]">
        {/* top left */}
        <div className="absolute mt-[.3px] h-[27rem] w-[45rem] rounded-[4rem] bg-textblue p-10">
          <div className="relative h-full">
            <h3 className="cabinet scroll-m-20 text-5xl font-semibold tracking-tight text-white">
              Lorem impsum
            </h3>
            <p className="leading-7 text-white [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vehicula commodo dolor id pharetra. Nullam ut lorem posuere,
              cursus lorem eget, convallis odio. Vestibulum laoreet magna quis
              nunc cursus, eu varius leo congue. Cras aliquam libero ex, vel
              pretium erat dignissim non. Aliquam vitae magna eu enim dignissim
              euismod non.
              <br />
              <br />
              Cras aliquam libero ex, vel pretium erat dignissim non. Aliquam
              vitae magna eu enim dignissim euismod non.
            </p>
          </div>
        </div>
        {/* middle */}
        <div className="absolute left-1/2 top-1/2 -z-20 h-56 w-80 -translate-x-1/2 -translate-y-1/2 bg-textblue"></div>
        {/* bottom right */}
        <div className="absolute bottom-0 right-0 z-50 mb-[.3px] h-[27rem] w-[45rem] rounded-[4rem] bg-textblue p-10 text-white">
          <h3 className="scroll-m-20 pb-7 text-2xl font-semibold tracking-tight text-white">
            Lorem ipsum dolor sit.
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Aliquam tincidunt justo in lacinia mollis.</li>
            <li>Etiam volutpat velit id commodo accumsan.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Aliquam tincidunt justo in lacinia mollis.</li>
          </ul>
          <div className="absolute -bottom-40 -right-40 -z-10 h-96 w-96 rounded-full border border-white" />{" "}
        </div>
        {/* bottom left */}
        <div className="absolute bottom-0 left-0 z-50 h-[23rem] w-[35rem] rounded-[4rem] bg-white">
          <div className="relative h-full w-full">
            <Image
              width={500}
              alt="image"
              height={500}
              className="absolute left-1/2 top-1/2 h-[21rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-[4rem] object-cover"
              src="https://i.pinimg.com/564x/47/23/94/4723947c6deeca4141907917d3de4b91.jpg"
            />
          </div>
        </div>
        {/* top right */}
        <div className="absolute right-0 top-0 z-50 h-[23rem] w-[35rem] rounded-[4rem] bg-white">
          <div className="relative h-full w-full">
            <Image
              width={500}
              alt="image"
              height={500}
              className="absolute left-1/2 top-1/2 h-[21rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-[4rem] object-cover"
              src="https://i.pinimg.com/564x/0b/ac/13/0bac13677e09f4c0cb046ac3c67f8a69.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ParcThird = () => {
  return (
    <div className="flex justify-center">
      <div className="relative h-[50rem] w-[80rem]">
        {/* top left */}
        <div className="absolute mt-[.3px] h-[27rem] w-[45rem] rounded-[4rem] bg-textblue p-10">
          <div className="relative h-full">
            <h3 className="cabinet scroll-m-20 text-5xl font-semibold tracking-tight text-white">
              Lorem impsum
            </h3>
            <p className="leading-7 text-white [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vehicula commodo dolor id pharetra. Nullam ut lorem posuere,
              cursus lorem eget, convallis odio. Vestibulum laoreet magna quis
              nunc cursus, eu varius leo congue. Cras aliquam libero ex, vel
              pretium erat dignissim non. Aliquam vitae magna eu enim dignissim
              euismod non.
              <br />
              <br />
              Cras aliquam libero ex, vel pretium erat dignissim non. Aliquam
              vitae magna eu enim dignissim euismod non.
            </p>
          </div>
        </div>
        {/* middle */}
        <div className="absolute left-1/2 top-1/2 -z-20 h-56 w-80 -translate-x-1/2 -translate-y-1/2 bg-textblue"></div>
        {/* bottom right */}
        <div className="absolute bottom-0 right-0 z-50 mb-[.3px] h-[27rem] w-[45rem] rounded-[4rem] bg-textblue p-10 text-white">
          <h3 className="scroll-m-20 pb-7 text-2xl font-semibold tracking-tight text-white">
            Lorem ipsum dolor sit.
          </h3>

          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Aliquam tincidunt justo in lacinia mollis.</li>
            <li>Etiam volutpat velit id commodo accumsan.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Aliquam tincidunt justo in lacinia mollis.</li>
          </ul>
          <Link
            href="/contact"
            className="cabinet z-50 inline-flex h-14 w-full items-center justify-center rounded-3xl border border-transparent bg-orangeboom px-5 py-2.5 text-lg text-slate-50 transition-transform duration-500 ease-in-out hover:scale-105"
          >
            Contactez-nous
          </Link>
          <div className="absolute -bottom-40 -right-40 -z-10 h-96 w-96 rounded-full border border-white" />
        </div>
        {/* bottom left */}
        <div className="absolute bottom-0 left-0 z-50 h-[23rem] w-[35rem] rounded-[4rem] bg-white">
          <div className="relative h-full w-full">
            <Image
              width={500}
              alt="image"
              height={500}
              className="absolute left-1/2 top-1/2 h-[21rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-[4rem] object-cover"
              src="https://i.pinimg.com/564x/47/23/94/4723947c6deeca4141907917d3de4b91.jpg"
            />
          </div>
        </div>
        {/* top right */}
        <div className="absolute right-0 top-0 z-50 h-[23rem] w-[35rem] rounded-[4rem] bg-white">
          <div className="relative h-full w-full">
            <Image
              width={500}
              alt="image"
              height={500}
              className="absolute left-1/2 top-1/2 h-[21rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-[4rem] object-cover"
              src="https://i.pinimg.com/564x/0b/ac/13/0bac13677e09f4c0cb046ac3c67f8a69.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
