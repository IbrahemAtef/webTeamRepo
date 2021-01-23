import React from 'react';
import log from '../../imgs/log.png';
import like from '../../imgs/like.png';
import button1 from '../../imgs/botton1.png';
import Pastries1 from '../../imgs/Pastries1.jpg';
import grill1 from '../../imgs/grill1.jpg';
import soup from '../../imgs/soup.jpg';
import sweet1 from '../../imgs/sweet1.jpg';
import seafood1 from '../../imgs/seafood1.jpg';
import makloba from '../../imgs/makloba.jpg';
import imgch from '../../imgs/imgch.jpg';
import Facebook from '../../imgs/Facebook.png';
import twiiter from '../../imgs/twitter.png';
import gmail from '../../imgs/gmail.png';
import axios from 'axios';

class Home extends React.Component {
  state = {
    recipes : []
  };

  componentDidMount() {
    this.getAllRecipes();
  }
  
  
  getAllRecipes() {
    axios.get('/api/recipes/')
    .then((response)=>{
      this.setState({
        recipes : response.data
      })
    })
    .catch((err)=> {
      console.log(err);
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async handleSubmit(e) {}

  render() {
    return (
      <div>
        {/* <!-- start landing page --> */}
        <div className='landing-page2'>
          <div className='overlay'></div>
          <div className='header-area'>
            <img src={log} alt='log' />
            <div className='logo'>Matbikhi</div>
            <p style={{paddingTop : 1 + '%'}}>
              Welcom <b>Mohammed</b>
            </p>
            <ul className='links' style={{paddingTop: 1.5 + '%'}}>
              <li>
                <a href='#' data-section='.landing-page'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' data-section='.recpies'>
                  Recpies
                </a>
              </li>
              <li>
                <a href='#' data-section='.chefs'>
                  Chefs
                </a>
              </li>
              <li>
                <a href='#' className='logout' onClick={()=> {
                  localStorage.removeItem('token');
                  this.props.history.push('/');
                }}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <div className='intro'>
            <h1>Matbikhi</h1>
            <p>Browse recipes‍,add to your menu and more.</p>
            <h2>Delicious</h2>
          </div>
        </div>
        {/* <!-- end landing page --> */}

        {/* <!-- strat nav bullets --> */}
        <div className='nav-bullets2'>
          <div className='bullets' data-section='.landing-page'>
            <div className='tooltip'>Home</div>
          </div>
          <div className='bullets' data-section='.recpies'>
            <div className='tooltip'>Recpies</div>
          </div>
          <div className='bullets' data-section='.chefs'>
            <div className='tooltip'>Chefs</div>
          </div>
        </div>
        {/* <!-- end nav bullets --> */}

        {/* <!-- strat Recpies --> */}
        <div className='recpies'>
          <div className='container'>
            <div className='info-box'>
              <h2>Recpies</h2>
            </div>
            <div className='grills'>
              <h3 className='types'>Grills</h3>
              <div className='recpies-types'>
                <div className='block'>
                  <img className='block-img' src={grill1} alt='grill' />
                  <h3>grilled chicken</h3>
                  <p>
                    One of the very distinctive double flavor methods in
                    preparing chicken.
                  </p>
                  <div className='imgs-box'>
                    <a className='like' href=''>
                      <img
                        className='show1'
                        className='show1'
                        src={like}
                        alt='like'
                      />
                    </a>
                    <a href='#'>
                      <img className='show' src={button1} alt='show' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='clearfix'></div>
            <div className='pastries'>
              <h3 className='types'>Pastries</h3>
              <div className='recpies-types'>
                <div className='block'>
                  <img
                    className='block-img'
                    src={Pastries1}
                    alt='pastries'
                  />
                  <h3>pizza</h3>
                  <p>
                    One of the main foods people prefer to prepare at home on
                    the weekends
                  </p>
                  <div className='imgs-box'>
                    <a className='like' href=''>
                      <img className='show1' src={like} alt='like' />
                    </a>
                    <a href='#'>
                      <img className='show' src={button1} alt='show' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='clearfix'></div>
            <div className='soups'>
              <h3 className='types'>Soups</h3>
              <div className='recpies-types'>
                <div className='block'>
                  <img
                    className='block-img'
                    src={soup}
                    alt='soup'
                  />
                  <h3>Lentil Soup</h3>
                  <p>
                    Lentil soup is one of the easy and delicious cooking recipes
                  </p>
                  <div className='imgs-box'>
                    <a className='like' href=''>
                      <img className='show1' src={like} alt='like' />
                    </a>
                    <a href='#'>
                      <img className='show' src={button1} alt='show' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='clearfix'></div>
            <div className='seafood'>
              <h3 className='types'>Seafood</h3>
              <div className='recpies-types'>
                <div className='block'>
                  <img
                    className='block-img'
                    src={seafood1}
                    alt='seafood'
                  />
                  <h3>Fried Fish</h3>
                  <p>
                    Fish is one of the most beautiful seafood..we offer you
                    fried fish.
                  </p>
                  <div className='imgs-box'>
                    <a className='like' href=''>
                      <img className='show1' src={like} alt='like' />
                    </a>
                    <a href='#'>
                      <img className='show' src={button1} alt='show' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='clearfix'></div>
            <div className='popular-dishes'>
              <h3 className='types'>Popular dishes</h3>
              <div className='recpies-types'>
                <div className='block'>
                  <img className='block-img' src={makloba} alt='makloba' />
                  <h3>Maqluba</h3>
                  <p>Famous Palestinian food With rice and meat.</p>
                  <div className='imgs-box'>
                    <a className='like' href=''>
                      <img className='show1' src={like} alt='like' />
                    </a>
                    <a href='#'>
                      <img className='show' src={button1} alt='show' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='clearfix'></div>
            <div className='sweets'>
              <h3 className='types'>sweets</h3>
              <div className='recpies-types'>
                <div className='block'>
                  <img className='block-img' src={sweet1} alt='sweet' />
                  <h3>Dark Chocolate Travel Cake</h3>
                  <p>
                    Dark Chocolate Travel Cake...Discover easy ways to prepare
                    delicious Truffle Cake recipes.
                  </p>
                  <div className='imgs-box'>
                    <a className='like' href=''>
                      <img className='show1' src={like} alt='like' />
                    </a>
                    <a href='#'>
                      <img className='show' src={button1} alt='show' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='clearfix'></div>
          </div>
        </div>
        {/* <!-- end Recpies --> */}

        {/* <!-- strat Chefs --> */}
        <div className='chefs'>
          <div className='container'>
            <h2>Chefs</h2>
            <div className='images-chefs'>
              <div className='image-one'>
                <img src={imgch} alt='cheif' />
                <h3>Omar</h3>
              </div>
            </div>
            <div className='clearfix'></div>
          </div>
        </div>
        {/* <!-- end Chefs --> */}

        {/* <!-- strat footer --> */}
        <div className='footer'>
          <div className='creat'>
            <div className='menurecpies'>
              <h3>Recpies types</h3>
              <ul>
                <li data-section='.grills'>Grills</li>
                <li data-section='.pastries'>Pastries</li>
                <li data-section='.soups'>Soups</li>
                <li data-section='.seafood'>Seafood</li>
                <li data-section='.popular-dishes'>Popular dishes</li>
                <li data-section='.sweets'>sweets</li>
              </ul>
            </div>
            Copyright © 2020 Mohammed Al Zaanin
            <a href='https://www.facebook.com/' target='_blank'>
              <img src={Facebook} alt='facebook' />
            </a>
            <a href='https://twitter.com/' target='_blank'>
              <img src={twiiter} alt='twitter' />
            </a>
            <a
              href='https://www.google.com/intl/ar/gmail/about/'
              target='_blank'
            >
              <img src={gmail} alt='gmail' />
            </a>
          </div>
        </div>
        {/* <!-- end footer --> */}
        {/* <script src="js/index.js"></script> */}
      </div>
    );
  }
}

export default Home;
