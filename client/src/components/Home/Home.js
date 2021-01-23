import React from 'react';


class Home extends React.Component {
  state = {

  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async handleSubmit(e) {

  }


  render() {
    // <!-- start landing page -->
    <div className="landing-page">
      <div className="overlay"></div>
      <div className="header-area">
        <img src="imgs/log.png" alt="log"/>
          <div className="logo">Matbikhi</div>
          <p>Welcom <b>Mohammed</b></p>
          <ul className="links">
            <li><a href="#" data-section=".landing-page" className="active">Home</a></li>
            <li><a href="#" data-section=".recpies">Recpies</a></li>
            <li><a href="#" data-section=".chefs">Chefs</a></li>
            <li><a href="#" className="logout">Logout</a></li>
          </ul>
        </div>
        <div className="intro">
          <h1>Matbikhi</h1>
          <p>Browse recipes‍,add to your menu and more.</p>
          <h2>Delicious</h2>
        </div>
      </div>
      // <!-- end landing page -->

    // <!-- strat nav bullets -->
    <div className="nav-bullets">
        <div className="bullets" data-section=".landing-page">
          <div className="tooltip">Home</div>
        </div>
        <div className="bullets" data-section=".recpies">
          <div className="tooltip">Recpies</div>
        </div>
        <div className="bullets" data-section=".chefs">
          <div className="tooltip">Chefs</div>
        </div>
      </div>
      // <!-- end nav bullets -->

    // <!-- strat Recpies -->
    <div className="recpies">
        <div className="container">
          <div className="info-box">
            <h2>Recpies</h2>
          </div>
          <div className="grills">
            <h3 className="types">Grills</h3>
            <div className="recpies-types">
              <div className="block">
                <img className="block-img" src="imgs/grill1.jpg" alt="">
                  <h3>grilled chicken</h3>
                  <p>One of the very distinctive double flavor methods in preparing chicken.</p>
                  <div className="imgs-box">
                    <a className="like" href=""><img className="show1" className="show1" src="imgs/like.png" alt=""></a>
                      <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                    <div className="block">
                      <img className="block-img" src="imgs/grill2.jpg" alt="">
                        <h3>Shawarma</h3>
                        <p>Chicken shawarma is one of the most beloved dishes of all people.</p>
                        <div className="imgs-box">
                          <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                            <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                          <div className="block">
                            <img className="block-img" src="imgs/MANDE.jpg" alt="">
                              <h3>Mandi</h3>
                              <p>Mandi is a common dish in all Arab countries.</p>
                              <div className="imgs-box">
                                <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                  <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                <div className="block">
                                  <img className="block-img" src="imgs/burger_beauty.jpg" alt="">
                                    <h3>beef burger</h3>
                                    <p>beef burger sandwich with a wonderful taste that everyone loves</p>
                                    <div className="imgs-box">
                                      <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                        <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                    </div>
            </div>
                                  <div className="clearfix"></div>
                                  <div className="pastries">
                                    <h3 className="types">Pastries</h3>
                                    <div className="recpies-types">
                                      <div className="block">
                                        <img className="block-img" src="imgs/Pastries1.jpg" alt="">
                                          <h3>pizza</h3>
                                          <p>One of the main foods people prefer to prepare at home on the weekends</p>
                                          <div className="imgs-box">
                                            <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                              <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                            <div className="block">
                                              <img className="block-img" src="imgs/Pastries3.jpg" alt="">
                                                <h3>Shami plate</h3>
                                                <p>one of the most famous pastries ,and what distinguishes it is that it is prepare with fresh
                            minced meat.</p>
                                                <div className="imgs-box">
                                                  <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                    <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                  <div className="block">
                                                    <img className="block-img" src="imgs/Pastries2.jpg" alt="">
                                                      <h3>Mozzarella cheese pies</h3>
                                                      <p>It is distinguished by its delicious flavor,and its delicious aroma.</p>
                                                      <div className="imgs-box">
                                                        <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                          <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                        <div className="block">
                                                          <img className="block-img" src="imgs/SABANKH.jpg" alt="">
                                                            <h3>Spinach pies</h3>
                                                            <p>Shami eaters delicious and easy to prepare.</p>
                                                            <div className="imgs-box">
                                                              <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                            </div>
            </div>
                                                          <div className="clearfix"></div>
                                                          <div className="soups">
                                                            <h3 className="types">Soups</h3>
                                                            <div className="recpies-types">
                                                              <div className="block">
                                                                <img className="block-img" src="imgs/0addes soup.jpg" alt="">
                                                                  <h3>Lentil Soup</h3>
                                                                  <p>Lentil soup is one of the easy and delicious cooking recipes</p>
                                                                  <div className="imgs-box">
                                                                    <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                      <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                    <div className="block">
                                                                      <img className="block-img" src="imgs/soup1.jpg" alt="">
                                                                        <h3>Vegetable soup</h3>
                                                                        <p>We offer you a vegetable, healthy and light soup.</p>
                                                                        <div className="imgs-box">
                                                                          <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                            <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                          <div className="block">
                                                                            <img className="block-img" src="imgs/soup2.jpg" alt="">
                                                                              <h3>Lisan Asfour Soup</h3>
                                                                              <p>Lisan Al Asfour Soup..For lovers of hot appetizers with special varieties of pasta.</p>
                                                                              <div className="imgs-box">
                                                                                <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                  <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                <div className="block">
                                                                                  <img className="block-img" src="imgs/soup3.jpg" alt="">
                                                                                    <h3>Bulgur soup</h3>
                                                                                    <p>Bulgur Vegetable Soup for lunch A useful and nutritious soup.</p>
                                                                                    <div className="imgs-box">
                                                                                      <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                        <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                    </div>
            </div>
                                                                                  <div className="clearfix"></div>
                                                                                  <div className="seafood">
                                                                                    <h3 className="types">Seafood</h3>
                                                                                    <div className="recpies-types">
                                                                                      <div className="block">
                                                                                        <img className="block-img" src="imgs/seafood5.jpg" alt="">
                                                                                          <h3>Fried Fish</h3>
                                                                                          <p>Fish is one of the most beautiful seafood..we offer you fried fish.</p>
                                                                                          <div className="imgs-box">
                                                                                            <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                              <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                            <div className="block">
                                                                                              <img className="block-img" src="imgs/seafood2.jpg" alt="">
                                                                                                <h3>shrimp</h3>
                                                                                                <p>one of the oriental recipes presented to family members due to its distinctive taste and
                            health benefit.</p>
                                                                                                <div className="imgs-box">
                                                                                                  <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                                    <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                                  <div className="block">
                                                                                                    <img className="block-img" src="imgs/seafood3.jpg" alt="">
                                                                                                      <h3>Oysters</h3>
                                                                                                      <p>Oysters are one of the types of seafood because of their distinct taste.</p>
                                                                                                      <div className="imgs-box">
                                                                                                        <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                                          <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                                        <div className="block">
                                                                                                          <img className="block-img" src="imgs/seafood4.jpeg" alt="">
                                                                                                            <h3>Japanese sushi</h3>
                                                                                                            <p>One of the most delicious dishes, because of its delicious taste and great nutritional
                                                                                                            benefits.
                        </p>
                                                                                                            <div className="imgs-box">
                                                                                                              <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                                                <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                                            </div>
            </div>
                                                                                                          <div className="clearfix"></div>
                                                                                                          <div className="popular-dishes">
                                                                                                            <h3 className="types">Popular dishes</h3>
                                                                                                            <div className="recpies-types">
                                                                                                              <div className="block">
                                                                                                                <img className="block-img" src="imgs/makloba.jpg" alt="">
                                                                                                                  <h3>Maqluba</h3>
                                                                                                                  <p>Famous Palestinian food With rice and meat.</p>
                                                                                                                  <div className="imgs-box">
                                                                                                                    <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                                                      <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                                                    <div className="block">
                                                                                                                      <img className="block-img" src="imgs/KABSA.jpg" alt="">
                                                                                                                        <h3>Alkabsa</h3>
                                                                                                                        <p>Famous Saudi food With rice and sheep meat.</p>
                                                                                                                        <div className="imgs-box">
                                                                                                                          <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                                                            <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                                                          <div className="block">
                                                                                                                            <img className="block-img" src="imgs/maftol.jpg" alt="">
                                                                                                                              <h3>Maftoul</h3>
                                                                                                                              <p>Famous Palestinian food With flour, pumpkin and chicken meat</p>
                                                                                                                              <div className="imgs-box">
                                                                                                                                <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                                                                  <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                                                                <div className="block">
                                                                                                                                  <img className="block-img" src="imgs/Popular1.jpeg" alt="">
                                                                                                                                    <h3>Al-Musakhan</h3>
                                                                                                                                    <p>Al-Musakhan is a popular Arabic dish, made in several Arab countries, with some differences.
                        </p>
                                                                                                                                    <div className="imgs-box">
                                                                                                                                      <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                                                                        <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                                                                      <div className="block">
                                                                                                                                        <img className="block-img" src="imgs/Popular2.jpg" alt="">
                                                                                                                                          <h3>The Algerian tagine</h3>
                                                                                                                                          <p>The Algerian tagine is one of the most famous Algerian meals, with chicken and olives.
                        </p>
                                                                                                                                          <div className="imgs-box">
                                                                                                                                            <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                                                                              <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                                                                          </div>
            </div>
                                                                                                                                        <div className="clearfix"></div>
                                                                                                                                        <div className="sweets">
                                                                                                                                          <h3 className="types">sweets</h3>
                                                                                                                                          <div className="recpies-types">
                                                                                                                                            <div className="block">
                                                                                                                                              <img className="block-img" src="imgs/sweet2.jpg" alt="">
                                                                                                                                                <h3>Dark Chocolate Travel Cake</h3>
                                                                                                                                                <p>Dark Chocolate Travel Cake...Discover easy ways to prepare delicious Truffle Cake recipes.
                        </p>
                                                                                                                                                <div className="imgs-box">
                                                                                                                                                  <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                                                                                    <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                                                                                  <div className="block">
                                                                                                                                                    <img className="block-img" src="imgs/sweet1.jpg" alt="">
                                                                                                                                                      <h3>Macarons</h3>
                                                                                                                                                      <p>A type of French sweets, macarons are distinguished by their appetizing shape, colors and
                            different types.</p>
                                                                                                                                                      <div className="imgs-box">
                                                                                                                                                        <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                                                                                          <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                                                                                        <div className="block">
                                                                                                                                                          <img className="block-img" src="imgs/sweet3.jpg" alt="">
                                                                                                                                                            <h3>cheese cake</h3>
                                                                                                                                                            <p>Prepare the most delicious and tasty desserts on your guest trip.</p>
                                                                                                                                                            <div className="imgs-box">
                                                                                                                                                              <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                                                                                                <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                                                                                              <div className="block">
                                                                                                                                                                <img className="block-img" src="imgs/KAK.jpg" alt="">
                                                                                                                                                                  <h3>Cakes</h3>
                                                                                                                                                                  <p>One of the most famous Palestinian sweets.</p>
                                                                                                                                                                  <div className="imgs-box">
                                                                                                                                                                    <a className="like" href=""><img className="show1" src="imgs/like.png" alt=""></a>
                                                                                                                                                                      <a href="#"><img className="show" src="imgs/botton1.png" alt=""></a>
                        </div>
                    </div>
                                                                                                                                                                  </div>
            </div>
                                                                                                                                                                <div className="clearfix"></div>
                                                                                                                                                              </div>
                                                                                                                                                            </div>
                                                                                                                                                            <!-- end Recpies -->

    {/* <!-- strat Chefs --> */}
    <div className="chefs">
                                                                                                                                                              <div className="container">
                                                                                                                                                                <h2>Chefs</h2>
                                                                                                                                                                <div className="images-chefs">
                                                                                                                                                                  <div className="image-one">
                                                                                                                                                                    <img src="imgs/imgch.jpg" alt="Omar">
                                                                                                                                                                      <h3>Omar</h3>
                </div>
                                                                                                                                                                    <div className="image-one">
                                                                                                                                                                      <img src="imgs/imgch.jpg" alt="image two">
                                                                                                                                                                        <h3>image two</h3>
                </div>
                                                                                                                                                                      <div className="image-one">
                                                                                                                                                                        <img src="imgs/imgch1.jpg" alt="image three">
                                                                                                                                                                          <h3>image three</h3>
                </div>
                                                                                                                                                                        <div className="image-one">
                                                                                                                                                                          <img src="imgs/imgch.jpg" alt="image four">
                                                                                                                                                                            <h3>image four</h3>
                </div>
                                                                                                                                                                          <div className="image-one">
                                                                                                                                                                            <img src="imgs/imgch1.jpg" alt="image five">
                                                                                                                                                                              <h3>image five</h3>
                </div>
                                                                                                                                                                            <div className="image-one">
                                                                                                                                                                              <img src="imgs/imgch1.jpg" alt="Nada">
                                                                                                                                                                                <h3>Nada</h3>
                </div>
                                                                                                                                                                              <div className="image-one">
                                                                                                                                                                                <img src="imgs/imgch.jpg" alt="Mohammed">
                                                                                                                                                                                  <h3>Mohammed</h3>
                </div>
                                                                                                                                                                                <div className="image-one">
                                                                                                                                                                                  <img src="imgs/imgch.jpg" alt="Ali">
                                                                                                                                                                                    <h3>Ali</h3>
                </div>
                                                                                                                                                                                  <div className="image-one">
                                                                                                                                                                                    <img src="imgs/imgch1.jpg" alt="Noor">
                                                                                                                                                                                      <h3>Noor</h3>
                </div>
                                                                                                                                                                                    <div className="image-one">
                                                                                                                                                                                      <img src="imgs/imgch.jpg" alt="Ibrahem">
                                                                                                                                                                                        <h3>Ibrahem</h3>
                </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                    <div className="clearfix"></div>
                                                                                                                                                                                  </div>
                                                                                                                                                                                </div>
                                                                                                                                                                                <!-- end Chefs -->

    {/* <!-- strat footer --> */}
    <div className="footer">
                                                                                                                                                                                  <div className="creat">
                                                                                                                                                                                    <div className="menurecpies">
                                                                                                                                                                                      <h3>Recpies types</h3>
                                                                                                                                                                                      <ul>
                                                                                                                                                                                        <li data-section=".grills">Grills</li>
                                                                                                                                                                                        <li data-section=".pastries">Pastries</li>
                                                                                                                                                                                        <li data-section=".soups">Soups</li>
                                                                                                                                                                                        <li data-section=".seafood">Seafood</li>
                                                                                                                                                                                        <li data-section=".popular-dishes">Popular dishes</li>
                                                                                                                                                                                        <li data-section=".sweets">sweets</li>
                                                                                                                                                                                      </ul>
                                                                                                                                                                                    </div>
            Copyright © 2020 Mohammed Al Zaanin
            <a href="https://www.facebook.com/" target="_blank"><img src="imgs/Facebook.png" alt=""></a>
                                                                                                                                                                                      <a href="https://twitter.com/" target="_blank"><img src="imgs/twitter.png" alt=""></a>
                                                                                                                                                                                        <a href="https://www.google.com/intl/ar/gmail/about/" target="_blank"><img src="imgs/gmail.png" alt=""></a>
        </div>
    </div>
                                                                                                                                                                                      <!-- end footer -->
    {/* <script src="js/index.js"></script> */}
  }
}

export default Home;
