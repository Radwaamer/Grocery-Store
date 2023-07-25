document.body.innerHTML=`
<header>
        <div class="container">

            <a href="../home/home.html" class="logo">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Groco</p>
            </a>
    
            <ul class="menu">
                <li><a href="../home/home.html">Home</a></li>
                <li><a href="../shop/shop.html">Shop</a></li>
                <li><a href="../about/about.html">About</a></li>
                <li><a href="../review/review.html">Review</a></li>
                <li><a href="../blog/blog.html">Blog</a></li>
                <li><a href="../contact/contact.html">Contact</a></li>
            </ul>
    
            <div class="icons">
                <i class="fa-solid fa-magnifying-glass" onclick="showMenu()"></i>
                <i class="search fa-solid fa-magnifying-glass" onclick="searchForm()"></i>
                <i class="fa-solid fa-cart-shopping" onclick="shoppingCart()"></i>
                <i class="fa-solid fa-user" onclick="profileLogin()"></i>
            </div>

            <form action="" class="search-form">
                <input type="search" name="search" id="search" placeholder="search here...">
                <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>

            <div class="shopping">

                <div class="items">

                    <div class="item">
                        <img src="../assets/images/home banner/pepper 1.jpg" alt="">
                        <div class="text">
                            <h5>Organic Food</h5>
                            <p>1 X $18.99</p>
                        </div>
                        <p>x</p>
                    </div>

                    <div class="item">
                        <img src="../assets/images/home banner/pepper 1.jpg" alt="">
                        <div class="text">
                            <h5>Organic Food</h5>
                            <p>1 X $18.99</p>
                        </div>
                        <p>x</p>
                    </div>

                    <div class="item">
                        <img src="../assets/images/home banner/pepper 1.jpg" alt="">
                        <div class="text">
                            <h5>Organic Food</h5>
                            <p>1 X $18.99</p>
                        </div>
                        <p>x</p>
                    </div>

                </div>

                <div class="total">
                    <p>Total: <span>56.97</span></p>
                    <button class="main-btn">Checkout Cart</button>
                </div>

            </div>

            <div class="profile">
                <h4>LOGIN NOW</h4>
                <form action="">
                    <input type="email" name="email" id="user-email" placeholder="enter your email">
                    <input type="password" name="password" id="user-password" placeholder="enter your password">
                    <input type="checkbox" name="remember" id="remember">
                    <label for="remember">Remember Me</label>
                    <button type="submit" class="main-btn">Login Now</button>
                </form>
                <p>Forget Password? <a href="">Click Here</a></p>
                <p>Don't Have An Account? <a href="">Create One</a></p>
            </div>

        </div>
    </header>
`


// handle icons
function toggleIcons(icon){
    document.querySelector(`header ${icon}`).classList.toggle("active");
}

function showMenu(){
    toggleIcons(".menu");
};

function searchForm(){
    toggleIcons(".search-form");
};

function shoppingCart(){
    toggleIcons(".shopping");
};

function profileLogin(){
    toggleIcons(".profile");
};

// handle active link
document.querySelectorAll("header .menu li a").forEach((a)=>{
    if(a.href.includes(window.location.pathname)){
        a.classList.add("active");
    }
})