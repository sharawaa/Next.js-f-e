import Search from "./mainComponent/Search";

export default function Header(): JSX.Element {
  return (
    <header>
    <nav className="bg-red-600 border-white-200 px-4 lg:px-6 py-2.5 dark:bg-white-800 h-30   ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
                <img src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            </a>
            <div>
              <Search />
            </div>

            <div className="flex flex-col hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                  <ul className=" flex flex-row  justify-between w-full ">
                        <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-white-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-whitek:hover:bg-white-700 dark:hover:text-whitedark:hover:bg-transparent dark:border-white-700">What the Tomatometer®?</a>
                        </li>

                        <li> <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-white-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-whitek:hover:bg-white-700 dark:hover:text-whitedark:hover:bg-transparent dark:border-white-700">Critics</a></li>

                        <li> <a href="#" className="text-white dark:text-whiteer:bg-white-50 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800">Log in</a> </li>

                        <li> <a href="#" className="text-white dark:text-whiteer:bg-white-50 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800">Sign in</a> </li>
                  </ul>

                  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 font-extrabold text-1.5xl">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-white-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-whitek:hover:bg-white-700 dark:hover:text-whitedark:hover:bg-transparent dark:border-white-700">Movies</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-white-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-whitek:hover:bg-white-700 dark:hover:text-whitedark:hover:bg-transparent dark:border-white-700">TV SHOW</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-white-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-whitek:hover:bg-white-700 dark:hover:text-whitedark:hover:bg-transparent dark:border-white-700">MOVIA TRIVIA</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-white-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-whitek:hover:bg-white-700 dark:hover:text-whitedark:hover:bg-transparent dark:border-white-700">NEWS</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-white-100 hover:bg-white-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-white lg:dark:hover:text-whitek:hover:bg-white-700 dark:hover:text-whitedark:hover:bg-transparent dark:border-white-700">SHOWTIMES</a>
                        </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  );
}
