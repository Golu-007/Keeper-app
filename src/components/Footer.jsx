import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p>All rights reserved, Golu kumar &copy; {year} </p>
    </footer>
  );
}

export default Footer;
