import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { createConfig, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { mainnet } from "viem/chains";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import DashBoardHome from "./Pages/dashboard/Home";
import DashboardLayout from "./Layouts/DashboardLayout";
import Logout from "./Pages/dashboard/Logout";
import Notifications from "./Pages/dashboard/Notifications";
import Transactions from "./Pages/dashboard/Transactions";
import Cards from "./Pages/dashboard/Cards";
import Fund from "./Pages/dashboard/Fund";
import CreateInvoice from "./Pages/dashboard/Create-Invoice";

const config = createConfig({
  chains: [mainnet],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
  },
});

const queryClient = new QueryClient();


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Home />),
      children: []
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "home",
          element: (
            <DashBoardHome />
          )
        },
        {
          path: "fund-wallet",
          element: (
            <Fund />
          )
        },
        {
          path: "invoice",
          children: [
            {
              path: "create",
              element: (
                <CreateInvoice />
              )
            },
          ]
        },
        {
          path: "cards-and-receipts",
          element: (
            <Cards />
          )
        },
        {
          path: "transactions",
          element: (
            <Transactions />
          )
        },
        {
          path: "notifications",
          element: (
            <Notifications />
          )
        },
        {
          path: "settings",
          children: [
            {
              path: "profile",
              element: (
                <div>Profile</div>
              )
            },
            {
              path: "password",
              element: (
                <div>Password</div>
              )
            }
          ]
        },
        {
          path: "logout",
          element: (
            <Logout />
          )
        }
      ]
    },
  ]);
  return (
    <main>
      <DynamicContextProvider
        settings={{
          // Find your environment id at https://app.dynamic.xyz/dashboard/developer
          environmentId: "9c84d852-7fca-4466-904b-cb589ebe4aca",
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <DynamicWagmiConnector>
              <RouterProvider router={router} />
            </DynamicWagmiConnector>
          </QueryClientProvider>
        </WagmiProvider>
      </DynamicContextProvider>
    </main>
  )
}
