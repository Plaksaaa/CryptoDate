/* eslint-disable prettier/prettier */
import 'react-toastify/dist/ReactToastify.css';
import './App.styles.css';

import { Mantle } from '@thirdweb-dev/chains';
import { metamaskWallet, ThirdwebProvider } from '@thirdweb-dev/react';
import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CryptoDate from './CryptoDate';


export const App: FC = () => {
  return (
      <ThirdwebProvider activeChain={Mantle} supportedWallets={[metamaskWallet()]}>
        <Router>
          <Routes>
            <Route path={"/"} element={<CryptoDate />}></Route>
          </Routes>
        </Router>
      </ThirdwebProvider>
  );
};
