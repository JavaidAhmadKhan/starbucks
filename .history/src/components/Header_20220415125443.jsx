import "./header.styles.css";
const Header = () => {
  return (
    <nav className="zone blue sticky">
      <img
        src="https://rewards.starbucks.in//themes/starbucks/images/logo.png"
        alt="starbucks"
      />
      <ul className="main-nav">
        <li>Coffee</li>
        <li>Menu</li>
        <li>Merchandise</li>
        <li>Rewards</li>
        <li>GiftCards</li>
        <li>Find A Store</li>
        <li>Sign In</li>
      </ul>
    </nav>
  );
};

export default Header;
