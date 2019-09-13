class SceneMainMenu extends Phaser.Scene {
	constructor() {
		super({ key: 'SceneMainMenu' });
	}

	preload() {
		this.load.image(
			'sprBtnPlay',
			'./content/P3SpaceShooterContent/sprBtnPlay.png'
		);
		this.load.image(
			'sprBtnPlayHover',
			'./content/P3SpaceShooterContent/sprBtnPlayHover.png'
		);
		this.load.image(
			'sprBtnPlayDown',
			'./content/P3SpaceShooterContent/sprBtnPlayDown.png'
		);
		this.load.image(
			'sprBtnRestart',
			'./content/P3SpaceShooterContent/sprBtnRestart.png'
		);
		this.load.image(
			'sprBtnRestartHover',
			'./content/P3SpaceShooterContent/sprBtnRestartHover.png'
		);
		this.load.image(
			'sprBtnRestartDown',
			'./content/P3SpaceShooterContent/sprBtnRestartDown.png'
		);

		this.load.audio(
			'sprBtnOver',
			'./content/P3SpaceShooterContent/sprBtnOver.png'
		);
		this.load.audio(
			'sprBtnDown',
			'./content/P3SpaceShooterContent/sprBtnPlay.png'
		);
	}

	create() {
		this.scene.start('SceneMain');
	}
}
