import './HumanAction.css';

import { Web3Button } from '@thirdweb-dev/react';
import Image from 'react-bootstrap/Image';

function HumanAction({ handleLike, handleDislike, contract }) {
  return (
    <div className="Actions">
      <Web3Button
        contractAddress={contract}
        action={(contract) => {
          handleDislike();
          contract.erc721.claim(1);
        }}
        theme="dark">
        <Image width={50} height={50} src="/decline.png" roundedCircle />
      </Web3Button>
      <Web3Button
        contractAddress={contract}
        action={(contract) => {
          handleLike();
          contract.erc721.claim(1);
        }}
        theme="dark">
        <Image width={50} height={50} src="/like.png" roundedCircle />
      </Web3Button>

      {/* <button className="Action" onClick={handleDislike}>
        <Image width={50} height={50} src="/decline.png" roundedCircle />
      </button>
      <button className="Action" onClick={handleLike}>
        <Image width={50} height={50} src="/like.png" roundedCircle />
      </button> */}
    </div>
  );
}

export default HumanAction;
