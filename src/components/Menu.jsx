import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/menu.css';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {
        isMenuOpen && (
          <div className="menu">
            <nav>
              <Link className="link" to="/">
                <div className="menu-option">
                  Home
                </div>
              </Link>
              <Link className="link" to="/contact">
                <div className="menu-option">
                  Contato
                </div>
              </Link>
              <Link className="link" to="/projects">
                <div className="menu-option">
                  Meus Projetos
                </div>
              </Link>
            </nav>
          </div>
        )
      }

      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={isMenuOpen ? 'menu-open menu-button' : 'menu-button'}
      >
        {isMenuOpen ? 'open' : 'closed'}
      </button>
    </div>
  );
}
