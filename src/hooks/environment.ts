import { useStoreValue } from "~/store";

/**
 * Returns the active tab
 */
export function useActiveTab() {
	const activeTab = "Home";//useStoreValue(state => state.config.activeTab);
	const knownTabs = ["Home","About","Support"];//useStoreValue(state => state.config.tabs);

	return knownTabs.find(tab => tab === activeTab);
}

/**
 * Return a list of all tabs
 */
export function useTabsList() {
	return useStoreValue(state => state.config.tabs);
}

/**
 * Return a list of all environments
 */
export function useEnvironmentList() {
	return useStoreValue(state => state.config.environments);
}