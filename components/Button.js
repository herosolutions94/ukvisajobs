import React from "react";

const variants = {
	primary: "site_btn",
	empty: "",
};

const Button = (props) => {
	const { id, size, variant, tabIndex, ariaLabel, ariaExpanded, type, disabled, className, text, role, onClick } = props;

	const v = variant ? variants[variant] : "";
	// const btnVariant = icon && text ? v : icon && !text ? '' : v;
	const btnVariant = v;
	// const btn = icon && text ? "with-icon" : icon && !text ? "icon-only" : "text-only";

	const classNames = `site_btn${`${className && ` ${className} `}`}${btnVariant && ` ${btnVariant}`}${` ${size}`}`;
	// const iconClassNames = `btn-icon${`${iconClassName && ` ${iconClassName}`}`}`;

	return (
		<button id={id} tabIndex={tabIndex} aria-label={ariaLabel} aria-expanded={ariaExpanded} role={role} disabled={disabled} className={classNames} type={type} onClick={onClick}>
			{text}
			{props.children}
		</button>
	);
};

Button.defaultProps = {
	type: "button",
	variant: "secondary",
	size: "",
	className: "",
	iconDirection: "left",
	iconClassName: "",
};

export default Button;