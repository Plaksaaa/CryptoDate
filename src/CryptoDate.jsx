import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CryptoDate.css';

import { useAddress, useContract, useMetamask } from '@thirdweb-dev/react';
import { useState } from 'react';

import { Human } from './human/Human';

function CryptoDate() {
  const { contract, isLoading, error } = useContract(
    '{{0xb413df01580659F671471956e9D2fAe989d1dcd3}}'
  );

  const [images, setImages] = useState([
    'https://picsum.photos/100/130?sig=1',
    'https://picsum.photos/100/130?sig=2',
    'https://picsum.photos/100/130?sig=3'
  ]);

  const humans = [
    ['Natali Portman', 'Female', '25'],
    ['David Gueta', 'Male', '45'],
    ['Kevin MC', 'Male', '60']
  ];
  const address = useAddress();

  const [humanInd, setHumanInd] = useState(0);

  const connectWithMetamask = useMetamask();

  return (
    <div>
      {!address ? (
        <button className="ConnectBtn" onClick={() => connectWithMetamask()}>
          Connect Metamask
        </button>
      ) : (
        <p>My address is {address}</p>
      )}

      <div className="App MainScreen">
        <Human
          key={humanInd < humans.length ? humans[humanInd][0] : setHumanInd(0)}
          userInfo={humanInd < humans.length ? humans[humanInd] : setHumanInd(0)}
          imagesArray={images}
          setImages={setImages}
          contract={contract}
          humanInd={humanInd}
          setHumanInd={setHumanInd}
        />
      </div>
    </div>
  );
}

export default CryptoDate;
