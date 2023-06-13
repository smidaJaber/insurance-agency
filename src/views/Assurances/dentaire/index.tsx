import { useState } from "react";
import {
	Button,
	Card,
	Col,
	Container,
	Grid,
	Image,
	Modal,
	Text,
	Title,
	createStyles,
	useMantineTheme,
} from "@mantine/core";
const image1 =
	"https://images.unsplash.com/photo-1584650589355-e891970a9081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
const image2 =
	"https://images.unsplash.com/photo-1611690059826-498e75c5e603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80";
const useStyles = createStyles((theme) => ({
	container: {
		marginBottom: theme.spacing.md,
	},
	image: {
		width: "100%",
		borderRadius: theme.radius.md,
		marginBottom: theme.spacing.sm,
	},
	modalContent: {
		textAlign: "center",
	},
}));

export const AssuranceDentaire = () => {
	const theme = useMantineTheme();
	const [modalOpened, setModalOpened] = useState(false);
	const { classes } = useStyles();

	return (
		<Container size={"md"}>
			<section className={classes.container}>
				<Title order={2} style={{ marginBottom: theme.spacing.xl }}>
					Assurance Dentaire
				</Title>

				<Card p="xl" radius="md">
					<Title order={3}>Qu'est-ce que l'assurance dentaire ?</Title>
					<Text>
						L'assurance dentaire est un type d'assurance qui couvre les frais
						liés aux soins dentaires tels que les consultations, les
						traitements, les prothèses, etc. Elle est conçue pour aider à
						réduire les coûts associés aux soins dentaires et à maintenir une
						bonne santé bucco-dentaire.
					</Text>

					<Text style={{ marginTop: theme.spacing.md }}>
						Chez notre agence d'assurance, nous proposons une assurance dentaire
						complète qui offre une couverture étendue pour les soins dentaires.
						Notre objectif est de vous aider à maintenir un sourire sain et
						éclatant tout en réduisant les dépenses liées aux soins dentaires.
					</Text>

					<Grid
						gutter={theme.spacing.md}
						style={{ marginTop: theme.spacing.md }}
					>
						<Col span={6}>
							<Image
								src={image1}
								alt="Assurance Dentaire"
								className={classes.image}
							/>
						</Col>
						<Col span={6}>
							<Image
								src={image2}
								alt="Assurance Dentaire"
								className={classes.image}
							/>
						</Col>
					</Grid>

					<Button
						variant="outline"
						color="blue"
						style={{ marginBottom: theme.spacing.md }}
						onClick={() => setModalOpened(true)}
					>
						En savoir plus
					</Button>

					<Modal
						opened={modalOpened}
						onClose={() => setModalOpened(false)}
						title="En savoir plus sur l'assurance dentaire"
						size="sm"
					>
						<div className={classes.modalContent}>
							<Text>
								L'assurance dentaire est conçue pour vous aider à prendre soin
								de votre santé bucco-dentaire et à couvrir les frais associés
								aux soins dentaires. Notre assurance dentaire offre une
								couverture étendue pour les consultations, les traitements, les
								prothèses, etc.
							</Text>

							<Text style={{ marginTop: theme.spacing.sm }}>
								Si vous souhaitez en savoir plus sur notre assurance dentaire et
								les avantages qu'elle offre, n'hésitez pas à nous contacter ou à
								remplir notre formulaire en ligne. Nous serons ravis de vous
								aider à trouver la meilleure assurance dentaire pour vos
								besoins.
							</Text>

							<Button
								variant="outline"
								color="blue"
								style={{ marginTop: theme.spacing.md }}
								onClick={() => setModalOpened(false)}
							>
								Fermer
							</Button>
						</div>
					</Modal>

					<Title
						style={{
							marginTop: theme.spacing.xl,
							marginBottom: theme.spacing.md,
						}}
						order={3}
					>
						Liens Externes
					</Title>

					<Text>
						Voici quelques liens utiles pour en savoir plus sur l'assurance
						dentaire :
					</Text>

					<ul>
						<li>
							<a href="https://www.example.com">Site Web 1</a>
						</li>
						<li>
							<a href="https://www.example.com">Site Web 2</a>
						</li>
						<li>
							<a href="https://www.example.com">Site Web 3</a>
						</li>
					</ul>

					<Title
						style={{
							marginTop: theme.spacing.xl,
							marginBottom: theme.spacing.md,
						}}
						order={3}
					>
						Vidéos Associées
					</Title>

					<Grid gutter={theme.spacing.md}>
						<Col span={4}>
							<Card shadow="sm" p="sm" radius="md">
								<Image
									src="/path/to/video1-thumbnail.jpg"
									alt="Video 1"
									className={classes.image}
								/>
								<Text>Titre de la vidéo 1</Text>
							</Card>
						</Col>
						<Col span={4}>
							<Card shadow="sm" p="sm" radius="md">
								<Image
									src="/path/to/video2-thumbnail.jpg"
									alt="Video 2"
									className={classes.image}
								/>
								<Text>Titre de la vidéo 2</Text>
							</Card>
						</Col>
						<Col span={4}>
							<Card shadow="sm" p="sm" radius="md">
								<Image
									src="/path/to/video3-thumbnail.jpg"
									alt="Video 3"
									className={classes.image}
								/>
								<Text>Titre de la vidéo 3</Text>
							</Card>
						</Col>
					</Grid>
				</Card>
			</section>
		</Container>
	);
};
