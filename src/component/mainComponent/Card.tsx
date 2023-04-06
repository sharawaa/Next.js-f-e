/* eslint-disable react/jsx-no-comment-textnodes */

import Link from "next/link";
import { MovieType } from "../../../utils/MovieType";

export default function Card(props: MovieType): JSX.Element {
  return (
    <Link href={`/movie/${props._id}`}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <picture>
          <img className="rounded-t-lg" src={props.poster} alt="" />
        </picture>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title.slice(0, 20)}
            {props.title.length > 20 ? "..." : ""}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.plot}
          </p>
          <button>read more</button>
        </div>
      </div>
    </Link>
  );
}
