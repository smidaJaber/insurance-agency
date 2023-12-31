import { Player } from "@remotion/player";
import { MyComp } from "~/remotion/MyComp";
export function Revideo() {
	return (
		<Player
			component={MyComp}
			inputProps={{ text: "World" }}
			durationInFrames={120}
			compositionWidth={1920}
			compositionHeight={1080}
			fps={30}
			style={{
				width: "16rem",
			}}
			loop
			autoPlay
		/>
	);
}
