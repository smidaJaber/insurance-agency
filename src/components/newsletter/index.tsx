import {
	createStyles,
	Text,
	Title,
	TextInput,
	Button,
	Image,
	Container,
	Group,
	SimpleGrid,
} from "@mantine/core";
import image from "~/assets/newsletter.svg";

const useStyles = createStyles((theme) => ({
	wrapper: {
		display: "flex",
		alignItems: "center",
		padding: `8.2rem`,
		borderRadius: theme.radius.md,
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white[1],
		border: `${0}rem solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
		}`,

		[theme.fn.smallerThan("sm")]: {
			flexDirection: "column-reverse",
			padding: theme.spacing.xl,
		},
	},

	image: {
		maxWidth: "60%",
		marginLeft: "5rem",
		[theme.fn.smallerThan("sm")]: {
			maxWidth: "100%",
			marginLeft: "0rem",
		},
	},

	body: {
		paddingRight: `calc(${theme.spacing.xl} * 4)`,

		[theme.fn.smallerThan("sm")]: {
			paddingRight: 0,
			marginTop: theme.spacing.xl,
		},
	},

	title: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
		marginBottom: theme.spacing.md,
	},

	controls: {
		display: "flex",
		marginTop: theme.spacing.xl,
	},

	inputWrapper: {
		width: "100%",
		flex: "1",
	},

	input: {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		borderRight: 0,
	},

	control: {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
}));

export function NewsLetterSubscription() {
	const { classes } = useStyles();
	return (
		<div className={classes.wrapper}>
			<Container size="md">
				<SimpleGrid cols={2}>
					<div className={classes.body}>
						<Title className={classes.title}>Wait a minute...</Title>
						<Text fw={500} fz="lg" mb={5}>
							Subscribe to our newsletter!
						</Text>
						<Text fz="sm" c="dimmed">
							You will never miss important product updates, latest news and
							community QA sessions. Our newsletter is once a week, every
							Sunday.
						</Text>

						<div className={classes.controls}>
							<TextInput
								placeholder="Your email"
								classNames={{
									input: classes.input,
									root: classes.inputWrapper,
								}}
							/>
							<Button className={classes.control}>Subscribe</Button>
						</div>
					</div>

					<Image src={image} className={classes.image} />
				</SimpleGrid>
			</Container>
		</div>
	);
}
