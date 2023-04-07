import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MovieType } from "../../../utils/MovieType";

export default function Movie() {
  const { query } = useRouter();
  const [data, setData] = useState<MovieType | null>(null);
  useEffect(() => {
    if (query.id) {
      fetch(`http://localhost:2000/movie/${query.id}`)
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, [query.id]);

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <picture>
            <img src={data?.poster} alt="" className="w-96" />
          </picture>
        </div>
        <div className="w-96">
          <h1>{data?.plot}</h1>
          <p>{data?.fullplot}</p>
        </div>
      </div>
    </div>
  );
}

// import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
// import { MovieType } from "../../../utils/MovieType";

// export default function Movie({ data: movie }: { data: MovieType }) {
//   return (
//     <div>
//       ID: {movie._id}
//       <div>
//         <h2>{movie.title}</h2>
//         <picture>
//           <img src={movie.poster} alt="" />
//         </picture>
//       </div>
//     </div>
//   );
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`http://localhost:-2000/movies-id`);
//   const resJson = await res.json();
//   const paths = await resJson.map((id: { _id: string }) => ({
//     params: { id: id._id },
//   }));

//   return {
//     paths,
//     fallback: "blocking",
//   };
// };

// interface MovieProps {
//   data: MovieType | null;
// }

// export const getStaticProps: GetStaticProps<MovieProps> = async ({
//   params,
// }: GetStaticPropsContext) => {
//   const res = await fetch(`http://localhost:5001/movie/${params?.id}`);
//   const movie = await res.json();
//   return {
//     props: {
//       data: movie,
//     },
//   };
// };
