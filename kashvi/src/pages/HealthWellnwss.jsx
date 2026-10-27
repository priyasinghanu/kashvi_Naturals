import { useState, useEffect } from "react";

const banners = [
  {
    image: "/image/ww.png",
    
    alt: "Kashvi Natural - Goodness of Nature",
  },
  {
    image: "/image/h2.png",
    alt: "Kashvi Natural - Nature's Care",
  },
  {
    image: "/image/h3.png",
    alt: "Kashvi Natural - Healthy Choices",
  },
];
export default function HealthWellness() {
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
        className="w-full h-full object-cover overflow-hidden"
      />
      <button
        onClick={() =>
          setCurrent(
            (current - 1 + banners.length) % banners.length
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full px-4 py-2"
      >
        
      </button>

      <button
        onClick={() =>
          setCurrent((current + 1) % banners.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full px-4 py-2"
      >
        
      </button>
<div>
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
    <section className="min-h-screen bg-[#f7f8f2] px-6 py-5">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl bg-amber-200 font-semibold uppercase tracking-widest text-green-700 text-center">
          Super Food
        </h1>
        <h5 className="mt-3 text-2xl font-bold text-[#244b3f] text-center">
           Discover superfoods, herbal ingredients and natural wellness products
          for your everyday routine.
        </h5>
        

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Amla Powder",description: "RS-200",button: "Add To Cart",image: "/image/Amla_Powder.jpg" },
            { name: "Mushroom Powder",description: "RS-200",button:"Add To cart" , image: "/image/02_Mushroom_Powder.jpg" },
            { name: "Makhana Powder",description: "RS-200",button:"Add To cart" , image: "/image/Makhana_Powder.jpg" },
            { name: "Beetroot Powder",description: "RS-200",button:"Add To cart" , image: "/image/Beetroot_Powder.jpg" },
            { name: "Amla Powder",description: "RS-200",button:"Add To cart" , image: "/image/Amla_Powder.jpg" },
            { name: "Mushroom Powder",description: "RS-200",button:"Add To cart" , image: "/image/02_Mushroom_Powder.jpg" },
            { name: "Makhana Powder",description: "RS-200",button:"Add To cart" , image: "/image/Makhana_Powder.jpg" },
            { name: "Beetroot Powder",description: "RS-200",button:"Add To cart" , image: "/image/Beetroot_Powder.jpg" },
          ].map((product) => (
            <article key={product.name} className="overflow-hidden rounded-2xl bg-white p-4 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full rounded-xl object-contain"
              />
              <h2 className="mt-4 text-lg font-semibold text-[#244b3f] text-center">
                {product.name}
              </h2>
              <p className="mt-3 text-lg font-semibold text-[#907ea1] text-center">
                {product.description}
              </p>
              <button
                  className={`$ rounded-full px-6 py-2
                  text-sm font-medium text-white transition hover:opacity-90 bg-green-900 text-center object-center`}
                >{product.button}
              
                </button>
            </article>
          ))}
        </div>
      </div>
    </section>
    </div>
    </div>
  );
}
