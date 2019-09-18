$(async () => {
	const playerData = await $.ajax({
		url: 'https://alien-pineapple.herokuapp.com/players'
	});
	console.log(playerData);
	playerData.map(eachPlayer => {
		const $playerDiv = $('<div>');
		const $playerName = $('<h1>');
		$playerName.text(eachPlayer.name);
		const $playerTime = $('<h1>');
		$playerTime.text(eachPlayer.time);
		$playerDiv.append($playerName, $playerTime);
		$('.scoreboard').append($playerDiv);
	});
	const $playerInput = $('#newPlayerInput');
	const $playerTime = $('#playerTime');
	const $inputBtn = $('#newPlayerBtn');

	$inputBtn.on('click', async evt => {
		evt.preventDefault();
		const formData = {
			player: {
				name: $playerInput.val(),
				// time: 0,
				scoreboard_id: 1
			}
		};
		const newPlayer = await $.ajax({
			type: 'POST',
			url: 'https://alien-pineapple.herokuapp.com/players',
			data: formData
		});
		console.log('added', newPlayer);
	});
});
