import React, { useState } from "react";
import {
	Button,
	Card,
	Container,
	Grid,
	Image,
	Modal,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";
const image2 =
	"https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
const image3 =
	"https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
const image4 =
	"https://images.unsplash.com/photo-1554331292-735256644d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80";
const image1 =
	"https://images.unsplash.com/photo-1606788075819-9574a6edfab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80";

export interface assurancesProps {
	assuranceQuoi?: string;
}
export const Assurances: React.FC<assurancesProps> = ({ assuranceQuoi }) => {
	const [modalOpened, setModalOpened] = useState(false);

	return (
		<Container size={"md"}>
			<Title order={2} style={{ marginBottom: "2rem" }}>
				Assurance Santé : {assuranceQuoi ?? ""}
			</Title>
			<Card p="xl" radius="md">
				<Title order={3}>Qu'est-ce que l'assurance santé ?</Title>
				<Text>
					L'assurance santé est une assurance qui couvre les coûts médicaux
					encourus par un individu. Elle permet de couvrir les frais liés aux
					consultations chez les médecins, les analyses médicales, les
					hospitalisations, les médicaments, etc. Elle est particulièrement
					importante pour les personnes qui ont des problèmes de santé et pour
					les familles avec des enfants.
				</Text>
				<Text>
					En cas d'accident ou de maladie, l'assurance santé permet de couvrir
					les frais médicaux et de bénéficier des meilleurs soins possibles sans
					se préoccuper des coûts associés.
				</Text>
				<Text style={{ marginTop: "2rem" }}>
					Chez notre agence d'assurance, nous proposons une gamme complète
					d'assurances santé pour répondre aux besoins spécifiques de nos
					clients. Nos assurances santé sont conçues pour être abordables et
					pour offrir une couverture maximale.
				</Text>
				<SimpleGrid
					style={{ marginTop: "2rem", marginBottom: "2rem" }}
					cols={2}
				>
					<Card shadow="sm" p={0}>
						<Image src={image1} alt="Assurance Santé 1" fit="cover" />
					</Card>
					<Card shadow="sm" p={0}>
						<Image src={image2} alt="Assurance Santé" fit="cover" />
					</Card>
				</SimpleGrid>
				<Button
					variant="outline"
					color="blue"
					style={{ marginBottom: "2rem" }}
					onClick={() => setModalOpened(true)}
				>
					En savoir plus
				</Button>
				<Modal
					opened={modalOpened}
					onClose={() => setModalOpened(false)}
					title="En savoir plus sur l'assurance santé"
					size={"auto"}
				>
					<Container size={"xs"}>
						<Text>
							L'assurance santé est une assurance qui couvre les coûts médicaux
							encourus par un individu. Elle permet de couvrir les frais liés
							aux consultations chez les médecins, les analyses médicales, les
							hospitalisations, les médicaments, etc. Elle est particulièrement
							importante pour les personnes qui ont des problèmes de santé et
							pour les familles avec des enfants.
						</Text>

						<Text style={{ marginTop: "1rem" }}>
							Chez notre agence d'assurance, nous proposons une gamme complète
							d'assurances santé pour répondre aux besoins spécifiques de nos
							clients. Nos assurances santé sont conçues pour être abordables et
							pour offrir une couverture maximale.
						</Text>
						<Text style={{ marginTop: "1rem" }}>
							Si vous souhaitez en savoir plus sur nos offres d'assurance santé,
							n'hésitez pas à nous contacter ou à remplir notre formulaire en
							ligne. Nous serons ravis de vous aider à trouver la meilleure
							assurance santé pour vous et votre famille.
						</Text>
						<Button
							variant="outline"
							color="blue"
							style={{ marginTop: "2rem" }}
							onClick={() => setModalOpened(false)}
						>
							Fermer
						</Button>
					</Container>
				</Modal>
				<Title style={{ marginTop: "2rem", marginBottom: "1rem" }} order={3}>
					Statistiques et exemples de bénéfices
				</Title>
				<SimpleGrid cols={3}>
					<Card shadow="sm" p="sm" radius="md">
						<Title order={4}>Couverture de 90%</Title>
						<Text>
							Notre assurance santé offre une couverture de 90% pour les
							consultations chez les médecins et les analyses médicales.
						</Text>
					</Card>
					<Card shadow="sm" p="sm" radius="md">
						<Title order={4}>Remboursement rapide</Title>
						<Text>
							Nous remboursons les frais médicaux dans les 48 heures suivant la
							demande de remboursement.
						</Text>
					</Card>
					<Card shadow="sm" p="sm" radius="md">
						<Title order={4}>Pas de frais cachés</Title>
						<Text>
							Notre assurance santé ne comporte pas de frais cachés ou de
							clauses complexes.
						</Text>
					</Card>
				</SimpleGrid>
				<Text
					style={{ marginTop: "2rem", marginBottom: "2rem" }}
					align="center"
				>
					Pour en savoir plus sur les avantages de notre assurance santé,
					contactez-nous dès maintenant ou remplissez notre formulaire en ligne.
				</Text>
				<Grid columns={2}>
					<Card shadow="sm">
						<Image
							src={image3}
							alt="Assurance Santé"
							height={200}
							fit="cover"
						/>
						<Text style={{ marginTop: "1rem" }}>
							Découvrez nos offres d'assurance santé pour les familles.
						</Text>
					</Card>

					<Card shadow="sm">
						<Image src={image4} alt="Assurance Santé" height={200} />
						<Text style={{ marginTop: "1rem" }}>
							Découvrez nos offres d'assurance santé pour les familles.
						</Text>
					</Card>
				</Grid>
				<VideoSection />
			</Card>
		</Container>
	);
};
function VideoSection() {
	const videos = [
		{
			id: 1,
			type: "tiktok",
			url: "https://www.tiktok.com/@charlessterlings/video/7158175656575110406",
		},
		{
			id: 2,
			type: "youtube",
			url: "https://youtube.com/watch?v=H9PkJF7Sgys",
		},
		{
			id: 3,
			type: "youtube",
			url: "https://youtube.com/watch?v=Ecf9Q1OWbvA",
		},
		// add more videos here
	];

	return (
		<div className="video-section">
			<h2>Regarder aussi:</h2>
			<SimpleGrid cols={3}>
				{videos.map((video) => {
					if (video.type === "tiktok") {
						return (
							<Card shadow="sm">
								<iframe
									src={`https://www.tiktok.com/embed/${
										video.url.split("/")[4]
									}`}
									title="TikTok video"
									frameBorder="0"
								></iframe>
							</Card>
						);
					} else if (video.type === "youtube") {
						return (
							<Card shadow="sm" p={0}>
								<iframe
									src={`https://www.youtube.com/embed/${
										video.url.split("=")[1]
									}`}
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								></iframe>
							</Card>
						);
					}
					return null;
				})}
			</SimpleGrid>
		</div>
	);
}
