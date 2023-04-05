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
    <>
      <picture>
        <img src={data?.poster} alt="" />
      </picture>

      <p>{data?.plot}</p>
    </>
  );
}
