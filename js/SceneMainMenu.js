class SceneMainMenu extends Phaser.Scene {
	constructor() {
		super({ key: 'SceneMainMenu' });
	}

	preload() {
		this.load.image('sprBg0', './content/P3SpaceShooterContent/sprBg0.png');
		this.load.image('sprBg1', './content/P3SpaceShooterContent/sprBg1.png');
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
			'./content/P3SpaceShooterContent/sprBtnOver.wav'
		);
		this.load.audio(
			'sprBtnDown',
			'./content/P3SpaceShooterContent/sprBtnPlay.wav'
		);
	}

	create() {
		this.sfx = {
			btnOver: this.sound.add('sndBtnOver'),
			btnDown: this.sound.add('sndBtnDown')
		};

		this.btnPlay = this.add.sprite(
			this.game.config.width * 0.5,
			this.game.config.height * 0.5,
			'sprBtnPlay'
		);

		this.btnPlay.setInteractive();

		this.btnPlay.on(
			'pointerover',
			function() {
				this.btnPlay.setTexture('sprBtnPlayHover');
				this.sfx.btnOver.play();
			},
			this
		);

		this.btnPlay.on('pointerout', function() {
			this.setTexture('sprBtnPlay');
		});

		this.btnPlay.on(
			'pointerdown',
			function() {
				this.btnPlay.setTexture('sprBtnPlayDown');
				this.sfx.btnDown.play();
			},
			this
		);

		this.btnPlay.on(
			'pointerup',
			function() {
				this.btnPlay.setTexture('sprBtnPlay');
				this.scene.start('SceneMain');
			},
			this
		);

		this.title = this.add.text(
			this.game.config.width * 0.5,
			128,
			'ALIEN ATTACK',
			{
				fontFamily: 'monospace',
				fontSize: 48,
				fontStyle: 'bold',
				colof: '#ffffff',
				align: 'center'
			}
		);

		this.title.setOrigin(0.5);

		this.backgrounds = [];
		for (let i = 0; i < 5; i++) {
			let keys = ['sprBg0', 'sprBg1'];
			let key = keys[Phaser.Math.Between(0, keys.length - 1)];
			let bg = new ScrollingBackground(this, key, i * 10);
			this.backgrounds.push(bg);
		}
	}

	update() {
		for (let i = 0; i < this.backgrounds.length; i++) {
			this.backgrounds[i].update();
		}
	}
}
