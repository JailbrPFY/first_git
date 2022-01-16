function changeColor(params) {
    params.setAttribute("style", "color:gray;")
}

var ele = document.getElementById("box1");
var clr = ele.getAttribute("style")
console.log(clr)
setTimeout("changeColor(ele)",5000)//延时


$(document).ready(function(){
$('#btn').click(function func(){
    alert('你还真敢说啊，信不信我打你');
});});

//JQurey选择器：
// $(document).ready(function(){
// //     //这里的代码会在所有元素加载完毕后再执行

// // var ul = $('ul');
// // var lis = ul.find('li');//标签选择器，得到类似与数组的对象
// // var li = lis.eq(1);
// // var text = $('ul li:eq(1)').text();
// var text = $('ul li').eq(1).text();//不同写法：后代选择器
// alert("谁是🐖？");
// alert(text+'是🐖')});

//查找属性
var len = $('ul li').length;//长度未知
// var id = $('ul li').eq(len -5).attr('id');//查找属性
var id = $('ul li:last').attr('id');
// alert(id);

//链式调用
var myFuction = function () {
    
    return {
        func01 : function () {
            console.log("func01")
            return this;
        },
        func02 : function () {
            console.log("func02")
            return this;
        }
    }
}
var obj = myFuction();
obj.func01();
obj.func02();

obj.func01().func02();//链式调用：函数调用需要返回值

console.log("------------分割线------------")
//-------创造新元素------

var newLi = $("<li id = 'a5'>新字母</li>");
// var newLi = $("<li id = \"a5\" >新字母<li>");//  \\表示转义
newLi.prependTo($('ul'));//放在第一位
//简写
$("<li id = \"a6\">又一个</li>").appendTo($("ul"));//放在最后

//替换html中的所有ul
// $('ul').html($("<li id = \"a7\">I</li>"))

// insertAfter();//插入某个元素集合之后
// insertBefore();//插到某个元素集合之前
// prepend();//匹配元素集合的每个元素开头插入指定内容
// prependTo();//向目标开头插入匹配元素集合中的每个元素

//删除和隐藏节点
$('#a1').remove();

$('#a3').hide();//即元素设置display：none
$( '#a3').show();
$('#a8').hide();
$('#a8').show();

var id = $('#a8').attr('id');//查找id为a2的元素
alert(id);
$(document).ready(function () {
    $('#a8').attr('id','a8');
    alert()
})