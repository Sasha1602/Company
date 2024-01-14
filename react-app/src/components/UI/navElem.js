import './style/navElem.css'
export const NavElem = (props) => {
    const style = 'nav-back ' + props.className
    return (
        <div className={style}>
            <div className='back'>
                {props.children}
            </div>
        </div>
    )
}