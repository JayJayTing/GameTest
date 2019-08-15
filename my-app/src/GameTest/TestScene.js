import { Scene } from "phaser";

export default class TestScene extends Scene {
	create() {
		const text = this.add.text(400, 400, "Testing Stuff", {
			backgroundColor: "pink",
			color: "green",
			fontSize: 48
		});

		text.setInteractive({ useHandCursor: true });
		text.on("pointerup", () => {
			console.log("testScene Done");
		});
	}
}
