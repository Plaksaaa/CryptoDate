import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import HumanAction from '../humanAction/HumanAction';

export const Human = ({ userInfo, imagesArray, humanInd, contract, setImages, setHumanInd }) => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleLike = async (event) => {
    const target = event.target.parentElement.parentElement.parentElement.parentElement;
    target.className += ' liked';
    await delay(1000);
    setHumanInd(humanInd + 1);
    setImages([
      'https://picsum.photos/100/130?sig=' + humanInd,
      'https://picsum.photos/100/130?sig=1' + humanInd,
      'https://picsum.photos/100/130?sig=2' + humanInd
    ]);
  };

  const handleDislike = async (event) => {
    const target = event.target.parentElement.parentElement.parentElement.parentElement;

    target.className += ' disliked';
    await delay(1000);
    setHumanInd(humanInd + 1);
    setImages([
      'https://picsum.photos/100/130?sig=' + humanInd,
      'https://picsum.photos/100/130?sig=1' + humanInd,
      'https://picsum.photos/100/130?sig=2' + humanInd
    ]);
  };

  const images = () => {
    const str = [];
    for (let i = 0; i < imagesArray.length; i++) {
      str.push(
        <Carousel.Item key={i + '_image'}>
          <Card.Img variant="bottom" src={imagesArray[i]} />
        </Carousel.Item>
      );
    }

    return str;
  };

  return (
    <Card style={{ width: '30rem' }}>
      <Carousel>{images()}</Carousel>
      <Card.Header>{userInfo.join(' ')}</Card.Header>
      <Card.Text>
        <HumanAction handleDislike={handleDislike} handleLike={handleLike} contract={contract} />
      </Card.Text>
    </Card>
  );
};
