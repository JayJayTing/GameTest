import React from "react";
import Phaser from "phaser";
import DemoScene from "./DemoScene";
import TestScene from "./TestScene";
import sky from "./assets/images/sky.png";

export default class IGame extends React.Component {
	constructor() {
		super();
		this.state = DemoScene;
		this.game = null;
	}

	componentDidMount() {
		const config = {
			type: Phaser.AUTO,
			width: 800,
			height: 600,
			parent: "phaser-game",
			scene: {
				preload,
				create,
				update
			}
		};
		this.game = new Phaser.Game(config);
		function preload() {
			this.load.image("sky", sky);
		}

		function create() {
			this.add.image(400, 300, "sky");
		}

		function update() {}
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		console.log("hello");
		return (
			<div>
				<img src={sky} />
				testing this out testing this out 2
			</div>
		);
	}
}
