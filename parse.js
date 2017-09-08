function parse () 
{
	var lines = $("#textarea_input").val().split('\n');
	var coords = [];
	for(var i = 0;i < lines.length;i++)
	{
		//code here using lines[i] which will give you each line
		if(lines[i].indexOf('?ll=') !== -1)
		{
			var lineArr = lines[i].split('?ll='); 
			if(lineArr.length!==0)
			{
				var splitCords = lineArr[1].split(',');
				coords.push(splitCords[0]+','+splitCords[1]);
			}
		}
	}
	for(var i = 0;i < coords.length;i++)
	{
		//console.log(coords);
		$('#textarea_output').val($('#textarea_output').val()+'L.marker(['+coords[i]+']).addTo(map).bindPopup(\'<a href="https://maps.google.com/maps?ll='+coords[i]+'">gMaps</a>\');'+'\n'); 
	}
}