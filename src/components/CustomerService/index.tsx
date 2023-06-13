import {
	createStyles,
	Image,
	Accordion,
	Grid,
	Col,
	Container,
	Title,
	Text,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import animationData from "~/assets/animations/customer-service.json";
const useStyles = createStyles((theme) => ({
	wrapper: {
		marginTop: "-8vw",
		paddingTop: `8rem`,
		paddingBottom: `1.8rem`,
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[1]
				: theme.colors.gray[1],
		//backgroundImage: `-webkit-linear-gradient(90deg, ${
		//	theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[1]
		//} 88%, rgba(0, 0, 0, 0) 0%)`,
		//clipPath: "polygon(0 -1vw, 100% 5%, 100% 100%, 0 100%)",
	},

	title: {
		marginBottom: theme.spacing.md,
		paddingLeft: theme.spacing.md,
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	item: {
		fontSize: theme.fontSizes.sm,
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[1]
				: theme.colors.gray[7],
	},
	link: {
		display: "block",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[1]
				: theme.colors.gray[6],
		fontSize: theme.fontSizes.sm,
		paddingTop: "1.188rem", //
		paddingBottom: "0.188rem", //
		float: "right",
		"&:hover": {
			textDecoration: "underline",
			color: theme.colors.indigo[4],
		},
	},
	sideAnimation: {
		maxWidth: "23rem",
		//transform: "skew(0, -4.76deg) translateY(calc(50vw/12))",
	},
}));

const placeholder =
	"It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

export function CustomerService() {
	const { classes } = useStyles();
	const [direction, flipDirection] = useToggle<-1 | 1>([-1, 1]);
	const CustomerService = useRef<LottieRefCurrentProps>(null);
	return (
		<div className={classes.wrapper}>
			<Container size="md">
				<Grid id="faq-grid" gutter={50}>
					<Col span={12} md={6}>
						<Lottie
							lottieRef={CustomerService}
							className={classes.sideAnimation}
							animationData={animationData}
							loop={false}
							onComplete={(e) => {
								flipDirection();
								CustomerService.current?.setSpeed(0.5);
								CustomerService.current?.setDirection(direction);
								CustomerService.current?.play();
							}}
						/>
					</Col>
					<Col span={12} md={6}>
						<Title order={1} ta="left" className={classes.title}>
							Service à la Clientèle
						</Title>

						<Accordion
							chevronPosition="right"
							defaultValue="reset-password"
							variant="contained"
						>
							<Accordion.Item className={classes.item} value="reset-password">
								<Accordion.Control>
									Comment puis-je trouver un plan d'assurance santé abordable ?
								</Accordion.Control>
								<Accordion.Panel>
									Comparez les plans et examinez les coûts des primes, des
									déductibles et des co-paiements pour trouver celui qui
									correspond à votre budget.
								</Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item className={classes.item} value="another-account">
								<Accordion.Control>
									Puis-je bénéficier d'une aide financière pour payer mon
									assurance santé ?
								</Accordion.Control>
								<Accordion.Panel>
									Oui, il existe des crédits d'impôt et des subventions pour
									aider les personnes à payer leur assurance santé en fonction
									de leurs revenus.
								</Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item className={classes.item} value="newsletter">
								<Accordion.Control>
									Comment puis-je vérifier si mon médecin est inclus dans le
									réseau de mon plan d'assurance santé ?
								</Accordion.Control>
								<Accordion.Panel>
									Vous pouvez vérifier auprès de votre fournisseur d'assurance
									ou utiliser la recherche de médecin en ligne de votre plan
									pour voir quels fournisseurs sont inclus.
								</Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item className={classes.item} value="credit-card">
								<Accordion.Control>
									Quels sont les avantages d'avoir une assurance santé ?
								</Accordion.Control>
								<Accordion.Panel>
									L'assurance santé vous protège contre les coûts médicaux
									élevés, vous permet d'obtenir des soins de santé de routine et
									vous donne la tranquillité d'esprit en cas d'urgenc
								</Accordion.Panel>
							</Accordion.Item>
						</Accordion>

						<Text
							key={"linseeallFAQ"}
							className={classes.link}
							component="a"
							href={"#all"}
							onClick={(event) => event.preventDefault()}
						>
							Voir tous les questions et les réponses
						</Text>
					</Col>
				</Grid>
			</Container>
		</div>
	);
}
