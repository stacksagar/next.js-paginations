import { useEffect, useState } from 'react'; 
import carTypes from '../../types/carTypes';
import Car from '../../components/Car';
import { database } from '../../firebase';

export default function Cars2() {
  const showPages = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [min, setMin] = useState((currentPage - 1) * showPages);
  const [max, setMax] = useState(currentPage * showPages);
  const [cars, setCars] = useState<carTypes[]>([]);
  const [totalPage, setTotalPage] = useState<any>();

  useEffect(() => {
    database
      .collection('cars')
      .get()
      .then((snap) => snap.docs.map((doc) => ({ _id: doc.id, ...doc.data() })))
      .then((cars: carTypes[]) => {
        setCars(cars);
        setTotalPage(Math.ceil(cars?.length / showPages));
      })
      .catch((error) => console.log('firebase fetching error ', error))
      .finally(() => console.log('loaded'));
  }, []);

  useEffect(() => {
    setMin((currentPage - 1) * showPages);
    setMax(currentPage * showPages);
  }, [currentPage]);

  if (!cars?.length) {
    return (
      <div className="fixed w-full min-h-screen bg-black top-0 left-0 flex items-center justify-center">
        <h1 className="text-3xl text-white">Loading...</h1>
      </div>
    );
  }

  return (
    <main className="w-full">
      <section className="grid grid-cols-12 gap-5 p-5 w-5/6 mx-auto justify-start items-start content-start ">
        {cars
          ?.filter((_, i) => {
            const n = i + 1;
            return n > min && n <= max;
          })
          ?.map((car, i) => (
            <Car
              itFor="cars-pagination-without-route"
              currentPage={currentPage}
              key={i}
              serial={i + 1}
              car={car}
            />
          ))}

        {cars?.filter((_, i) => {
          const n = i + 1;
          return n > min && n <= max;
        }).length < 4 &&
          Array(3)
            .fill('')
            .map((_, i) => <Car key={i} hidden={true} />)}
      </section>

      <section className="w-full p-2 rounded bg-gray-900 bg-opacity-10 flex items-center justify-center space-x-10">
        {/* from current page to previous page */}
        <button
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
          disabled={currentPage == 1}
          className={`btn ${
            currentPage <= 1 && 'opacity-20 cursor-not-allowed'
          }`}
        >
          Prev
        </button>

        {/* All pages */}
        <div className="flex justify-between space-x-5">
          {cars?.length &&
            Array(Math.ceil(cars?.length / showPages))
              .fill('')
              .map((_, i) => (
                <span
                  onClick={() => setCurrentPage(i + 1)}
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
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
          disabled={currentPage == totalPage}
          className={`btn  ${
            currentPage == 4 && 'opacity-20 cursor-not-allowed'
          }`}
        >
          Next
        </button>
        {/* Next Button */}
      </section>
    </main>
  );
}
