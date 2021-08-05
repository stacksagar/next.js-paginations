import { useState } from 'react';
import Car from '../../components/Car';
import { database } from '../../firebase';

export default function Cars3({ cars }) {
  const [showPages, setShowPages] = useState(6);

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
              serial={i + 1}
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

export const getServerSideProps = async () => {
  const resp = await database.collection('cars').get();
  const cars = await resp.docs.map((doc) => ({ _id: doc.id, ...doc.data() }));
  return {
    props: {
      cars: JSON.parse(JSON.stringify(cars)),
    },
  };
};
