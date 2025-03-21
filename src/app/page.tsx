"use client";

import {
  usePrivy,
  useSolanaWallets,
  useConnectWallet,
} from "@privy-io/react-auth";

export default function Home() {
  const { login, logout, ready, authenticated, user } = usePrivy();
  const { wallets } = useSolanaWallets();
  const { connectWallet } = useConnectWallet();

  return (
    <div className="p-4 flex flex-col gap-4">
      <button onClick={login}>Log in</button>
      <button onClick={logout}>Log out</button>
      <button onClick={connectWallet}>Connect wallet</button>
      <p>Authenticated: {authenticated ? "yes" : "no"}</p>
      <p>Ready: {ready ? "yes" : "no"}</p>
      <p>User:</p>
      <textarea
        readOnly
        className="w-full h-64 bg-gray-100 p-2 rounded-md text-black"
        value={JSON.stringify(user, null, 2)}
      />
      <p>Solana wallets:</p>
      <textarea
        readOnly
        className="w-full h-64 bg-gray-100 p-2 rounded-md text-black"
        value={JSON.stringify(wallets, null, 2)}
      />
    </div>
  );
}
