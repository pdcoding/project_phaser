$(async () => {
	console.log('data');
	const playerData = await $.ajax({
		url: 'http://localhost:3000/players'
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
});
