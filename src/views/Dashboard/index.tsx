import { useState, useEffect } from "react";
import {
	Button,
	Card,
	Container,
	Grid,
	SimpleGrid,
	Text,
	Title,
	useMantineTheme,
} from "@mantine/core";

import { supabase } from "~/lib/api";
const Dashboard = () => {
	const theme = useMantineTheme();
	const [notifications, setNotifications] = useState<any>([]);
	const [messages, setMessages] = useState<any>([]);
	const [session, setSession] = useState<{ user?: { email?: string } } | null>(
		null
	);
	const handleClearNotifications = () => {
		setNotifications([]);
	};

	const handleClearMessages = () => {
		setMessages([]);
	};
	const handleLogout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log({ error: true, text: error.message });
		}
	};

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});

		// Fetch notifications from Supabase
		const fetchNotifications = async () => {
			const { data, error } = await supabase.from("notifications").select("*");
			if (error) {
				console.error("Error fetching notifications:", error);
			} else {
				setNotifications(data);
			}
		};

		// Fetch messages from Supabase
		const fetchMessages = async () => {
			const { data, error } = await supabase.from("messages").select("*");
			if (error) {
				console.error("Error fetching messages:", error);
			} else {
				setMessages(data);
			}
		};

		fetchNotifications();
		fetchMessages();

		return () => subscription.unsubscribe();
	}, []);

	return (
		<Container size={"md"}>
			<Title order={2} style={{ marginBottom: theme.spacing.xl }}>
				Dashboard
			</Title>
			<p>Logged in as {session?.user?.email}!</p>
			<Button onClick={handleLogout}>Déconnexion</Button>
			<SimpleGrid cols={4}>
				<Card shadow="sm" p="xl" radius="md">
					<Title order={3}>Stats</Title>
					<Text>Here are some statistics:</Text>
					<Text>Stat 1: Value</Text>
					<Text>Stat 2: Value</Text>
					<Text>Stat 3: Value</Text>
				</Card>
				<Card
					shadow="sm"
					p="xl"
					radius="md"
					style={{ marginTop: theme.spacing.md }}
				>
					<Title order={3}>Notifications</Title>
					{notifications.length > 0 ? (
						<>
							{notifications.map((notification: any) => (
								<Text key={notification.id}>{notification.message}</Text>
							))}
							<Button
								variant="outline"
								color="blue"
								style={{ marginTop: theme.spacing.md }}
								onClick={handleClearNotifications}
							>
								Clear Notifications
							</Button>
						</>
					) : (
						<Text>No notifications</Text>
					)}
				</Card>
				<Card
					shadow="sm"
					p="xl"
					radius="md"
					style={{ marginTop: theme.spacing.md }}
				>
					<Title order={3}>Messages</Title>
					{messages.length > 0 ? (
						<>
							{messages.map((message: any) => (
								<Text key={message.id}>{message.text}</Text>
							))}
							<Button
								variant="outline"
								color="blue"
								style={{ marginTop: theme.spacing.md }}
								onClick={handleClearMessages}
							>
								Clear Messages
							</Button>
						</>
					) : (
						<Text>No messages</Text>
					)}
				</Card>
				<Card
					shadow="sm"
					p="xl"
					radius="md"
					style={{ marginTop: theme.spacing.md }}
				>
					<Title order={3}>Other Section</Title>
					<Text>Some content and features go here</Text>
				</Card>
			</SimpleGrid>
		</Container>
	);
};

export default Dashboard;
