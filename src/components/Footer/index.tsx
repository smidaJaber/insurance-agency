import {
	createStyles,
	Text,
	Container,
	ActionIcon,
	Group,
	Avatar,
	Image,
} from "@mantine/core";
import { Icon } from "../Icon";
import { mdiInstagram, mdiTwitter, mdiYoutube } from "@mdi/js";

import logo from "~/assets/logo.svg";
const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: "0rem", //
		paddingTop: `1.8rem`,
		paddingBottom: `0rem`,
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[6]
				: theme.colors.gray[0], //
		borderTop: `${"0.063rem"} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
	},

	logo: {
		maxWidth: "16.5rem", //

		[theme.fn.smallerThan("sm")]: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
	},

	description: {
		marginTop: "0.313rem", //

		[theme.fn.smallerThan("sm")]: {
			marginTop: theme.spacing.xs,
			textAlign: "center",
		},
	},

	inner: {
		display: "flex",
		justifyContent: "space-between",

		[theme.fn.smallerThan("sm")]: {
			flexDirection: "column",
			alignItems: "center",
		},
	},

	groups: {
		display: "flex",
		flexWrap: "wrap",

		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	wrapper: {
		width: "10rem", //
	},

	link: {
		display: "block",
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[1]
				: theme.colors.gray[6],
		fontSize: theme.fontSizes.sm,
		paddingTop: "0.188rem", //
		paddingBottom: "0.188rem", //

		"&:hover": {
			textDecoration: "underline",
		},
	},

	title: {
		fontSize: theme.fontSizes.lg,
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		marginBottom: `calc(${theme.spacing.xs} / 2)`,
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
	},

	afterFooter: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: theme.spacing.xl,
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl, //
		borderTop: `${"0.063rem"} solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
		}`,

		[theme.fn.smallerThan("sm")]: {
			flexDirection: "column",
		},
	},

	social: {
		[theme.fn.smallerThan("sm")]: {
			marginTop: theme.spacing.xs,
		},
	},
}));

interface FooterLinksProps {
	data: {
		title: string;
		links: { label: string; link: string }[];
	}[];
}

export function FooterLinks({ data }: FooterLinksProps) {
	const { classes } = useStyles();

	const groups = data.map((group) => {
		const links = group.links.map((link, index) => (
			<Text
				key={index + "data"}
				className={classes.link}
				component="a"
				href={link.link}
				onClick={(event) => event.preventDefault()}
			>
				{link.label}
			</Text>
		));

		return (
			<div className={classes.wrapper} key={group.title + "datalink"}>
				<Text className={classes.title}>{group.title}</Text>
				{links}
			</div>
		);
	});

	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				<div className={classes.logo}>
					<Group>
						<Avatar src={logo} color="primary" size={40}></Avatar>
						<Text size={24} fw={"bold"}>
							AGENCE
						</Text>
					</Group>
					<Text size="xs" color="dimmed" className={classes.description}>
						Notre assurance santé est la garantie d'une protection complète pour
						tous. Nous oeuvrons pour votre bien-être et la sécurité de votre
						avenir.
					</Text>
				</div>
				<div className={classes.groups}>{groups}</div>
			</Container>
			<Container className={classes.afterFooter}>
				<Text color="dimmed" size="sm">
					© 2020 assurance-agency.fr. All rights reserved.
				</Text>

				<Group spacing={0} className={classes.social} position="right" noWrap>
					<ActionIcon size="lg">
						<Icon path={mdiTwitter} size="1.05rem" />
					</ActionIcon>
					<ActionIcon size="lg">
						<Icon path={mdiYoutube} size="1.05rem" />
					</ActionIcon>
					<ActionIcon size="lg">
						<Icon path={mdiInstagram} size="1.05rem" />
					</ActionIcon>
				</Group>
			</Container>
		</footer>
	);
}
