import React, { useState, useEffect } from "react";
import "./footer.styles.css";

function Footer() {
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <div className="footer">
      <p> © {date} Starbucks! All rights reserved!</p>
    </div>
  );
}

export default Footer;
