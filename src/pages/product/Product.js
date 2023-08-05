import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGameDetail } from '../../actions/gamesActions';

const Product = () => {
  // const game = {
  //   title: 'Counter-Strike - GO', imgUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1631908705', description: 'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).',
  //   allReviews: {
  //     summary: 'Positive',
  //     reviewCount: '56798',
  //     ratingValue: 9
  //   },
  //   price: "Free to Play"

  // }
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const game = useSelector(state => state.gameDetailsReducer);
  console.log(game)
  useEffect(() => {
    dispatch(getGameDetail(id));
  },[]);

  const cancelHandler = () => {
    navigate('/');
  }

  return (
    <div className='product-container'>
      {!game && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
      {game &&
        <>
          <div className='left-sec'>
            <div className='loc'>
              <span>Games</span><span>/</span><span className='last-s'>{game.title}</span>
            </div>
            <img src={game.imgUrl} className='game-img' />
          </div>
          <div className='right-sec'>
            <h1>{game.title}</h1>
            <p className='desc'>{game.description}</p>
            <div className='rate'>
              <div className='star-des'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              {/* <p>({game.allReviews.reviewCount} total reviews)</p> */}
              <p><span>Rating: {game.allReviews.summary} </span></p>
            </div>
            <div className='price-know'>
              <p>{game.price}</p>
            </div>
            <div className='buttons'>
              <Link className='proceed' to={game.publisher.link}>Buy Now</Link>
              <button className='cancel' onClick={cancelHandler}>Go Back</button>
            </div>
          </div>
        </>
      }

    </div>
  )
}

export default Product;