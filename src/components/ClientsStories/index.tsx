import React from "react";
import {
	Box,
	Card,
	CardSection,
	Container,
	SimpleGrid,
	Text,
	Title,
	createStyles,
} from "@mantine/core";

type Story = {
	name: string;
	title: string;
	content: string;
	imageUrl: string;
};

type CommunityProps = {
	stories: Story[];
};
const useStyles = createStyles((theme) => ({
	root: {},
	title: {
		marginBottom: theme.spacing.md,
		paddingLeft: theme.spacing.md,
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},
}));
export function HistoiresDeClients({ stories }: CommunityProps) {
	const { classes } = useStyles();
	return (
		<Container size={"md"} p={"xl"} className={classes.root}>
			<Title order={1} ta="left" className={classes.title}>
				Expériences partagées
			</Title>
			<SimpleGrid cols={3}>
				{stories.map((story) => (
					<Box>
						<Card key={story.title} shadow="sm">
							<Card.Section>
								<img src={story.imageUrl} alt={story.title} />
							</Card.Section>
							<Text size="sm" weight={500} color="gray">
								{story.name}
							</Text>
							<Text size="md" weight={700}>
								{story.title}
							</Text>
							<Text size="sm">{story.content}</Text>
						</Card>
					</Box>
				))}
			</SimpleGrid>
		</Container>
	);
}
