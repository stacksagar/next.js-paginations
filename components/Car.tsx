import carTypes from '../types/carTypes';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Car({
  itFor,
  car,
  serial,
  currentPage,
  hidden,
}: {
  itFor?: string;
  car?: carTypes;
  currentPage?: any;
  serial?: any;
  hidden?: boolean;
}) {
  const router = useRouter();

  const viewHandler = () => {
    itFor == 'cars-pagination-with-route' &&
      router.push(`/${itFor}/${currentPage}/${car?._id}`);

    itFor == 'cars-pagination-without-route' &&
      router.push(`/${itFor}/${car?._id}`);

    itFor == 'cars-pagination-with-loadmore' &&
      router.push(`/${itFor}/${car?._id}`);
  };

  return (
    <div
      key={car?.id}
      className={`gridCar ${
        hidden && 'opacity-0 hidden lg:block '
      } h-52 rounded overflow-hidden bg-gray-800`}
    >
      <div className="w-full h-40 relative overflow-hidden">
        <div className="w-full h-full absolute left-0 top-0 bg-gray-700 animate-ping z-0"></div>
        {!hidden && (
          <Image
            alt=""
            className="absolute z-20"
            layout="fill"
            src={car?.photoUrl}
            objectFit="cover"
          />
        )}
      </div>

      {!hidden && (
        <div className="w-full h-12 flex items-center justify-between px-1 xl:px-4">
          <small className="bg-gray-900 text-white px-5 py-1 rounded">
            Serial_No: {serial}
          </small>
          <button
            onClick={viewHandler}
            className="px-5 text-sm py-1 rounded bg-gradient-to-r from-gray-700 to-gray-500 text-white focus:ring"
          >
            View Details...
          </button>
        </div>
      )}
    </div>
  );
}
