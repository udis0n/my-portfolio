import React from 'react';
import Header from '../components/Header';
import minimalistAvatar from '../images/minimalist-avatar.png';
import '../css/home.css';

export default function Home() {
  return (
    <section className="home-container">
      <Header />
      <img className="minimalist-avatar" src={minimalistAvatar} alt="my minimalist avatar" />

      <p className="introduction">
        {
          `Oi, meu nome é Udison
          e eu sou um desenvolvedor front-end apaixonado
          por interfaces bonitas e intuitivas.`
        }
      </p>
    </section>
  );
}
