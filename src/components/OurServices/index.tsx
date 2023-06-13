import {
	Box,
	Container,
	createStyles,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";
import { Icon } from "../Icon";
import { mdiDirections, mdiOfficeBuilding, mdiSecurity } from "@mdi/js";

type Service = {
	title: string;
	description: string;
	icon: string;
};

type ServicesSectionProps = {
	services: Service[];
};
const useStyles = createStyles((theme) => ({
	servicesContainer: {
		paddingTop: "2rem",
		paddingBottom: "8rem",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexWrap: "wrap",
		[theme.fn.smallerThan("sm")]: {
			justifyContent: "center",
		},
	},
	serviceCard: {
		backdropFilter: "blur(7px)",
		width: "31%",
		padding: theme.spacing.lg,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		textAlign: "center",
		borderRadius: theme.spacing.sm,
		backgroundColor: theme.colors.gray[1],
		boxShadow: theme.shadows.sm,
		transition: "all 0.3s ease-in-out",
		"&:hover": {
			transform: "scale(1.1)",
			boxShadow: theme.shadows.md,
		},
		[theme.fn.smallerThan("sm")]: {
			width: "90%",
			marginBottom: theme.spacing.md,
		},
	},
	serviceCardIcon: {
		marginBottom: theme.spacing.md,
		fontSize: theme.fontSizes.md,
		color: theme.primaryColor,
	},
	serviceCardTitle: {
		marginBottom: theme.spacing.sm,
		fontSize: theme.fontSizes.sm,
		fontWeight: "bold",
	},
	serviceCardText: {
		fontSize: theme.fontSizes.sm,
		lineHeight: 1.5,
	},
	title: {
		marginBottom: theme.spacing.md,
		paddingLeft: theme.spacing.md,
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},
}));
function ServicesSection({ services }: ServicesSectionProps) {
	const { classes } = useStyles();
	return (
		<Container size={"xl"} m={0} p={0}>
			<Container size={"md"}>
				<Box py={8} id="services" m={"lg"}>
					<Container size="lg" p={"md"}>
						<Title order={1} ta="left" className={classes.title}>
							Nos Services
						</Title>
						<SimpleGrid
							cols={3}
							spacing={"xl"}
							className={classes.servicesContainer}
						>
							<Box className={classes.serviceCard}>
								<Icon path={mdiSecurity} className={classes.serviceCardIcon} />
								<Title size="h5" className={classes.serviceCardTitle}>
									Assurance santé
								</Title>
								<Title size="body1" className={classes.serviceCardText}>
									Optez pour une couverture santé complète et adaptée à vos
									besoins.
								</Title>
							</Box>
							<Box className={classes.serviceCard}>
								<Icon
									path={mdiOfficeBuilding}
									className={classes.serviceCardIcon}
								/>
								<Title size="h5" className={classes.serviceCardTitle}>
									Assurance habitation
								</Title>
								<Title size="body1" className={classes.serviceCardText}>
									Protégez votre maison ou appartement avec une assurance
									habitation sur-mesure.
								</Title>
							</Box>
							<Box className={classes.serviceCard}>
								<Icon
									path={mdiDirections}
									className={classes.serviceCardIcon}
								/>
								<Title size="h5" className={classes.serviceCardTitle}>
									Assurance automobile
								</Title>
								<Title size="body1" className={classes.serviceCardText}>
									Roulez en toute sérénité avec notre assurance automobile
									personnalisée.
								</Title>
							</Box>
							{services.map((s) => (
								<Box className={classes.serviceCard}>
									<Icon
										path={mdiSecurity}
										className={classes.serviceCardIcon}
									/>
									<Title size="h5" className={classes.serviceCardTitle}>
										{s.title}
									</Title>
									<Title size="body1" className={classes.serviceCardText}>
										{s.description}
									</Title>
								</Box>
							))}
						</SimpleGrid>
					</Container>
				</Box>
			</Container>
		</Container>
	);
}

export default ServicesSection;
