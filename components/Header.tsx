import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

type Props = {};

function Header({}: Props) {
  const connectWithMetaMask = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <div>
      <nav>
        {address ? (
          <button onClick={disconnect} className="connectWalletBtn">Hi, {address.slice(0, 5) + "..." + address.slice(-4)}</button>
        ) : (
          <button onClick={connectWithMetaMask} className="connectWalletBtn">Connect your wallet</button>
        )}
      </nav>
    </div>
  );
}

export default Header;
