import Feature from "../Feature";
import MoneyLogo from "./icon-money.png";
import './Money.css'
function Money() {
    return <div className='Money'>
        <Feature logo={MoneyLogo} alt='Money' title='More savings means higher rates' description='The more you save with us, the higher your interest rate will be!'/>
    </div>
}
export default Money;