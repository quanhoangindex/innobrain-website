import './Button.css'

function Button({
    children,
    variant = 'solid', //mapping from figma
    size = 'md', // md | lg | xl
    iconLeading,
    iconTrailing,
    onClick,
    type = 'button',
    disabled = false,
    className = ''
}) {
    return (
        <button
        type= {type}
        onClick = {onClick}
        disabled = {disabled}
        className= {`btn btn--${variant}  btn--${size} ${className}`}
        >
            {iconLeading && <span className='btn__icon'>{iconLeading}</span>}
            {children && <span>{children}</span>}
            {iconTrailing && <span className='btn__icon'>{iconTrailing}</span>}
        </button>
    )
}

export default Button