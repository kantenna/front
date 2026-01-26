import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

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
        </nav>
      </div>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/contact" Component={Contact}></Route>
        {/* <Route path="/account" Component={Account}>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Route> */}
      </Routes>
    </>
  );
}

export default Navbar;
