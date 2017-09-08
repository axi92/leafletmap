function parse () 
{
	var lines = $("#textarea_input").val().split('\n');
	var coords = [];
	for(var i = 0;i < lines.length;i++)
	{
		//code here using lines[i] which will give you each line
		var p = new RegExp("([\d]{1,2})(\.)(\d+)(,)([\d]{1,2})(\.)(\d+)");
		var m = p.exec(lines[i]);
		console.log(lines[i]);
		console.log('i:' + i + ' - ' + m);
		if (m != null)
		{
			coords.push(lines[i]);
			console.log(lines[i]);
		}
	}

	for(var i = 0;i < coords.length;i++)
	{
		//console.log(coords);
		$('#textarea_output').val($('#textarea_output').val()+coords[i]+'\n'); 
	}
}