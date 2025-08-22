"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
const companies = [
  {
    name: "amazon",
    path: "/companies/amazon.svg",
    id: 1,
  },
  {
    name: "atlassian",
    path: "/companies/atlassian.svg",
    id: 2,
  },
  {
    name: "google",
    path: "/companies/google.webp",
    id: 3,
  },
  {
    name: "ibm",
    path: "/companies/ibm.svg",
    id: 4,
  },
  {
    name: "meta",
    path: "/companies/meta.svg",
    id: 5,
  },
  {
    name: "microsoft",
    path: "/companies/microsoft.webp",
    id: 6,
  },
  {
    name: "netflix",
    path: "/companies/netflix.png",
    id: 7,
  },
  {
    name: "uber",
    path: "/companies/uber.svg",
    id: 8,
  },
];

const CompanyCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full py-10"
    >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {companies.map(({ name, id, path }) => (
          <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
            <Image
              src={path}
              alt={name}
              width={200}
              height={56}
              className="h-9 sm:h-14 w-auto object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>

  );
};

export default CompanyCarousel;
