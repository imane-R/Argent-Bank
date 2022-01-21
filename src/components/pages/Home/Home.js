import './Home.css'
import Banner from "./Banner/Banner";
import Security from "./Feature/Security/Security";
import Money from "./Feature/Money/Money";
import Chat from "./Feature/Chat/Chat";
function Home () {
    return <div className='Home'>
       <Banner/>
       <div className='features'>
           <Chat/>
           <Security/>
           <Money/>
       </div>
    </div>
}

export default Home;