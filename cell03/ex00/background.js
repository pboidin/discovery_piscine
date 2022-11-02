function	get_Random_Color()
{
	var	letters = '0123456789ABCDEF';
	var color	= '#';
	var i		= 0;

	while (i < 6)
	{
		color += letters[Math.floor(Math.random() * 16)];
		i++;
	}
	return (color);
}

function	color_Generator()
{
	document.body.style.backgroundColor = get_Random_Color();
}