import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Menu from './Menu';
import '../css/header.css';

export default function Header() {
  return (
    <header>
      <Link className="link" to="/">
        <Logo />
      </Link>

      <Menu />
    </header>
  );
}
