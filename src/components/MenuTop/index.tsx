import { useState } from "react";
import {
	createStyles,
	Header,
	Container,
	Group,
	Burger,
	Image,
	Text,
	Popover,
	NavLink,
	Menu,
	Center,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ViewMode } from "~/typings";
import logo from "~/assets/logo.svg";
import { Link } from "react-router-dom";
import { Container as ContainerMe } from "../Containers/Container";
import { Icon } from "../Icon";
import { mdiChevronDown, mdiChevronRight } from "@mdi/js";
const HEADER_HEIGHT = "5.25rem";

const useStyles = createStyles((theme) => ({
	header: {
		position: "sticky",
		backgroundColor: theme.fn.variant({
			variant: "filled",
			color: theme.primaryColor,
		}).background,
		//marginBottom: `${HEADER_HEIGHT} !important`,
		borderBottom: 0,
		boxShadow: "0 1px 6px 0 rgba(0,0,0,0.2)",
	},

	inner: {
		height: HEADER_HEIGHT,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},

	burger: {
		[theme.fn.largerThan("sm")]: {
			display: "none",
		},
	},

	links: {
		paddingTop: theme.spacing.lg,
		height: HEADER_HEIGHT,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",

		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},

	mainLinks: {
		marginRight: -theme.spacing.sm,
	},

	mainLink: {
		//textTransform: "uppercase",
		fontSize: `${1.1125}rem`,
		color: theme.white,
		padding: `${0.4375}rem ${theme.spacing.sm}px`,
		fontWeight: 600,
		borderBottom: `${0.125}rem solid transparent`,
		transition: "border-color 100ms ease, opacity 100ms ease",
		opacity: 0.9,
		borderTopRightRadius: theme.radius.sm,
		borderTopLeftRadius: theme.radius.sm,
		textDecoration: "none",
		"&:hover": {
			opacity: 1,

			color: theme.colors.violet[9],
		},
	},

	secondaryLink: {
		color: theme.colors[theme.primaryColor][0],
		fontSize: theme.fontSizes.xs,
		textTransform: "uppercase",
		transition: "color 100ms ease",

		"&:hover": {
			color: theme.white,
			textDecoration: "none",
		},
	},

	mainLinkActive: {
		color: theme.white,
		opacity: 1,
		borderBottomColor:
			theme.colorScheme === "dark"
				? theme.white
				: theme.colors[theme.primaryColor][5],
		backgroundColor: theme.fn.lighten(
			theme.fn.variant({ variant: "filled", color: theme.primaryColor })
				.background!,
			0.6
		),
	},
	menuDropdown: {
		backgroundColor: theme.colors.violet[9],
	},
}));

export interface LinkProps {
	label: string;
	link: string;
	submenu?: any[];
}

export interface DoubleHeaderProps {
	mainLinks: LinkProps[];
	userLinks: LinkProps[];
	change: (id: ViewMode) => void;
}

export function MenuTop({ mainLinks, userLinks, change }: DoubleHeaderProps) {
	const [opened, { toggle }] = useDisclosure(false);
	const { classes, cx } = useStyles();
	const [active, setActive] = useState(0);
	const [opendMenu, { open, close }] = useDisclosure(false);

	const mainItems = mainLinks.map((item, index) => (
		<Popover opened={opendMenu} key={item.link}>
			<Popover.Target key={item.link}>
				<Link
					onMouseEnter={open}
					onMouseOut={close}
					to={item.link}
					className={cx(classes.mainLink, {
						[classes.mainLinkActive]: index === active,
					})}
				>
					{item.label}
				</Link>
			</Popover.Target>

			<Popover.Dropdown key={item.link}>
				{item.submenu?.map((submenu, i) => (
					<NavLink
						label={submenu.label}
						rightSection={<Icon path={mdiChevronRight} size="0.8rem" />}
					/>
				))}
			</Popover.Dropdown>
		</Popover>
	));

	const secondaryItems = userLinks.map((item) => (
		<Link to={item.link} key={item.label} className={classes.secondaryLink}>
			{item.label}
		</Link>
	));
	const items = mainLinks.map((link, index) => {
		const menuItems = link.submenu?.map((item) => (
			<Menu.Item key={item.link}>
				<Link
					to={item.link}
					className={cx(classes.mainLink, {
						[classes.mainLinkActive]: index === active,
					})}
				>
					{item.label}
				</Link>
			</Menu.Item>
		));

		if (menuItems) {
			return (
				<Menu key={link.label} trigger="hover" withinPortal>
					<Menu.Target>
						<Center>
							<Link
								style={{ textDecoration: "none" }}
								//rightSection={}
								//label=
								//component={Link}
								onMouseEnter={open}
								onMouseOut={close}
								to={link.link}
								className={cx(classes.mainLink, {
									[classes.mainLinkActive]: index === active,
								})}
							>
								{link.label}
								<Icon path={mdiChevronDown} size={1} />
							</Link>
						</Center>
					</Menu.Target>
					<Menu.Dropdown className={classes.menuDropdown}>
						{menuItems}
					</Menu.Dropdown>
				</Menu>
			);
		}

		return (
			<Link
				style={{ textDecoration: "none" }}
				onMouseEnter={open}
				onMouseOut={close}
				to={link.link}
				className={cx(classes.mainLink, {
					[classes.mainLinkActive]: index === active,
				})}
			>
				{link.label}
			</Link>
		);
	});
	return (
		<Header height={HEADER_HEIGHT} mb={0} className={classes.header}>
			<ContainerMe>
				<Container className={classes.inner}>
					<Group spacing={"xs"} m={0} p={0}>
						<Image src={logo} width={54} height={54} />
						<Text size={36} c={"white"} fw={"bold"}>
							AGENCE
						</Text>
					</Group>

					<div className={classes.links}>
						<Group position="right">{secondaryItems}</Group>
						<Group spacing={0} position="right" className={classes.mainLinks}>
							{items}
						</Group>
					</div>
					<Burger
						opened={opened}
						onClick={toggle}
						className={classes.burger}
						size="sm"
						color="#fff"
					/>
				</Container>
			</ContainerMe>
		</Header>
	);
}
