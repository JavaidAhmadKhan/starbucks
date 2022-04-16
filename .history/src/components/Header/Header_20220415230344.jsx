import "./header.styles.css";
const Header = () => {
  return (
    <nav className="header">
      <ul className="main-nav">
        <img
          className="img-container"
          src="https://rewards.starbucks.in//themes/starbucks/images/logo.png"
          alt="starbucks"
        />
        <li>Coffee</li>
        <li>Menu</li>
        <li>Merchandise</li>
        <li>Rewards</li>
        <li>GiftCards</li>
        <li className="push">Find A Store</li>
        <img
          src="https://cdn2.vectorstock.com/i/1000x1000/67/46/monochrome-round-coffee-cup-icon-vector-5106746.jpg"
          alt=""
        />
      </ul>
    </nav>
  );
};

export default Header;
