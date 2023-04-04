import Header from "@/component/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/component/mainComponent/Card";

interface MovieType {
  title: string;
  poster: string;
}

export default function Home(): JSX.Element {
  const [movies, setMovies] = useState<MovieType[] | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:2000/theater")
      .then((res) => setMovies(res.data));
  }, []);

  console.log(movies);

  return (
    <>
      <Header />
      <main>
        <div>
          {movies?.map((movie: MovieType, index: number) => (
            <Card {...movie} key={index} />
          ))}
        </div>
      </main>
    </>
  );
}
