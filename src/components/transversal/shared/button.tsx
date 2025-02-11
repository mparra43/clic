import clsx from "clsx";

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
    labelStyles?: string
    textColor?: string
}
export const  Button =({ className, borderColor, disabled, iconLeft, iconRight, label, labelStyles, onClick,textColor, title, tooltipPosition, type }: ButtonProps) =>{
    return (
        <button
            className={clsx(className, borderColor, 'flex btn rounded px-3' )}
            data-toggle='tooltip'
            data-placement={tooltipPosition}
            disabled={disabled}
            onClick={onClick} type={type ? type : 'button'}
            title={title}>
            {iconLeft && iconLeft}
            <label className={clsx(labelStyles, textColor, 'mb-0')}>{label}</label>
            {iconRight && <i className={clsx(iconRight, textColor ? textColor :borderColor )}></i>}
        </button>
    );
}