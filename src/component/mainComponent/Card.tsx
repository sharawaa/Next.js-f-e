/* eslint-disable react/jsx-no-comment-textnodes */

import Link from "next/link";
import { MovieType } from "../../../utils/MovieType";

export default function Card(props: MovieType): JSX.Element {
  return (
    <Link href={`/movie/${props._id}`}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <picture>
            <img className="rounded-t-lg" src={props.poster} alt="" />
          </picture>
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.title.slice(0, 20)}
              {props.title.length > 20 ? "..." : ""}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.plot}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            s
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              read more
            </svg>
          </a>
        </div>
      </div>
    </Link>
  );
}
