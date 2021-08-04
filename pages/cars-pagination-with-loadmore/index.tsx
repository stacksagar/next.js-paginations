import { useEffect, useState } from 'react';
import carTypes from '../../types/carTypes';
import Car from '../../components/Car';
import { useRouter } from 'next/router';

export default function Cars3() {
  const router = useRouter();
  const [showPages, setShowPages] = useState(6);
  const [cars, setCars] = useState<carTypes[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/api/cars');
      const cars = await res.json();
      setCars(cars);
    })();
  }, []);

  if (!cars?.length) {
    return (
      <div className="fixed w-full min-h-screen bg-black top-0 left-0 flex items-center justify-center">
        <h1 className="text-3xl text-white">Loading...</h1>
      </div>
    );
  }

  return (
    <main className="w-full text-center">
      <section className="grid grid-cols-12 gap-5 p-5 w-5/6 mx-auto justify-start items-start content-start ">
        {cars
          ?.filter((_, i) => {
            const n = i + 1;
            return n <= showPages;
          })

          ?.map((car, i) => (
            <Car
              itFor="cars-pagination-with-loadmore"
              key={i}
              serial={car?.id}
              car={car}
            />
          ))}
      </section>

      <button
        onClick={() => setShowPages((prev) => prev + 3)}
        className={`${
          cars?.length < showPages + 1 && 'hidden'
        } px-6 py-2 rounded text-white bg-gray-700 focus:ring mx-auto inline-block`}
      >
        Load More...
      </button>
    </main>
  );
}
