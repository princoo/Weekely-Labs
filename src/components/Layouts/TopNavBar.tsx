import ThemeToggle from "../Theme/ThemeToggle";
import WatchListBadge from "../Watchlist/WatchListBadge";
export default function TopNavBar() {
  const navItems = [

    {
      title: "Movies",
      href: "/",
    },
  ]
  return (
    <div>
      <nav className="bg-white dark:bg-primary border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pb-2">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Movie Stro
            </span>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <ThemeToggle size="small"/>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-accent rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {navItems.map((item) => (
                <li key={item.title} className="p-2 rounded-sm md:p-0">
                  <a
                    href={item.href}
                    className="block py-2 pl-3 pr-4 text-accent hover:text-secondary"
                    aria-current="page"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <WatchListBadge />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
