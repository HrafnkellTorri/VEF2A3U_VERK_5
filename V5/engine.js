let elList = document.getElementByTagName('li').firstChild;

for (props in elList)
{
	document.getElementById('one').innerHTML += props
	;
}

