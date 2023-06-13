import {
	UnstyledButton,
	Checkbox,
	Text,
	createStyles,
	Radio,
} from "@mantine/core";
import React, { useState } from "react";
import { Icon } from "../Icon";

type checkPosition = any;
interface GoodCheckboxProps {
	value: string;
	icon?: string;
	title: string;
	activeColor: string;
	isActive?: boolean;
	onClick: (v: string) => void;
}
const GoodCheckbox: React.FC<GoodCheckboxProps> = ({
	value,
	icon,
	title,
	activeColor,
	onClick,
	isActive,
}) => {
	const { classes } = useStyles();
	const [checked, setChecked] = useState(isActive);
	const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
		setChecked((prev) => !prev);
		onClick(value);
	};
	return (
		<UnstyledButton
			onClick={handleClick}
			key={"ubhaveyou"}
			className={classes.item}
			styles={{
				backgroundColor: isActive ? activeColor : "",
			}}
		>
			{icon && <Icon path={icon} size="2rem" />}
			<Radio
				name="situation"
				contentEditable
				value={value}
				checked={isActive}
				label={title}
			/>
		</UnstyledButton>
	);
};

const useStyles = createStyles((theme) => ({
	item: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		borderRadius: theme.radius.md,
		height: "5.625rem",
		boxShadow: theme.shadows.xs,
		transition: "box-shadow 150ms ease, transform 100ms ease",

		"&:hover": {
			boxShadow: theme.shadows.md,
			transform: "scale(1.05)",
		},
	},
}));
export default GoodCheckbox;
