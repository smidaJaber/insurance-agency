import classes from "./style.module.scss";
import { Outlet, useNavigation } from "react-router-dom";
import { MenuTop } from "../MenuTop";
import { MantineProvider } from "@mantine/core";
import { useSurrealistTheme } from "~/util/theme";
import { store } from "~/store";
import { Provider } from "react-redux";
import { FooterLinks } from "../Footer";
const dataLinks = [
	{
		title: "Assurance",
		links: [
			{ label: "Assurance santé", link: "/assurance-sante" },
			{ label: "Assurance auto", link: "/assurance-auto" },
			{ label: "Assurance habitation", link: "/assurance-habitation" },
		],
	},
	{
		title: "À propos",
		links: [
			{
				label: "Notre entreprise",
				link: "/a-propos/notre-entreprise",
			},
			{
				label: "Notre équipe",
				link: "/a-propos/notre-equipe",
			},
			{
				label: "Nos valeurs",
				link: "/a-propos/nos-valeurs",
			},
			{
				label: "Nos partenaires",
				link: "/a-propos/nos-partenaires",
			},
			{
				label: "Carrières",
				link: "/a-propos/carrieres",
			},
		],
	},
	{
		title: "Ressources",
		links: [
			{
				label: "Foire aux questions",
				link: "/ressources/faq",
			},
			{
				label: "Blog",
				link: "/ressources/blog",
			},
			{
				label: "Centre d'aide",
				link: "/ressources/centre-aide",
			},
		],
	},
	{
		title: "Nous contacter",
		links: [
			{
				label: "Service à la clientèle",
				link: "/nous-contacter/service-clientele",
			},
			{
				label: "Demandes de renseignements",
				link: "/nous-contacter/demandes-renseignements",
			},
			{
				label: "Réclamations",
				link: "/nous-contacter/reclamations",
			},
			{
				label: "Devis en ligne",
				link: "/nous-contacter/devis-en-ligne",
			},
		],
	},
];

const mainLinks = [
	{ label: "Accueil", link: "/" },
	{
		label: "Assurances",
		link: "/assurances",
		submenu: [
			{ label: "Assurance santé", link: "/assurances/sante" },
			{ label: "Assurance dentaire", link: "/assurances/dentaire" },
			{ label: "Assurance vision", link: "/assurances/vision" },
			{
				label: "Assurance maladies graves",
				link: "/assurances/maladies-graves",
			},
			{ label: "Assurance voyage", link: "/assurances/voyage" },
		],
	},
	{
		label: "Solutions",
		link: "/solutions",
		submenu: [
			{
				label: "Programmes de bien-être",
				link: "/solutions/bien-etre",
			},
			{
				label: "Solutions pour les employeurs",
				link: "/solutions/employeurs",
			},
			{
				label: "Solutions pour les travailleurs autonomes",
				link: "/solutions/travailleurs-autonomes",
			},
		],
	},
	{ label: "À propos", link: "/a-propos" },
	{ label: "Nous joindre", link: "/nous-joindre" },
];
function App() {
	const colorScheme = "automatic"; //useStoreValue((state) => state.config.theme);
	const defaultScheme = "light"; //useStoreValue((state) => state.nativeTheme);
	const actualTheme = colorScheme == "automatic" ? defaultScheme : colorScheme;
	const mantineTheme = useSurrealistTheme(actualTheme);
	const isLight = true; //actualTheme === "light";

	const navigation = useNavigation();

	return (
		<Provider store={store}>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				withCSSVariables
				theme={mantineTheme}
			>
				<div className={classes.root}>
					<div className={classes.content}>
						<MenuTop
							change={() => {}}
							mainLinks={mainLinks}
							userLinks={[
								{ label: "Espace personnel", link: "/Espace-personnel" },
							]}
						/>
						<div className={navigation.state === "loading" ? "Chargement" : ""}>
							<Outlet />
						</div>

						<FooterLinks data={dataLinks} />
					</div>
				</div>
			</MantineProvider>
		</Provider>
	);
}

export default App;
