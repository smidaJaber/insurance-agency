import {
	createStyles,
	Container,
	Title,
	Text,
	Button,
	List,
	ThemeIcon,
	Group,
	Image,
} from "@mantine/core";
import { mdiCheck } from "@mdi/js";
import { Icon } from "../../Icon";
import image from "~/assets/react.svg";
import { LeftQuickStartCard } from "./LeftQuickStartCard";
const useStyles = createStyles((theme) => ({
	root: {
		backgroundColor: "#11284b",
		backgroundSize: "cover",
		backgroundPosition: "center",

		//backgroundImage:"linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)",
		backgroundImage:
			"linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1543342384-1f1350e27861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)",
		paddingTop: `0rem`,
		paddingBottom: `0rem`,
	},

	inner: {
		display: "flex",
		paddingTop: "3.98rem",
		paddingBottom: "3.98rem",
		justifyContent: "space-between",
		//paddingTop: `calc(${theme.spacing.xl} * 4)`,
		//paddingBottom: `calc(${theme.spacing.xl} * 4)`,
	},

	content: {
		maxWidth: "30rem",
		//marginRight: `calc(${theme.spacing.xl} * 3)`,
		marginRight: "2.6rem",
		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
			marginRight: 0,
		},
	},

	title: {
		color: theme.colorScheme === "light" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: "2.75rem",
		lineHeight: 1.2,
		fontWeight: 900,

		[theme.fn.smallerThan("xs")]: {
			fontSize: "1.75rem",
		},
	},

	description: {
		color: theme.white,
		opacity: 0.75,
		maxWidth: "31.25rem",

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
		},
	},

	control: {
		[theme.fn.smallerThan("xs")]: {
			flex: 1,
		},
	},

	image: {
		flex: 1,

		[theme.fn.smallerThan("md")]: {
			display: "none",
		},
	},
	highlight: {
		position: "relative",
		backgroundColor: theme.fn.variant({
			variant: "light",
			color: theme.primaryColor,
		}).background,
		borderRadius: theme.radius.sm,
		padding: `${6.25}rem ${0.75}rem`,
	},
	list: { color: theme.colorScheme === "light" ? theme.white : theme.black },
}));

export function HomeHeaderTop() {
	const { classes } = useStyles();
	return (
		<div className={classes.root}>
			<Container size="md">
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>
							Assurez votre{" "}
							<Text
								component="span"
								inherit
								variant="gradient"
								gradient={{ from: "pink", to: "yellow" }}
							>
								santé
							</Text>{" "}
						</Title>
						<Text color="dimmed" mt="md">
							La protection qu'il vous faut pour vivre l'esprit tranquille.
							Santé assurée. Couverture complète, soins supérieurs, service
							exceptionnel.
						</Text>

						<List
							mt={30}
							spacing="sm"
							size="sm"
							className={classes.list}
							icon={
								<ThemeIcon size={20} radius="xl">
									<Icon path={mdiCheck} size={"0.75rem"} />
								</ThemeIcon>
							}
						>
							<List.Item>
								<b> Soins de qualité supérieure</b> – Protégez-vous contre les
								coûts imprévus des soins de santé.
							</List.Item>
							<List.Item>
								<b>Depos dossier et suivie en ligne</b> – Accédez aux meilleurs
								médecins et hôpitaux pour votre traitement.
							</List.Item>
							<List.Item>
								<b>Service à la clientèle exceptionnel</b> – Notre équipe
								dévouée est là pour vous aider, 24 heures sur 24 et 7 jours sur
								7.
							</List.Item>
						</List>
						<Group mt={30}>
							<Button radius="xl" size="md" className={classes.control}>
								Parlez à un conseiller
							</Button>
							<Button
								variant="default"
								radius="xl"
								size="md"
								className={classes.control}
							>
								Demandez un devis
							</Button>
						</Group>
					</div>
					<LeftQuickStartCard />
					{/** <Image src={image} className={classes.image} />*/}
				</div>
			</Container>
		</div>
	);
}
