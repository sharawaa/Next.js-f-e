import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MovieType } from "../../../utils/MovieType";

export default function Search(): JSX.Element {
  const [search, setSearch] = useState<MovieType[] | null>();
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:2000/search/${router.query.search}`)
      .then((res) => res.json())
      .then((res) => setSearch(res));
  }, []);
  console.log(search);

  return (
    <>
      {/* <div>{search && search[0].title}</div>
      <picture>
        <img src={search && search[0].poster} alt="" />
      </picture> */}
    </>
  );
}
