import Navbar from  "./Components/Navbar"
import Categories from "./Components/Categories"
import Sale from "./Components/Sale"
import Recommended from "./Components/Recommended"
import Title from "./Components/Title"
import Popular from "./Components/Popular"
import Footer from "./Components/Footer"


function App(){
    return(
        <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Sale></Sale>
    <Recommended></Recommended>
    <Title></Title>
    <Popular></Popular>
    <Footer></Footer>
</div>
    )
}

export default App