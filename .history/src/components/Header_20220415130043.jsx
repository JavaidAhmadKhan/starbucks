import "./header.styles.css";
const Header = () => {
  return (
    <nav>
      <ul className="main-nav">
        <img
          src="https://rewards.starbucks.in//themes/starbucks/images/logo.png"
          alt="starbucks"
        />
        <li>Coffee</li>
        <li>Menu</li>
        <li>Merchandise</li>
        <li>Rewards</li>
        <li>GiftCards</li>
        <li className="push">Find A Store</li>
      </ul>
    </nav>
  );
};

export default Header;
