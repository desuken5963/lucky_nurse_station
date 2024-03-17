import React from 'react';
import MenuItems from './MenuItems';

const Header: React.FC = () => {
  const logoSrc = '/lucky_nurse_station.png'; 

  return (
    <header 
      style={{
        background: 'linear-gradient(to right, rgba(253, 251, 250, 0.5), rgba(29, 170, 205, 0.5))',
      }}
      className="sticky top-0 z-50 bg-fdfbfa text-263f4b font-nunito "
    >
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div
          className="flex items-center flex-shrink-0 text-1977a3 mr-6"
        >
          <img src={logoSrc} alt="logo" className="h-8 mr-2" />
          <a 
            href="/" 
            className="font-semibold text-xl tracking-tight"
          >
            Lucky訪問看護ステーション
          </a>
        </div>
        <ul className="flex-grow flex justify-end list-none">
          <MenuItems/>
        </ul>
      </nav>
    </header>
  );
};

export default Header;