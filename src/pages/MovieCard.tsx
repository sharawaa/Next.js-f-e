import axios from "axios";
import { useEffect, useState } from "react";
import { MovieType } from "../../utils/MovieType";
export default function MovieCard(): JSX.Element {
  const [movie, setMovie] = useState<MovieType[] | null>(null);
  useEffect(() => {
    axios.get("http://localhost:2000/movie").then((res) => setMovie(res.data));
  }, []);

  return <>asda{movie}</>;
}
