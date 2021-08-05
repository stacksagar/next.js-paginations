import { useEffect, useState } from 'react';
import Image from 'next/image';
import carTypes from '../../types/carTypes';
import Car from '../../components/Car';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { database } from '../../firebase';

export default function Cars({
  serverCars,
  min,
  max,
  totalPage,
  currentPage,
  cars,
}: {
  serverCars?: carTypes[];

  min: any;
  max: any;
  totalPage: any;
  currentPage: any;
  cars: carTypes[];
}) {
  if (!cars?.length) {
    return (
      <div className="fixed w-full min-h-screen bg-black top-0 left-0 flex items-center justify-center">
        <h1 className="text-3xl text-white">Loading...</h1>
      </div>
    );
  }

  const Router = useRouter();

  return (
    <main className="w-full">
      <section className="grid grid-cols-12 gap-5 p-5 w-5/6 mx-auto justify-start items-start content-start ">
        {cars?.length &&
          cars.map((car, i) => (
            <Car
              itFor="cars-pagination-with-route"
              currentPage={currentPage}
              key={i}
              serial={car.id}
              car={car}
            />
          ))}

        {cars?.length < 4 &&
          Array(3)
            .fill('')
            .map((_, i) => <Car key={i} hidden={true} />)}
      </section>

      <section className="w-full p-2 rounded bg-gray-900 bg-opacity-10 flex items-center justify-center space-x-10">
        {/* from current page to previous page */}
        <button
          disabled={currentPage <= 1}
          onClick={() =>
            Router.push(`/cars-pagination-with-route/${+currentPage - 1}`)
          }
          className={`btn ${
            currentPage <= 1 && 'opacity-20 cursor-not-allowed'
          }`}
        >
          Prev
        </button>

        {/* All pages */}
        <div className="flex justify-between space-x-5">
          {Array(totalPage)
            .fill('')
            .map((_, i) => (
              <span
                onClick={() =>
                  Router.push(`/cars-pagination-with-route/${i + 1}`)
                }
                key={i}
                className={`text-xl cursor-pointer ${
                  i + 1 == currentPage
                    ? 'text-yellow-500 underline'
                    : 'text-gray-200'
                }`}
              >
                {i + 1}
              </span>
            ))}
        </div>

        {/* from current page to next page */}
        <button
          disabled={currentPage == totalPage}
          onClick={() =>
            Router.push(`/cars-pagination-with-route/${+currentPage + 1}`)
          }
          className={`btn  ${
            currentPage == totalPage && 'opacity-20 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (c) => {
  const resp = await database.collection('cars').get();
  const cars = await resp.docs.map((doc) => ({ _id: doc.id, ...doc.data() }));

  const current: string | any = c.params?.currentPage || 1;
  const min = +(current - 1) * 6;
  const max = +current * 6;
  const totalPage = Math.ceil(cars.length / 6);

  const filterCars = cars.filter((_, i) => {
    const serial = i + 1;
    return serial > min && serial <= max;
  });

  return {
    props: {
      min,
      max,
      totalPage,
      currentPage: current,
      cars: JSON.parse(JSON.stringify(filterCars)),
    },
  };
};
