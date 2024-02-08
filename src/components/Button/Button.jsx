

export default function Button({children,handleClick,btnDisabled}) {
    return (
        <button
            className="button"
            type = "button"
            onClick={handleClick}
            disabled={btnDisabled}
        >{children}</button>
    );
}

