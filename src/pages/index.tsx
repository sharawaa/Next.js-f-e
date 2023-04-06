import Header from "@/component/Header";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Card from "@/component/mainComponent/Card";
import { MovieType } from "../../utils/MovieType";

export default function Home(props: { movies: MovieType[] }): JSX.Element {
  const { movies } = props;
  //const [movies, setMovies] = useState<MovieType[] | null>(null);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:2000/movies")
  //     .then((res) => setMovies(res.data));
  // }, []);

  return (
    <>
      <Header />
      <main>
        <div className="inline-flex flex-wrap justify-around">
          {movies.map((movie: MovieType, index: number) => (
            <Card {...movie} key={index} />
          ))}
        </div>
      </main>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:2000/movies");
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
}
