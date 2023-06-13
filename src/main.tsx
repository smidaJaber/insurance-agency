import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Errors";
import Home from "./views/HomeView";
import { action as findanswersAction } from "./components/Headers/HomeHeaderTop/LeftQuickStartCard";
import { Auth } from "./components/Auth";
import { AboutUs } from "./views/AboutUs";
import { Assurances } from "./views/Assurances/Sante";

import { useMantineTheme } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { AssuranceDentaire } from "./views/Assurances/dentaire";
import Dashboard from "./views/Dashboard";

const useStyles = createStyles((theme, _params) => ({
	container: {
		backgroundColor: theme.colorScheme === "dark" ? "#1C1C1C" : "#F9F9F9",
		color: theme.colorScheme === "dark" ? "#F9F9F9" : "#1C1C1C",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
	},
	card: {
		backgroundColor: theme.colorScheme === "dark" ? "#2F4F4F" : "#F0E68C",
		color: theme.colorScheme === "dark" ? "#F9F9F9" : "#1C1C1C",
		padding: 16,
		borderRadius: 8,
		boxShadow: theme.shadows.sm,
		maxWidth: 600,
		margin: "0 auto",
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		marginBottom: 16,
	},
	subtitle: {
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 32,
		marginBottom: 16,
		color: "#00BFFF",
	},
	description: {
		fontSize: 16,
		marginBottom: 16,
	},
	list: {
		listStyleType: "circle",
		marginBottom: 16,
		marginLeft: 32,
	},
	listItem: {
		fontSize: 16,
		marginBottom: 8,
	},
	button: {
		backgroundColor: "#FF6347",
		color: "#F9F9F9",
		borderRadius: 4,
		padding: "8px 16px",
		border: "none",
		cursor: "pointer",
		transition: "all 0.2s ease-in-out",
		"&:hover": {
			backgroundColor: "#DAA520",
			transform: "translateY(-2px)",
			boxShadow: theme.shadows.md,
		},
	},
}));
const ThreeColorPalette = () => {
	const { classes } = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.card}>
				<h1 className={classes.title}>Six Color Palette Example</h1>
				<p className={classes.description}>
					This component uses six colors from the palette provided earlier to
					style a card that displays some example data.
				</p>
				<h2 className={classes.subtitle}>Example Data:</h2>
				<ul className={classes.list}>
					<li className={classes.listItem}>Name: John Doe</li>
					<li className={classes.listItem}>Age: 30</li>
					<li className={classes.listItem}>Location: San Francisco, CA</li>
					<li className={classes.listItem}>Occupation: Software Engineer</li>
				</ul>
				<button className={classes.button}>Click me!</button>
			</div>
		</div>
	);
};

export default ThreeColorPalette;

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "accueil",
				//element: <Home />,
				element: <ThreeColorPalette />,
				action: findanswersAction,
				errorElement: <div>ERRROR</div>,
			},

			{
				path: "Espace-personnel",
				element: <Auth />,
				errorElement: <h1>OMG</h1>,
			},

			{
				path: "assurances/",
				errorElement: <h1>OMG</h1>,
				children: [
					{ path: "sante", element: <Assurances /> },
					{ path: "dentaire", element: <AssuranceDentaire /> },
				],
			},
			{ path: "a-propos", element: <AboutUs />, errorElement: <h1>OMG</h1> },
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
