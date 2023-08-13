import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Manage from "../components/sections-manage/Manage"
import StickBar from "../components/sections-stick-bar/StickBar"
import Urbancard from "../components/sections-urban-card/Urbancard"

const Home = () => {
  return (
    <div>
        <Header/>
        <StickBar/>
        <Urbancard/>
        <Manage/>
        <Footer/>
    </div>
  )
}

export default Home