import './Welcome.css'

function Welcome({fristName ,lastName}) {
    return <div className='Welcome'>
       <h1> Welcome back {fristName} {lastName}!</h1>
    </div>
}

export default Welcome;