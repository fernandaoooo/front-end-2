import React, { useState } from 'react';
import Link from 'next/link';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <div style={{ fontSize: '24px' }}>MeuLogo</div>
      <button onClick={alternarMenu} style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px' }}>
        ☰
      </button>
      {menuAberto && (
        <nav style={{ marginTop: '10px' }}>
          <Link href="/" passHref><a style={{ display: 'block', color: 'white', margin: '5px 0' }}>Home</a></Link>
          <Link href="/about" passHref><a style={{ display: 'block', color: 'white', margin: '5px 0' }}>Sobre</a></Link>
          <Link href="/services" passHref><a style={{ display: 'block', color: 'white', margin: '5px 0' }}>Serviços</a></Link>
          <Link href="/contact" passHref><a style={{ display: 'block', color: 'white', margin: '5px 0' }}>Contato</a></Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
