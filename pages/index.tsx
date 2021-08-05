import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { database } from '../firebase';
export default function Homepage() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const resp = await database.collection('cars').get();
      const cars = await resp.docs.map((doc) => ({
        _id: doc.id,
        ...doc.data(),
      }));

      let initialNumber = 1;
      const paths = cars.map((car, i) => {
        const n = i + 1;
        if (n % 6 == 0) {
          return {
            params: { currentPage: initialNumber++, id: car._id },
          };
        }
        return {
          params: { currentPage: initialNumber, id: car._id },
        };
      });

    })();
  }, []);

  return (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="w-96 p-10 rounded bg-gray-700 flex flex-col space-y-5 text-white">
        <button
          onClick={() => router.push('/cars-pagination-with-route')}
          className="w-full p-3 pr-0 text-left bg-gray-800 focus:ring hover:bg-gray-900"
        >
          Cars Pagination
          <b className="ml-3 text-gray-200 text-xs font-semibold">
            With Route Change
          </b>
        </button>
        <button
          onClick={() => router.push('/cars-pagination-without-route')}
          className="w-full p-3 pr-0 text-left bg-gray-800 focus:ring hover:bg-gray-900"
        >
          Cars Paginations
          <b className="ml-3 text-gray-200 text-xs font-semibold">
            Without Route Change
          </b>
        </button>

        <button
          onClick={() => router.push('/cars-pagination-with-loadmore')}
          className="w-full p-3 pr-0 text-left bg-gray-800 focus:ring hover:bg-gray-900"
        >
          Cars Paginations
          <b className="ml-3 text-gray-200 text-xs font-semibold">
            With LoadMore
          </b>
        </button>
      </div>
    </div>
  );
}
