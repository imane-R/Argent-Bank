import Feature from "../Feature";
import SecurityLogo from "./icon-security.png";
import './Security.css'
function Security() {
    return <div className='Security'>
        <Feature logo={SecurityLogo} alt='Security' title='Security you can trust' description=' We use top of the line encryption to make sure your data and money is always safe.' />
    </div>
}
export default Security;
