import Link from "next/link";

//import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className="container">
      <li>
        <Link href="/">
          <a>Ships</a>
        </Link>
      </li>
      <Link href="/">
        <h3>
          Space X<br /> Recovery
        </h3>
      </Link>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </div>
  );
};

export default Navbar;
