"use client";

import { PrivyClientConfig, PrivyProvider } from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";

export const privyConfig: PrivyClientConfig = {
  embeddedWallets: {
    createOnLogin: "users-without-wallets",
    requireUserPasswordOnCreate: false,
  },
  loginMethods: [
    "wallet",
    "email",
    "sms",
    "google",
    "twitter",
    "farcaster",
    "discord",
    "github",
  ],
  appearance: {
    walletChainType: "solana-only",
    walletList: [
      "detected_wallets",
      "phantom",
      "backpack",
      "solflare",
      "okx_wallet",
    ],
  },
  externalWallets: {
    solana: {
      connectors: toSolanaWalletConnectors(),
    },
  },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider appId={"clwzg505b0903op0f87p3csm5"} config={privyConfig}>
      {children}
    </PrivyProvider>
  );
}
