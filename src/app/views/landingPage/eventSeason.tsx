"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"; // Importing arrow icons
import { Cloth2ndCard } from "@/app/component/cards/clothCard";
import { newArrivalItems } from "@/page/api/data";
import Link from "next/link";

const EventSeason = () => {
  // Handle scrolling through the cards
  const scroll = (direction: string) => {
    const container = document.getElementById("cardContainer");
    if (container) {
      const scrollAmount = direction === "left" ? -350 : 350;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Filter out only items where isNew is false and limit to 10 items
  const filteredItems = newArrivalItems.filter((item) => !item.isNew).slice(0, 10);

  return (
    <div className="relative flex flex-col py-4 gap-6">
      {/* Header Section */}
      <div className="flex px-4 justify-between items-center">
        <div>
          <p className="">Humanness Program</p>
          <h1 className="">Event Season</h1>
        </div>
        <div>
          <Link href="" className="buttonSellect">
            Shop now
          </Link>
        </div>
      </div>

      {/* Scroll Buttons */}
      <div className=" lg:hidden flex items-center absolute gap-20 top-24 right-6 z-10">
        <button className="text-primary" onClick={() => scroll("left")}>
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button className="text-primary" onClick={() => scroll("right")}>
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Product Grid */}
      <div className="relative w-full">
        <div className="overflow-x-auto scrollbar-hide pt-4 lg:overflow-visible" id="cardContainer">
          <div className="flex lg:grid lg:grid-cols-5 gap-2 w-fit">
            {filteredItems.map((item, index) => (
              <Cloth2ndCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSeason;