"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import {
  iphone,
  samsungGalaxy,
  airpods,
  sonyHeadphones,
  xiaomiNotebook,
  smartWatch,
  camera,
  lgRefrigerator,
  xiaomiTV,
  tefalVacuum,
} from "@/images";

interface Slide {
  id: number;
  image: StaticImageData;
  brand: string;
  title: string;
  background: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: iphone,
    brand: "Apple",
    title: "iPhone 15 Pro Max",
    background: "bg-gradient-to-r from-slate-200 to-gray-400",
  },
  {
    id: 2,
    image: samsungGalaxy,
    brand: "Samsung",
    title: "Galaxy S24 Ultra",
    background: "bg-gradient-to-r from-purple-100 to-indigo-200",
  },
  {
    id: 3,
    image: airpods,
    brand: "Apple",
    title: "AirPods Pro 2nd Gen",
    background: "bg-gradient-to-r from-gray-100 to-zinc-300",
  },
  {
    id: 4,
    image: sonyHeadphones,
    brand: "Sony",
    title: "WH-CH520 Headphones",
    background: "bg-gradient-to-r from-blue-100 to-cyan-200",
  },
  {
    id: 5,
    image: xiaomiNotebook,
    brand: "Xiaomi",
    title: "Mi Notebook Ultra",
    background: "bg-gradient-to-r from-gray-200 to-slate-300",
  },
  {
    id: 6,
    image: smartWatch,
    brand: "Wearable",
    title: "Smart Watch Series 8",
    background: "bg-gradient-to-r from-orange-100 to-amber-200",
  },
  {
    id: 7,
    image: camera,
    brand: "Canon",
    title: "EOS DSLR Camera",
    background: "bg-gradient-to-r from-red-100 to-rose-200",
  },
  {
    id: 8,
    image: lgRefrigerator,
    brand: "LG",
    title: "Side-by-Side Refrigerator",
    background: "bg-gradient-to-r from-slate-100 to-gray-200",
  },
  {
    id: 9,
    image: xiaomiTV,
    brand: "Xiaomi",
    title: "Smart TV 4K UHD",
    background: "bg-gradient-to-r from-emerald-100 to-teal-200",
  },
  {
    id: 10,
    image: tefalVacuum,
    brand: "Tefal",
    title: "Vacuum Cleaner",
    background: "bg-gradient-to-r from-blue-200 to-indigo-200",
  },
];

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides Container */}
      <div className="relative h-[600px] md:h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            } ${slide.background}`}
          >
            <div className="container mx-auto h-full px-4 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8 md:gap-0 py-8 md:py-0">
              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left z-20">
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-800 font-medium">
                  <ShoppingCart className="w-5 h-5" />
                  <span>{slide.brand}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {slide.title}
                </h2>

                <div className="flex flex-row items-center justify-center md:justify-start gap-4 pt-4">
                  <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-md w-auto">
                    Buy Now
                  </button>
                  <button className="px-6 py-3 bg-transparent border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors w-auto">
                    Shop All
                  </button>
                </div>
              </div>

              {/* Image Content */}
              <div className="w-full md:w-1/2 h-[40%] md:h-full relative flex items-center justify-center">
                <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white/90 p-3 rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/50 hover:bg-white/90 p-3 rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gray-800 w-8"
                : "bg-gray-400/50 hover:bg-gray-600/50 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
