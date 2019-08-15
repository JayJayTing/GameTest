import React from "react";
import Phaser from "phaser";
import DemoScene from './DemoScene'

export default class IGame extends React.Component {

	constructor() {
		super()
		this.game = null;
	}
	
	componentDidMount() {
	  const config = {
		type: Phaser.AUTO,
		width: 800,
		height: 640,
		parent: "phaser-game",
		scene: [DemoScene]
	  };
	  this.game = new Phaser.Game(config);
	}
  
	shouldComponentUpdate() {
	  return false;
	}
  
	render() {
	  return <div id="phaser-game" />;
	}
  }