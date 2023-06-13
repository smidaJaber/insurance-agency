import {
	Text,
	TextInput,
	TextInputProps,
	ActionIcon,
	useMantineTheme,
	Stack,
	Card,
	Divider,
	Select,
	Button,
	Checkbox,
	UnstyledButton,
	createStyles,
	SimpleGrid,
	Radio,
	Group,
} from "@mantine/core";
import {
	mdiArrowLeft,
	mdiArrowRight,
	mdiBicycle,
	mdiCertificate,
	mdiFamilyTree,
	mdiHeartCircle,
	mdiHomeCircle,
	mdiSearchWeb,
} from "@mdi/js";
import React, { useState } from "react";
import { Icon } from "~/components/Icon";
import { SegmentedControlGradiant } from "~/components/SegmentedControl";
import { redirect, Form } from "react-router-dom";
import GoodCheckbox from "~/components/GoodCheckbox";
import { useToggleArray, useToggleArrayProps } from "~/hooks/useToggleArray";
function SearchBar(props: TextInputProps) {
	const theme = useMantineTheme();
	return (
		<TextInput
			icon={<Icon path={mdiSearchWeb} size="1.1rem" />}
			radius="xl"
			size="md"
			rightSection={
				<ActionIcon
					size={32}
					radius="xl"
					color={theme.primaryColor}
					variant="filled"
				>
					{theme.dir === "ltr" ? (
						<Icon path={mdiArrowRight} size="1.1rem" />
					) : (
						<Icon path={mdiArrowLeft} size="1.1rem" />
					)}
				</ActionIcon>
			}
			placeholder="Search questions"
			rightSectionWidth={42}
			{...props}
		/>
	);
}
const boxesdata = [
	{ id: 1, description: "", title: "Celebataire", image: mdiHeartCircle },
	{ id: 2, description: "", title: "En couple", image: mdiHomeCircle },
	{ id: 3, description: "", title: "J'ai d'enfant", image: mdiHomeCircle },
];

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[6]
				: theme.colors.gray[0],
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 700,
	},
	activeSituation: {
		boxShadow: `4px 4px 10px 2px ${theme.colors.blue[7]}`,
		color: `${theme.colors.blue[7]}`,
	},
	item: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		borderRadius: theme.radius.md,
		height: "5.625rem",
		boxShadow: theme.shadows.xs,
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		transition: "box-shadow 150ms ease, transform 100ms ease",

		"&:hover": {
			boxShadow: theme.shadows.md,
			transform: "scale(1.05)",
		},
	},
}));
export async function action({ request, params }: any) {
	const formData = await request.formData();
	const updates = Object.fromEntries(formData);

	return redirect(`/Home/${params.contactId}`);
}
export function LeftQuickStartCard() {
	const { classes } = useStyles();
	const [selectData, setSelectData] = useState([]);
	const [activeSituation, setActiveSituation] = useState<any>([]);
	const handleClickSituation = (v: string) => {
		let result = useToggleArray(activeSituation, v, (item: any) => item);
		setActiveSituation(result);
	};
	return (
		<>
			<Form method="post" action="find-answers" role="search">
				<Card shadow="sm" radius="md" withBorder w={"100%"} h={"100%"}>
					<Card.Section m={0}>
						<Stack>
							<Divider
								fw={"bold"}
								color="black"
								my="lg"
								label="Je suis"
								sx={{ fontSize: "18px" }}
								labelPosition="center"
							/>
							<SegmentedControlGradiant
								radius="xs"
								size="sm"
								data={["Active", "Retraité", "Invalid"]}
							/>
							<input type="hidden" name="kids" value={"kids"} />

							<Radio.Group value={activeSituation}>
								<Group mt="md">
									{boxesdata.map((item) => {
										const active = activeSituation.includes(item.title);
										return (
											<GoodCheckbox
												value={item.title}
												title={item.title}
												icon={item.image}
												isActive={active}
												activeColor="indigo"
												onClick={handleClickSituation}
											/>
										);
									})}
								</Group>
							</Radio.Group>

							<Divider
								fw={"bold"}
								color="black"
								my="lg"
								label="Je cherche"
								labelPosition="center"
							/>
							<Select
								name="categorie"
								clearable
								searchable
								size="lg"
								data={selectData}
								placeholder={
									selectData.length ? "Choisir.." : "Complete Je suis d'abord"
								}
							/>
						</Stack>
					</Card.Section>

					<Button
						type="submit"
						variant="light"
						color="blue"
						fullWidth
						mt="md"
						radius="md"
					>
						Trouver une reponse
					</Button>
					{/*<SearchBar />*/}
				</Card>
			</Form>
		</>
	);
}
