import React from 'react';

const Header: React.FC = () => {
  const logoSrc = '/lucky_nurse_station.png'; 
  const headerTextStyle = {
    textShadow: `
      -0.5px -0.5px 0 #fdfbfa,  
      0.5px -0.5px 0 #fdfbfa,
      -0.5px 0.5px 0 #fdfbfa,
      0.5px 0.5px 0 #fdfbfa,
      0px 0.5px 0 #fdfbfa,
      0.5px 0px 0 #fdfbfa,
      0px -0.5px 0 #fdfbfa,
      -0.5px 0px 0 #fdfbfa`,
  };

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
          <li className="mr-4">
            <a
              href="/about" 
              className="text-ff8b00 hover:text-1977a3"
              style={headerTextStyle}
            >私達について
            </a>
          </li>
          <li className="mr-4">
            <a 
              href="/company" 
              className="text-ff8b00 hover:text-1977a3"
              style={headerTextStyle}
            >
              会社概要
            </a>
          </li>
          <li className="mr-4">
            <a
              href="/recruit"
              className="text-ff8b00 hover:text-1977a3"
              style={headerTextStyle}
            >
              採用情報
            </a>
          </li>
          <li className="mr-4">
            <a
              href="/privacy_policy"
              className="text-ff8b00 hover:text-1977a3"
              style={headerTextStyle}
            >
              プライバシーポリシー
            </a>
          </li>
          <li className="mr-4">
            <a 
              href="/medical_fee_table"
              className="text-ff8b00 hover:text-1977a3"
              style={headerTextStyle}
            >
              診療報酬表
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-ff8b00 hover:text-1977a3"
              style={headerTextStyle}
            >
              お問合せ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;