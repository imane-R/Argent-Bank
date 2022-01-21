import './Button.css'

function Button({name}) {
    return <div className="Button">
            <button className="button" > {name}</button>
    </div>
}
export default Button