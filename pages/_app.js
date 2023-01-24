import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/globals.css'
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { polygonMumbai, hardhat } from "wagmi/chains";
import { useEffect } from 'react';

// const alchemyId = process.env.ALCHEMY_ID;
const alchemyId = 'IJtnJ4HYZXb0fXRm8grPnrCFGnyL7Z4X';

// Choose which chains you'd like to show
const chains = [ polygonMumbai, hardhat];

const client = createClient(
  getDefaultClient({
    appName: "VoteBlock",
    alchemyId,
    chains,
  }),
);

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <div  className='h-screen bg-vote-50 pb-12'>
          <Nav />
          <div className='w-11/12 md:w-6/12 h-full mx-auto pt-12'>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ConnectKitProvider>
    </WagmiConfig>
    )
}
