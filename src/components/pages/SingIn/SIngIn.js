import './SingIn.css';
import SingInContent from './SingInContent/SingInContent';
import Spacer from '../../common/Spacer/Spacer';

function SingIn() {
    return <div className='Singin'>
        <Spacer height={50}/>
        <SingInContent/>
    </div>
}

export default SingIn;