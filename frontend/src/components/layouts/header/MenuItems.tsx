const MenuItems: React.FC = () => {
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
  
  return(
    <>
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
    </>
  );
};

export default MenuItems;
