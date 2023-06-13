import {
	UnstyledButton,
	Checkbox,
	Text,
	Image,
	SimpleGrid,
	createStyles,
	Group,
} from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";
import {
	mdiCity,
	mdiNature,
	mdiSwim,
	mdiWater,
	mdiWeatherSnowy,
} from "@mdi/js";
import { Icon } from "../Icon";

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
	button: {
		display: "flex",
		alignItems: "center",
		width: "100%",
		transition: "background-color 150ms ease, border-color 150ms ease",
		border: `${0.125}rem solid ${
			checked
				? theme.fn.variant({ variant: "outline", color: theme.primaryColor })
						.border
				: theme.colorScheme === "dark"
				? theme.colors.dark[8]
				: theme.colors.gray[3]
		}`,
		borderRadius: theme.radius.sm,
		padding: theme.spacing.sm,
		backgroundColor: checked
			? theme.fn.variant({ variant: "light", color: theme.primaryColor })
					.background
			: theme.colorScheme === "dark"
			? theme.colors.dark[8]
			: theme.white,
	},

	body: {
		flex: 1,
		marginLeft: theme.spacing.md,
	},
}));

interface ImageCheckboxProps {
	checked?: boolean;
	defaultChecked?: boolean;
	onChange?(checked: boolean): void;
	title: string;
	description: string;
	image: string;
}

export function ImageCheckbox({
	checked,
	defaultChecked,
	onChange,
	title,
	description,
	className,
	image,
	...others
}: ImageCheckboxProps &
	Omit<React.ComponentPropsWithoutRef<"button">, keyof ImageCheckboxProps>) {
	const [value, handleChange] = useUncontrolled({
		value: checked,
		defaultValue: defaultChecked,
		finalValue: false,
		onChange,
	});

	const { classes, cx } = useStyles({ checked: value });

	return (
		<UnstyledButton
			{...others}
			onClick={() => handleChange(!value)}
			className={cx(classes.button, className)}
		>
			<Group>
				<Icon path={image} size={1.5} />

				<div className={classes.body}>
					<Text color="dimmed" size="xs" sx={{ lineHeight: 1 }} mb={5}>
						{description}
					</Text>
					<Text weight={500} size="sm" sx={{ lineHeight: 1 }}>
						{title}
					</Text>
				</div>

				<Checkbox
					checked={value}
					onChange={() => {}}
					tabIndex={-1}
					styles={{ input: { cursor: "pointer" } }}
				/>
			</Group>
		</UnstyledButton>
	);
}

export interface ImageCheckboxesProps {
	data: { description: string; title: string; image: string }[];
}
export function ImageCheckboxes({ data }: ImageCheckboxesProps) {
	const items = data.map((item) => (
		<ImageCheckbox {...item} key={item.title} />
	));
	return (
		<SimpleGrid
			cols={2}
			breakpoints={[
				{ maxWidth: "md", cols: 2 },
				{ maxWidth: "sm", cols: 1 },
			]}
		>
			{items}
		</SimpleGrid>
	);
}
