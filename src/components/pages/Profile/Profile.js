import './Profile.css'
import Welcome from './Welcome/Welcome';
import Button from '../../common/Button/Button';
import Spacer from '../../common/Spacer/Spacer'; 
import {accounts}  from '../../../service/accounts';
import Account from './Account/Account';

function Profile() {
    return <div className='Profile'>
        <Spacer height={20}/>
        <Welcome />
        <div className='EditNameBtn'>
            <Button name='Edit Name' width={86} />
        </div>
        <Spacer height={20}/>
        <h2 className="sr-only">Accounts</h2>
            {accounts.map((account,index) =>
                <Account key={index} title={account.title} amount={account.amount} description={account.description} />
            )};
    </div>
}

export default Profile;