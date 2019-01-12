// $(function(){
// 	var arr2 = $.cookie("obj2") ? JSON.parse($.cookie("obj2")) : [];
// 	if (arr2.length){
// 		$('.inp1').val(arr2[0].name);
// 		$("input:checkbox").prop("checked", arr2[0].flag);
// 	}
// 	var arr = $.cookie("obj") ? JSON.parse($.cookie("obj")) : [];
// 	$('.bnt1').click(function(){
// 		var arr1 = [];
// 		for(var i = 0;i < arr.length; i++){
// 			if(arr[i].name == $('.inp1').val() && arr[i].paw == $('.inp2').val()){
// 				$('h1').css('display','none');
// 				var obj2 = {};
// 				obj2.name = $('.inp1').val();
// 				obj2.paw = $('.inp2').val();
// 				obj2.flag = $("input:checkbox").prop("checked");
// 				arr1.push(obj2);
// 				$.cookie("obj2", JSON.stringify(arr1), {expires:7, path:"/"});
// 				window.location.href = "home_page.html";
// 			}else{
// 				$('h1').css('top','20px')
// 				$('h1').html("用户名或密码错误");
// 				$('h1').css('border','1px solid red').css('display','block').css('color','red');
// 			}
// 		}
// 	})
//
// })