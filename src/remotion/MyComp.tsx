import { Text } from "@mantine/core";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
export const MyComp: React.FC<{ text: string }> = ({ text }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	const scale = spring({ frame, fps });
	const opacity = interpolate(frame, [0, 60], [0, 1], {
		extrapolateRight: "clamp",
	});
	return (
		<div>
			<Text fw={"bold"} size={160}>
				Hello the {text}!
				<Text
					variant="gradient"
					gradient={{ from: "cyan", to: "orange", deg: opacity }}
				>
					Welcome
				</Text>
			</Text>
		</div>
	);
};
