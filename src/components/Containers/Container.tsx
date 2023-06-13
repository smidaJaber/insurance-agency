import { createStyles } from "@mantine/core";

interface ContainerProps {
	children: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
	root: {
		maxWidth: "2520px",
		marginLeft: "auto",
		marginRight: "auto",

		[theme.breakpoints.xl]: { paddingLeft: "5rem", paddingRight: "5rem" },
		[theme.breakpoints.md]: { paddingLeft: "2.5rem", paddingRight: "2.5rem" },
		[theme.breakpoints.sm]: {
			paddingLeft: "0.625rem",
			paddingRight: "0.625rem",
		},

		paddingLeft: "1rem",
		paddingRight: "1rem",
	},
}));
export const Container: React.FC<ContainerProps> = ({ children }) => {
	const { classes } = useStyles();
	return <div className={classes.root}>{children}</div>;
};
