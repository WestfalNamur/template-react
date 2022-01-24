function NavBar() {
  return (
    <ul className="flex border-b">
      <li className="-mb-px mr-1">
        <a
          className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
          href="#"
        >
          Home
        </a>
      </li>
      <li className="mr-1">
        <a
          className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          href="#"
        >
          Todos
        </a>
      </li>
      <li className="mr-1">
        <a
          className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          href="#"
        >
          Travel
        </a>
      </li>
    </ul>
  );
}

export default NavBar;