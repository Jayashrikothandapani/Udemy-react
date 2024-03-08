import sale from "../Assets/images/sale.jpg"



function Sale(){
    return(
        <div class="sale">
        <img src={sale} alt="sale image"></img>
        <div class="saleimage__offer">
            <h2>Udemy Flash Sale! 24 hours to Sale</h2>
            <p>Get the top courses for just 499. Just one day to save but a lifetime learn</p>
        </div>
    </div>
    )
}
export default Sale