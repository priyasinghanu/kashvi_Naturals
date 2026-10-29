import { useState, useEffect } from "react";

const banners = [
  {
    image: "/image/1.png",
    alt: "Kashvi Natural - Goodness of Nature",
  },
  {
    image: "/image/2.png",
    alt: "Kashvi Natural - Nature's Care",
  },
  {
    image: "/image/3.png",
    alt: "Kashvi Natural - Healthy Choices",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={banners[current].image}
        alt={banners[current].alt}
        className="w-full h-160 object-cover"
      />
     <button
          type="button"
          aria-label="Previous banner"
          onClick={() =>
            setCurrent((current - 1 + banners.length) % banners.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 shadow"
        >
          ❮
        </button>

        <button
          type="button"
          aria-label="Next banner"
          onClick={() => setCurrent((current + 1) % banners.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 shadow"
        >
          ❯
        </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}