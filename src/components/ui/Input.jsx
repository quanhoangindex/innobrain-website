import "./Input.css";

function Input({
    size = "md", // "md" | "xl"
    type = "Default", // "Default" | "Text Area"
    label,
    placeholder,
    required = false,
    showLabel = true,
    iconLeading,
    iconTrailing,
    ...props
}) {
    const isTextArea = type === "Text Area";

    return (
        <div className={`input input--${size}`}>
            {showLabel && label && (
                <div className="input__label-row">
                    <label className="input__label">{label}</label>
                    {required && <span className="input__required">*</span>}
                </div>
            )}

            <div
                className={`input__wrapper${isTextArea ? " input__wrapper--area" : ""}`}>
                {iconLeading && (
                    <span className="input__icon">{iconLeading}</span>
                )}

                {isTextArea ? (
                    <textarea
                        className="input__field input__field--area"
                        placeholder={placeholder}
                        {...props}
                    />
                ) : (
                    <input
                        className="input__field"
                        placeholder={placeholder}
                        {...props}
                    />
                )}

                {iconTrailing && (
                    <span className="input__icon">{iconTrailing}</span>
                )}
            </div>
        </div>
    );
}

export default Input;
