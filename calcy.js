function insert(num)
{
	$("#box").val($("#box").val() +num);

}


function eql()
{
	$("#box").val(eval($("#box").val()));
}

function c()
{
	$("#box").val("");
}
function Del()
{
	value = $("#box").val();
	$("#box").val(value.substring(0, value.length-1));
}