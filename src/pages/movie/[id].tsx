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

  // return (
  //   <div className="flex">
  //     <div className="flex justify-center w-96">
  //       <section className="w-1/2">
  //         <picture>
  //           <img src={data?.poster} alt="pic" className="w-96" />
  //         </picture>
  //       </section>
  //       <section className="w-1/2">
  //         <h1 className="text-3xl">{data?.title}</h1>
  //         <p>{data?.plot}</p>
  //         <p>{data?.fullplot}</p>
  //       </section>
  //     </div>
  //   </div>
  // );
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
