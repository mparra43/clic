

interface ButtonProps {
    className: string
    borderColor?: string;
    disabled?: boolean;
    iconRight?: string |React.ReactNode;
    label: string;
    iconLeft?: string | React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset' | undefined
    title?: string;
    tooltipPosition?: 'top' | 'right' | 'bottom' | 'left'
    textColor?: string
}
export const  Button =({ className, borderColor, disabled, iconLeft, iconRight, label, onClick,textColor, title, tooltipPosition, type }: ButtonProps) =>{
    return (
        <button
            className={`d-flex  btn btn-${borderColor} rounded ${className}  px-3`}
            data-toggle='tooltip'
            data-placement={tooltipPosition}
            disabled={disabled}
            onClick={onClick} type={type ? type : 'button'}
            title={title}>
            {iconLeft && iconLeft}
            <label className={`text-${textColor ? textColor :borderColor}  mb-0`}>{label}</label>
            {iconRight && <i className={`font-bold ${iconRight} ml-2 text-${textColor ? textColor :borderColor}`}></i>}
        </button>
    );
}