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
   <div className="flex flex-row  ">
      <section className="w-1/2">
          <picture>
              <img src={data?.poster} alt="" />
          </picture>


      </section>
      <section className="w-1/2">
          <h1>{data?.title}</h1>
          <p>{data?.plot}</p>
          <p>{data?.fullplot}</p>

      </section>
   </div>
  );
}
