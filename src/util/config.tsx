import { SurrealistConfig } from "~/typings";

export function createBaseConfig(): SurrealistConfig {
	return {
		theme: "automatic",
		tabs: [],
		environments: [],
		activeTab: null,
		activeFournisseur: "*",
		activeClient: "*",
		activeTabProfileClient: "0",
		activeTabProfileFournisseur: "0",
		autoConnect: true,
		tableSuggest: true,
		wordWrap: true,
		queryHistory: [],
		queryFavorites: [],
		localDriver: "memory",
		localStorage: "",
		surrealPath: "",
		surrealUser: "root",
		surrealPass: "root",
		surrealPort: 8000,
		enableConsole: true,
		enableListing: false,
		queryTimeout: 10,
		updateChecker: true,
		queryListing: "history",
		resultListing: "json",
		zoomLevel: 1,
	};
}
