import React from "react";

type Props = {};

function Header({}: Props) {
  return <div>
    <nav>
      <button className="connectWalletBtn">Connect your wallet</button>
    </nav>
  </div>;
}

export default Header;
