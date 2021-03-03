import Link from 'next/link'

//import styles from './Navbar.module.scss';

const Navbar = () => {

  return (
      <div className="container">
      <menu>
        <ul>
          <li>
          <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </menu>
    </div>
    )
}

export default Navbar
