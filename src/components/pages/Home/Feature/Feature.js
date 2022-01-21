import './Feature.css'

function Feature({logo, title, description, alt}) {
    return <div className="Feature">
        <img className='feature-icon' src={logo} alt={alt} />
        <h3 className='feature-item-title'>{title}</h3>
        <p className='feature-description'>{description}</p>
    </div >
}
export default Feature;