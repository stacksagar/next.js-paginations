import { GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { database } from '../../../firebase';
import carTypes from '../../../types/carTypes';
import Cars, { getStaticProps } from '../index';
export default Cars;
export { getStaticProps };

export const getStaticPaths: GetStaticPaths<{ currentPage }> = async () => {
  const resp = await database.collection('cars').get();
  const cars = await resp.docs.map((doc) => ({ _id: doc.id, ...doc.data() }));

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
