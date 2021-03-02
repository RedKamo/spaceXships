import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
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
