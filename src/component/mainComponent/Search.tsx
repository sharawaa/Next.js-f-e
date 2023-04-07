import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function Search(): JSX.Element {
  const router = useRouter();
  function submitHandlerFunction(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = e.currentTarget.elements.searchValue.value;
    router.push(`/search/${url}`);
  }

  return (
    <form className="flex items-center" onSubmit={submitHandlerFunction}>
      <div className="relative w-80">
        <input
          type="text"
          defaultValue="search"
          name="searchValue"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <button className="bg-white w-40 h-20" type="submit">
          search
        </button>
      </div>
    </form>
  );
}
