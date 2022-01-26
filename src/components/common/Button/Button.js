import './Button.css'

function Button({name ,fontZise, width}) {
    return <div className="Button">
            <button className="button"style={{ fontZise: `${fontZise}rem`, width: `${width}px`  }} > {name}</button>
    </div>
}
export default Button 