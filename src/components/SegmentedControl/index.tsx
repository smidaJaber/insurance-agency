import { createStyles, SegmentedControl } from "@mantine/core";
import { CSSSizes } from "~/typings";

const useStyles = createStyles((theme) => ({
	root: {
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
		boxShadow: theme.shadows.md,
		border: `${0.125}rem solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[1]
		}`,
	},

	indicator: {
		backgroundImage: theme.fn.gradient({ from: "pink", to: "orange" }),
	},

	control: {
		border: "0 !important",
	},

	label: {
		"&, &:hover": {
			"&[data-active]": {
				color: theme.white,
			},
		},
	},
}));

export interface SegmentedControlProps {
	data: string[];
	radius: CSSSizes;
	size: CSSSizes;
}
export function SegmentedControlGradiant(props: SegmentedControlProps) {
	const { classes } = useStyles();
	return (
		<SegmentedControl
			color="primary"
			radius={props.radius}
			size={props.size}
			data={props.data}
			name="situation"
			classNames={classes}
		/>
	);
}
