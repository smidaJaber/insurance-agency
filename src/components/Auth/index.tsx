import { useState, useEffect } from "react";
import { supabase } from "~/lib/api";
import {
	REACT_APP_SUPABASE_KEY,
	REACT_APP_SUPABASE_URL,
} from "~/lib/constants";
import { AuthenticationForm } from "./Login";
import { Button, Container } from "@mantine/core";
import Dashboard from "~/views/Dashboard";

export const Auth = () => {
	const [helperText, setHelperText] = useState<{
		error: boolean;
		text: string;
	}>({ error: true, text: "" });
	const [session, setSession] = useState<{ user?: { email?: string } } | null>(
		null
	);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		return () => subscription.unsubscribe();
	}, []);

	const handleLogin = async (email: string, password: string) => {
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) {
			setHelperText({ error: true, text: error.message });
		}
		if (data.session && data.user) {
		}
		console.log(data);
	};
	const handleSignUp = async (email: string, password: string) => {
		const { data, error } = await supabase.auth.signUp({ email, password });
		if (error) {
			setHelperText({ error: true, text: error.message });
		} else if (data.user && !data.session && !error) {
			setHelperText({
				error: false,
				text: `Un email a été envoyer à ${email} pour la vérification!`,
			});
		}
		console.log(data);
	};

	return !REACT_APP_SUPABASE_URL && !REACT_APP_SUPABASE_KEY ? (
		<p>There is no api key and url</p>
	) : !session ? (
		<Container size={"xs"}>
			<AuthenticationForm
				helperText={helperText}
				onLogin={handleLogin}
				onSignup={handleSignUp}
			/>
		</Container>
	) : (
		<Dashboard />
	);
};
