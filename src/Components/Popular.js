import one from "../Assets/images/1.jpg"
import two from "../Assets/images/2.jpg"
import three from "../Assets/images/3.jpg"
import four from "../Assets/images/4.jpg"



function Popular() {
    return (
        <div class="recomment">
            <h3>Most Popular</h3>
            <p>Pick the best fit</p>
            <div class="recomment__1">

                <div class="coursecard">
                    <img src={one}></img>
                    <h4>2023 Python Data visualisation Materclass</h4>
                    <p>col Steel</p>
                    <p>499 <del>999</del></p>
                </div>
                <div class="coursecard">

                    <img src={two}></img>
                    <h4>Basic advance programming</h4>
                    <p>col Steel</p>
                    <p>499 <del>999</del></p>
                </div>
                <div class="coursecard">

                    <img src={three}></img>
                    <h4>Web development Bootcamp 2023</h4>
                    <p>col Steel</p>
                    <p>499 <del>999</del></p>
                </div>
                <div class="coursecard">

                    <img src={four}></img>
                    <h4>Master UI/UX designing with Figma</h4>
                    <p>col Steel</p>
                    <p>499 <del>999</del></p>
                </div>
                <div class="coursecard">

                    <img src={one}></img>
                    <h4>2023 Python Data visualisation Materclass</h4>
                    <p>col Steel</p>
                    <p>499 <del>999</del></p>
                </div>
                <div class="coursecard">

                    <img src={three}></img>
                    <h4>2023 Python Data visualisation Materclass</h4>
                    <p>col Steel</p>
                    <p>499 <del>999</del></p>
                </div>
                <div class="coursecard">

                    <img src={two}></img>
                    <h4>2023 Python Data visualisation Materclass</h4>
                    <p>col Steel</p>
                    <p>499 <del>999</del></p>
                </div>
                <div class="coursecard">

                    <img src={one}></img>
                    <h4>2023 Python Data visualisation Materclass</h4>
                    <p>col Steel</p>
                    <p>499 <del>999</del></p>
                </div>





            </div>
        </div>
    )
}

export default Popular