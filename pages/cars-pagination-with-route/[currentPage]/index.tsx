import { GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import carTypes from '../../../types/carTypes';
import Cars, { getStaticProps } from '../index';
export default Cars;
export { getStaticProps };

export const getStaticPaths: GetStaticPaths<{ currentPage }> = async () => {
  const res = await fetch('http://localhost:3000/api/cars');
  const cars: carTypes[] = await res.json();
  const totalPage = Math.ceil(cars?.length / 6);

  const paths = Array(totalPage)
    .fill('')
    .map((_, i) => {
      return { params: { currentPage: (i + 1).toLocaleString() } };
    });

  return {
    fallback: true,
    paths,
  };
};
