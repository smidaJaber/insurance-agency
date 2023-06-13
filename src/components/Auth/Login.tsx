import React from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
	TextInput,
	PasswordInput,
	Text,
	Paper,
	Group,
	PaperProps,
	Button,
	Divider,
	Checkbox,
	Anchor,
	Stack,
	Alert,
} from "@mantine/core";
import { Icon } from "../Icon";
import { mdiGoogle, mdiTwitter } from "@mdi/js";

interface AuthProps {
	onLogin: (email: string, password: string) => void;
	onSignup: (email: string, password: string) => void;
	helperText: { error: boolean; text: string };
}
export function AuthenticationForm(props: PaperProps & AuthProps) {
	const [type, toggle] = useToggle(["S'identifier'", "Enregistrer"]);
	const form = useForm({
		initialValues: {
			email: "",
			name: "",
			password: "",
			terms: true,
		},

		validate: {
			email: (val: string) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
			password: (val: string) =>
				val.length <= 6
					? "Password should include at least 6 characters"
					: null,
		},
	});

	return (
		<Paper p="xl" m="lg" c={"dark"} withBorder {...props} shadow="lg">
			<Text size="lg" weight={500}>
				Bienvenu à AGENCE, {type} avec
			</Text>
			<Alert
				hidden={!props.helperText.text.length}
				color={props.helperText.error ? "red" : "teal"}
				variant="light"
				title={props.helperText.error ? `Erreur ${type}` : `Sucès ${type}`}
			>
				{props.helperText.text}
			</Alert>
			<Group grow mb="md" mt="md">
				<Button
					leftIcon={<Icon path={mdiGoogle} size={0.82} />}
					variant="default"
					color="gray"
				>
					Google
				</Button>
				<Button
					leftIcon={<Icon path={mdiTwitter} size={0.82} />}
					variant="default"
					color="gray"
				>
					Twitter
				</Button>
			</Group>

			<Divider
				label="Oubien continuer avec email"
				labelPosition="center"
				my="lg"
			/>

			<form
				onSubmit={form.onSubmit(({ email, password, name }) =>
					type === "Enregistrer"
						? props.onSignup(email, password)
						: props.onLogin(email, password)
				)}
			>
				<Stack>
					{type === "Enregistrer" && (
						<TextInput
							label="Nom"
							placeholder="Votre nom"
							value={form.values.name}
							onChange={(event) =>
								form.setFieldValue("name", event.currentTarget.value)
							}
						/>
					)}

					<TextInput
						required
						label="Email"
						placeholder="Bonjour@bensmidajaber.dev"
						value={form.values.email}
						onChange={(event) =>
							form.setFieldValue("email", event.currentTarget.value)
						}
						error={form.errors.email && "Email invalid "}
					/>

					<PasswordInput
						required
						label="Mot de passe"
						placeholder="Votre mot de passe"
						value={form.values.password}
						onChange={(event) =>
							form.setFieldValue("password", event.currentTarget.value)
						}
						error={
							form.errors.password &&
							"Le mot de passe doit inclure au moins 6 charactères"
						}
					/>

					{type === "S'identifier" && (
						<Checkbox
							label="J'accepte les termes et les conditions"
							checked={form.values.terms}
							onChange={(event) =>
								form.setFieldValue("terms", event.currentTarget.checked)
							}
						/>
					)}
				</Stack>

				<Group position="apart" mt="xl">
					<Anchor
						component="button"
						type="button"
						color="dimmed"
						onClick={() => toggle()}
						size="xs"
					>
						{type === "Enregistrer"
							? "Deja inscris? Se connecter"
							: "Vous n'avez pas un compte? Créer"}
					</Anchor>
					<Button type="submit">{upperFirst(type)}</Button>
				</Group>
			</form>
		</Paper>
	);
}
