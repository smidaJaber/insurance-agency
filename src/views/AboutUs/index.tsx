import {
	Card,
	Text,
	Title,
	Image,
	Container,
	Box,
	Table,
	Group,
	SimpleGrid,
} from "@mantine/core";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
const imagelink =
	"https://www.sejours-tunisie.com/wp-content/uploads/2019/02/tour-dhorloge.jpg";
const data = [
	{ year: "2015", sales: 200 },
	{ year: "2016", sales: 450 },
	{ year: "2017", sales: 300 },
	{ year: "2018", sales: 550 },
	{ year: "2019", sales: 400 },
	{ year: "2020", sales: 600 },
];

export const AboutUs = () => {
	return (
		<Container size={"md"} pt={"lg"}>
			<Title order={2} style={{ marginBottom: "2rem" }}>
				À propos de nous
			</Title>
			<Box p="xl">
				<SimpleGrid cols={2}>
					<Box>
						<Title order={3}>Qui sommes-nous ?</Title>
						<Text>
							<br />
							Nous sommes une agence d'assurance spécialisée dans la fourniture
							de solutions d'assurance sur mesure pour les particuliers et les
							entreprises.
							<br />
							Nous avons été fondés en 1995 et depuis lors, nous avons été
							déterminés à fournir à nos clients des solutions d'assurance de
							haute qualité qui répondent à leurs besoins spécifiques.
						</Text>
						<Text>
							<br />
							Notre équipe se compose de professionnels de l'assurance hautement
							qualifiés et expérimentés qui sont dévoués à aider nos clients à
							trouver les solutions d'assurance les plus appropriées pour leurs
							besoins.
							<br />
							Nous sommes fiers de notre service client exceptionnel et nous
							nous engageons à fournir à nos clients des conseils honnêtes et
							impartiaux.
						</Text>
					</Box>
					<Box>
						<Image
							width={"100%"}
							maw={350}
							src={imagelink}
							alt="À propos"
							w={"xl"}
						/>
					</Box>
				</SimpleGrid>

				<Text pt={"xl"}>
					Chez notre agence d'assurance, nous comprenons que chaque client est
					unique et que leurs besoins d'assurance sont différents.
					<br />
					C'est pourquoi nous travaillons en étroite collaboration avec nos
					clients pour comprendre leurs besoins spécifiques et leur fournir des
					solutions d'assurance sur mesure qui répondent à leurs besoins.
					<br />
					Nous sommes là pour aider nos clients à naviguer dans le monde
					complexe de l'assurance et à trouver les solutions d'assurance qui
					conviennent le mieux à leur situation.
				</Text>
				<Text pt="xl">
					Voici un graphique illustrant nos ventes au cours des dernières années
					:
				</Text>
				<BarChart width={500} height={300} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="year" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="sales" fill="#8884d8" />
				</BarChart>
				<Text pt="xl">
					Voici un tableau récapitulatif de nos services et de leurs avantages :
				</Text>
				<Table withBorder striped fontSize={"md"}>
					<thead>
						<tr>
							<th>Service</th>
							<th>Avantages</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Assurance auto</td>
							<td>
								Assistance routière 24h/24, remplacement du véhicule en cas de
								vol ou d'accident, garantie de la valeur à neuf pendant 2 ans
							</td>
						</tr>
						<tr>
							<td>Assurance habitation</td>
							<td>
								Protection contre les dommages causés par les incendies, les
								inondations et les cambriolages, assistance pour les réparations
								et les rénovations, couverture pour les biens personnels
							</td>
						</tr>
						<tr>
							<td>Assurance vie</td>
							<td>
								Assurance pour la tranquillité d'esprit de votre famille,
								couverture pour les frais funéraires, garantie de versement des
								prestations en cas de décès
							</td>
						</tr>
					</tbody>
				</Table>
			</Box>
		</Container>
	);
};
