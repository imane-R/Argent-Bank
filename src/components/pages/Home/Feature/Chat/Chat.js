import Feature from "../Feature";
import ChatLogo from "./icon-chat.png";
import './Chat.css'
function Chat() {
    return <div className='Chat'>
        <Feature logo={ChatLogo} alt='Chat' title='You are our #1 priority' description='Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.' />
    </div>
}
export default Chat;