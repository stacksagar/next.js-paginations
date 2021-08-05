import Image from 'next/image';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import ChevronRight from '../../components/svgs/ChevronRight';
import carTypes from '../../types/carTypes';
import { database } from '../../firebase';

export default function CarById({
  car,
  id,
}: {
  car: carTypes;
  currentPage?: any;
  id?: any;
}) {
  const Router = useRouter();
  return (
    <main className="md:p-10 md:pt-0">
      <section className="py-3 w-full flex items-center justify-center space-x-3 text-white">
        <div
          onClick={() => Router.push('/cars-pagination-without-route')}
          className={`underline text-blue-300 cursor-pointer`}
        >
          /cars-pagination-without-route <ChevronRight />
        </div>
        <div>ID-{id} </div>
      </section>
      <section className="w-full xl:w-5/6 bg-gray-900 md:bg-gray-800 mx-auto p-10 text-white">
        <div className="relative w-full h-44 md:h-96 mx-auto rounded overflow-hidden">
          <Image alt="" layout="fill" objectFit="cover" src={car.photoUrl} />
        </div>

        <div className="w-full mx-auto text-lg">
          <P title="make" text={car.make} />
          <P title="model" text={car.model} />
          <P title="year" text={car.year} />
          <P title="kilometers" text={car.kilometers} />
          <P title="fuelType" text={car.fuelType} />
          <P title="price" text={car.price} />
          <P title="details" text={car.details} />
        </div>
      </section>
    </main>
  );
}

function P({ title, text }) {
  return (
    <p
      className={`mt-3 ${
        title !== 'details' && 'border-b'
      } border-opacity-40 text-xl`}
    >
      <b className="uppercase text-sm text-gray-400">{title}: </b> {text}
    </p>
  );
}

export const getServerSideProps: GetServerSideProps = async (c) => {
  const id = c.params?.id as string;

  const resp = await database.collection('cars').doc(id).get();
  const car = await { _id: resp.id, ...resp.data() };

  return {
    props: {
      car: JSON.parse(JSON.stringify(car)),
      id,
    },
  };
};
