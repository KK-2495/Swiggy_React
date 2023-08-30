import React, { useContext } from 'react';
import "../Components/AllCss/Home.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';


const Home = () => {
    const router = useNavigate();

    const {state,dispatch} = useContext(AuthContext);

    const logout = () => {
        dispatch({
            type: "Logout"
        })
        router("/login");
    }

  return (
    <>
        <div class="HomePage">
            <div class="navBar">
                <div class="swiggyLogo">
                    <div>
                        <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="swiggy" />
                    </div>
                    <div>
                        <strong>Other</strong>
                        <p> Vashi, Navi Mumbai, Maharashtra, India</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div class="search">
                    <div>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <p>Search</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-percent"></i>
                        <p>Offers <sup>NEW</sup></p>
                    </div>
                    <div>
                        <i class="fa-solid fa-bullseye"></i>
                        <p>Help</p>
                    </div>
                    <div>
                        <i class="fa-regular fa-user"></i>
                        <p id="switchUser" onclick="window.location.href = `./Login.html`">{state?.user?.name}</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>Cart</p>
                    </div>
                    <button id="logout" onClick={logout}>Log out</button>
                </div>
            </div>
            {/* <!-- ******slides***** --> */}
            <div class="foodSlides">
                <div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"
                            alt='' />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
                            alt='' />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym"
                            alt='' />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
                            alt='' />
                    </div>
                </div>
            </div>
            {/* <!-- **********content********** --> */}
            <div class="content">
                <div>
                    <div>
                        <h1>213 restaurants</h1>
                    </div>
                    <div>
                        <div>Relevance</div>
                        <div>Delivery Time</div>
                        <div>Rating</div>
                        <div>Cost: Low to High</div>
                        <div>Cost: High to Low</div>
                        <div>
                            <p>Filters</p>
                            <i class="fa-solid fa-sliders fa-rotate-90"></i>
                        </div>
                    </div>
                </div>

                <div class="restaurants" id="productList">
                     <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/plgs0tyizbcb2z7vrgqk"
                                alt='' />
                            <h3>Dabba Garam (Homely Meals & More)</h3>
                            <p>Home Food, North Indian, Thalis</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.4</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>20 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹150 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>30% off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                <a href="/Restaurant.html">QUICK VIEW</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7bb739d7f6ae8b4ce8ed590765dffd2f"
                                alt='' />
                            <h3>McDonald's</h3>
                            <p>Burgers, Beverages, Cafe, Desserts</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.4</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>16 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹400 FOR TWO</div>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/56c9ab92bd79745fd152a30fa2525426"
                                alt='' />
                            <h3>KFC</h3>
                            <p>Burgers, Biryani, American, Fast Food</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.1</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>21 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹400 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>20% off | Use SWIGGYIT</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n11sccczmnj74iuvfv1o"
                                alt='' />
                            <h3>Gupta Sandwiches & Snacks</h3>
                            <p>Fast Food, Biryani, Snacks, Beverages</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.2</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>19 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹200 FOR TWO</div>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jmbtcyk3wqkt9kw9ss5o"
                                alt='' />
                            <h3>Mansoor Bhai's Lucky</h3>
                            <p>Biryani, Chinese, North Indian, Indian, Tandoor, Mughlai</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.2</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>20 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹500 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>15% off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/f87ny0p8hpeynrv0ycc5"
                                alt='' />
                            <h3>Meraki</h3>
                            <p>Chinese</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.2</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>27 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹500 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>Flat ₹125 off on orders above ₹249</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/91822597693acbea726a2a768c30408e"
                                alt='' />
                            <h3>Oye Kiddan</h3>
                            <p>North Indian</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>3.8</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>37 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹250 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>Flat ₹125 off on orders above ₹249</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wnzhrkqvnkiriqajencb"
                                alt='' />
                            <h3>The Belgian Waffle Co.</h3>
                            <p>Waffle, Desserts, Ice Cream, Beverages</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.3</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>19 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹250 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>20% off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tesnldaw6hkqyep8xj0m"
                                alt='' />
                            <h3>Bhojanam</h3>
                            <p>Thalis, Desserts, Indian, Chinese, Biryani, Deserts</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>3.8</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>0 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹350 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>20% off | Use PARTY</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rodvzvtensfyfkmvdzuv"
                                alt='' />
                            <h3>Navaratna Veg Restaurant</h3>
                            <p>Indian, Chinese, South Indian, Snacks, North Indian</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.4</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>20 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹150 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>FLAT100 off | Use FLATDEAL</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rgck2xvldw4mriw2djyt"
                                alt='' />
                            <h3>Nothing But Chicken</h3>
                            <p>Salads, Fast Food</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.4</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>20 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹150 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>20% off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wizuscbf69y9hhovvy6t"
                                alt='' />
                            <h3>A Bhagat Tarachand (Sanpada)</h3>
                            <p>North Indian, South Indian, Chinese, Beverages, Snacks, Punjabi</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.3</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>40 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹400 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>40% off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/91d6dda411b108965541c16ac1cfe2bc"
                                alt='' />
                            <h3>NIC Ice Creams</h3>
                            <p>Ice Cream, Desserts</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.4</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>20 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹150 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>Get every item under 159</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ujdn6n65xpldnedg7lzp"
                                alt='' />
                            <h3>Sanjay Lunch Home</h3>
                            <p>North Indian, Chinese</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.4</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>30 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹350 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>20% off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vnhnlefakoveqcx8qiht"
                                alt='' />
                            <h3>Genuine Broaster Chicken</h3>
                            <p>Italian, Pan-Asian, North Indian</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.4</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>30 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹1500 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>FLAT100 off | Use FLATDEAL</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ifkcqxqxyt6eqpifpehy"
                                alt='' />
                            <h3>Vishwa Jyot</h3>
                            <p>South Indian</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.4</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>22 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹200 FOR TWO</div>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/s2hluo8nlvigctnz7lcy"
                                alt='' />
                            <h3>Quality Francos</h3>
                            <p>Fast Food, Snacks</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.1</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>10 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹250 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>50% off | Use USE TRY2</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bxhzhxyx3en2y5t1tgof"
                                alt='' />
                            <h3>Blisss</h3>
                            <p>Desserts, Fast Food, Bakery</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.1</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>10 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹300 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>50% off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/82432d7d66dcf2c8065164bd616c59cb"
                                alt='' />
                            <h3>China Bite</h3>
                            <p>Chinese</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.2</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>20 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹250 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>50% off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/0cfd4e26b94c4c780756ab48b5bba7f1"
                                alt='' />
                            <h3>PEETUK</h3>
                            <p>Bengali</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.1</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>20 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹250 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>20% off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e902c6a9f81d35d2a347f2e6666a6462"
                                alt='' />
                            <h3>Starbucks Coffee</h3>
                            <p>Beverages, Cafe, Snacks, Desserts, Bakery, Ice Cream</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.0</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>40 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹350 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>50% off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/am5uzj3ewpz1micqyirx"
                                alt='' />
                            <h3>Chetak Sweet Point Vashi</h3>
                            <p>Sweets, Snacks</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.4</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>10 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹100 FOR TWO</div>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rou1szkzwerakoykk66q"
                                alt='' />
                            <h3>Theobroma</h3>
                            <p>Burgers, Beverages, Cafe, Desserts</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.4</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>20 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹150 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>FLAT100 off | Use FLATDEAL</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/arvmhkqduu91wpxs6sge"
                                alt='' />
                            <h3>Zaara Juice</h3>
                            <p>Juices, Desserts, Fast Food, Ice Cream</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.1</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>18 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹300 FOR TWO</div>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/a0xrblgxfkdrhbjkrlnh"
                                alt='' />
                            <h3>Shabri</h3>
                            <p>South Indian, Indian, Snacks, North Indian, Juices</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.2</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>15 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹250 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>20 % off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jfshpemuiyviy8yhhdhb"
                                alt='' />
                            <h3>Burger 99</h3>
                            <p>Burgers, Chinese</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.4</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>10 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹200 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>40% off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/2a67c5d7e8f1795bf9d92a1e55d0d5eb"
                                alt='' />
                            <h3>Love & Cheesecakes</h3>
                            <p>Desserts</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.4</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>20 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹50 FOR TWO</div>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kiqftpxtksdiotvar8kc"
                                alt='' />
                            <h3>Kshir Sagar</h3>
                            <p>South Indian, Indian, Chinese, Snacks, Juices</p>
                            <div class="rating">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>4.2</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>14 MINS</div>
                                <div>
                                    <i class="fa-solid fa-circle"></i>
                                </div>
                                <div>₹200 FOR TWO</div>
                            </div>
                            <div class="discount">
                                <i class="fa-solid fa-percent"></i>
                                <p>50% off | Use TRYNEW</p>
                            </div>
                            <div class="qView">
                                QUICK VIEW
                            </div>
                        </div>
                    </div> 
                </div>

            </div>
            {/* <!-- ********footer******** --> */}
            <div class="footer">
                <div class="contact">
                    <div>
                        <h3>COMPANY</h3>
                        <p>About Us</p>
                        <p>Team</p>
                        <p>Careers</p>
                        <p>Swiggy Blog</p>
                        <p>Bug Bounty</p>
                        <p>Swiggy One</p>
                        <p>Swiggy Corporate</p>
                        <p>Swiggy Instamart</p>
                        <p>Swiggy Genie</p>
                    </div>
                    <div>
                        <h3>CONTACT</h3>
                        <p>Help & Support</p>
                        <p>Partner with us</p>
                        <p>Ride with us</p>
                    </div>
                    <div>
                        <h3>LEGAL</h3>
                        <p>Terms & Conditions</p>
                        <p>Refund & Cancellation</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>Offer Terms</p>
                        <p>Phishing & Fraud</p>
                        <p>Corporate - Swiggy Money Codes Terms and Conditions</p>
                        <p>Corporate - Swiggy Discount Voucher Terms and Conditions</p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                            alt='' />
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                            alt='' />
                    </div>
                </div>
                <div>
                    <div>
                        <h3>WE DELIVER TO</h3>
                    </div>
                    <div class="cities">
                        <div>
                            <p>Abohar</p>
                            <p>Adilabad</p>
                            <p>Adityapur</p>
                            <p>Adoni</p>
                            <p>Agartala</p>
                            <p>Agra</p>
                            <p>Ahmedabad</p>
                        </div>
                        <div>
                            <p>Dehradun</p>
                            <p>Dehri</p>
                            <p>Delhi</p>
                            <p>Deoghar</p>
                            <p>Deoria-city</p>
                            <p>Dewas</p>
                            <p>Dhanbad</p>
                        </div>
                        <div>
                            <p>Khanna</p>
                            <p>Kharagpur</p>
                            <p>Kishanganj</p>
                            <p>Kishangarh</p>
                            <p>Kochi</p>
                            <p>Kodaikanal</p>
                            <p>Kollam</p>
                        </div>
                        <div>
                            <p>Purulia</p>
                            <p>Pusad</p>
                            <p>Puttur</p>
                            <p>Rae-Bareli</p>
                            <p>Raghunathpur</p>
                            <p>Raichur</p>
                        </div>
                    </div>
                </div>
                <div class="footerEnd">
                    <div class="swiggy">
                        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
                            alt='' />
                    </div>
                    <div class="copyright">
                        © 2023 Swiggy
                    </div>
                    <div class="connections">
                        <div>
                            <i class="fa-brands fa-facebook-f fa-2x"></i>
                            <i class="fa-brands fa-pinterest fa-2x"></i>
                            <i class="fa-brands fa-instagram fa-2x"></i>
                            <i class="fa-brands fa-twitter fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Home;