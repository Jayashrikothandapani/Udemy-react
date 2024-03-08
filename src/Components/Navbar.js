function Navbar() {
    return (
        <div class="header">
            <div class="header__1">
                <h1>Udemy</h1>
            </div>
            <div class="header__2">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input class="header__input" placeholder="Search for anything here Tech, Business,..."></input>
            </div>
            <div class="header__3">
                <p>Courses</p>
                <div class="mylearning">
                    <p>My learning</p>
                    <div class="mylearning__popup">
                        <p>You didnot purchase anything else</p>
                    </div>
                </div>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-bell"></i>
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="menubar">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    )
}
export default Navbar