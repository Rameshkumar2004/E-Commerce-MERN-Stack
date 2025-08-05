import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold">
          🛒 E‑Commerce
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links + search (desktop) */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <SearchBox />
          <NavLinks />
          {/* <SearchBox /> */}
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <NavLinks onClick={() => setOpen(false)} mobile />
          <SearchBox />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ onClick, mobile = false }) {
  const linkClass = mobile
    ? "block py-2 text-lg hover:text-yellow-300"
    : "hover:text-yellow-300";
  return (
    <ul className={mobile ? "" : "flex space-x-6"}>
      <li>
        <Link to="/" className={linkClass} onClick={onClick}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/register" className={linkClass} onClick={onClick}>
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className={linkClass} onClick={onClick}>
          Login
        </Link>
      </li>
      <li>
        <Link to="/cart" className={linkClass} onClick={onClick}>
          Cart(0)
        </Link>
      </li>
    </ul>
  );
}

function SearchBox() {
  return (
    <form className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search"
        className="w-80 max-w-xs rounded px-2 py-1 text-black"
      />
      <button
        type="submit"
        className="rounded bg-yellow-500 px-3 py-1 text-black hover:bg-yellow-600"
      >
        Search
      </button>
    </form>
  );
}

export default Header;
