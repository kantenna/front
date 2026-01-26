import { Link, Route, Routes } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="bg-gray-200">
        <nav className="flex h-20 items-center p-3">
          <Link to={'/'} className="basis-3xl">
            HOME
          </Link>
          <Link to={'/about'} className="basis-3xl">
            ABOUT
          </Link>
          <Link to={'/contact'} className="basis-3xl">
            CONTACT
          </Link>
          <Link to={'/account'} className="basis-3xl">
            ACCOUNT
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
