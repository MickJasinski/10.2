// ============ change span style ============ \\

var span = $("span");

//     span.each(function(index, element) {
//     	if(index % 2 == 0) {
// 		$(element).css('color', 'red');
// 	};
// });

$("span:even").css('color', 'red');


// =============== add botton =============== \\

var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = ' <button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)
});


// ============== add handler ============== \\

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});