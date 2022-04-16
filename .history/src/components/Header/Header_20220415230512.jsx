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
        <img src="https://cdn-icons-png.flaticon.com/512/36/36578.png" alt="" />
      </ul>
    </nav>
  );
};

export default Header;
