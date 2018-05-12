
$(document).ready(function () {

    $(".add-to-cart").click(function (event) {

        event.preventDefault(); //event.preventDefault() 方法阻止元素发生默认的行为。当点击提交按钮时阻止对表单的提交; 阻止以下 URL 的链接


        var name = $(this).attr("data-name");
        var price = Number($(this).attr("data-price"));

        addItemToCart(name,price,1); // every time click the button, it will add an item

        displayCart();   // and display in the area we want; 这里 displayCart()写在 click 功能里面 表示 只在 这个点击按钮时， cart才会被显示， 在刚开始加载界面时，cart是看不到的！

    });


    $("#clear-cart").click(function (event){

        clearCart();
        displayCart();

    });


    function displayCart() {

        var cartArray = listCart();  // 首先， 获得 cartArray 从 listCart 函数中；

        var output = ""; // 这里变量用来存储下面 loop 得到 的output的 内容； 定义为 empty string, 相对于 0；

        for(var i in cartArray){    // 这里loop through every item in cartArray,

            output += "<li>"+cartArray[i].name
                +" "+cartArray[i].count
                +"x"+ cartArray[i].price
                +"="+ cartArray[i].total
                +"<button class='delete-item btn  btn-sm' data-name='" + cartArray[i].name+"'> x </button>" // 这里 class = '' 不能用双引号， 因为 外面用了""
                +"<button class='subtract-item btn  btn-sm' data-name='" + cartArray[i].name+"'> - </button>"
                +"<button class='plus-item btn btn-sm' data-name='" + cartArray[i].name+"'> + </button>"
                +"</li>" // += 指 add to the end of. 右侧是 创建的 string 将 会被 add to the 上面的 output 变量中；
        }


        $("#show-cart").html(output); // .html(output) 会把 displayCart() 的内容 放到 html 里 #show-cart的 位置， 并替换到里面任何已有的内容；

        $("#total-cart").html(totalPrice());

    }

    $("#show-cart").on("click",".delete-item", function(event){

        var name = $(this).attr("data-name");

        removeItemFromCartAll(name);

        displayCart();

    });


    $("#show-cart").on("click", ".subtract-item", function (event) {

        var name = $(this).attr("data-name");

        removeItemFromCart(name);

        displayCart();

    });


    $("#show-cart").on("click", ".plus-item", function(event){

        var name = $(this).attr("data-name");
        addItemToCart(name,0,1);
        displayCart(); // 必须有这个来 调用 来 update 数据 才行！

    });













// -------------------------- basic cart system   -------------------------------//

var cart = []; // 这里不写内容在里面，   //

//  这是定义 function的另一种方式， 相当于 function Item()    //

var Item = function (name, price, count) {

    this.name = name

    this.price = price

    this.count = count

};


//  -- this function job is to create a new item and add it to the cart   -- //

function addItemToCart(name, price, count){

    // use for () to loop each item in cart //
    for(var i in cart){
        if(cart[i].name === name){ // 如果发现 已存在的变量 i的 name 有 与 右侧现在传送来的 相同的  //
            cart[i].count += count;     // 对这个 现存的变量 i的 count 增加 count个 ；    //
            saveCart();   // 在return前 call 下 saveCart（）；
            return;   // 完毕， 终止该循环， 否则将 一直 增加 数量了！！！    //
        }
    }

    var item = new Item(name, price, count); // 前面的变量名 item 的 i 小写， new Item 的 I 是大写， 两个 item 不一样 //
    cart.push(item); // 把 刚 创建的 变量 item add 到 cart  ／／

    saveCart(); // 用于 后面 的保存功能， 因为每一次 改变都需要 保存 结果；

}


//  -- this function job is to remove one item from cart by name  -- //


function  removeItemFromCart(name) {
    for(var i in cart){
        if(cart[i].name === name){ // 这里用 == 或 === 都行， 都是 check 值， == 不care 数据类型； 但 = 不对， 表示 把右边值赋给 左边；
            cart[i].count --; // means count - 1;

            if(cart[i].count === 0){

                cart.splice(i,1,"none");
            }

            break;
        }
    }
    saveCart(); // 用于 后面 的保存功能， 因为每一次 改变都需要 保存 结果；
}


//  -- this function job is to remove all items from cart by name  -- //

function removeItemFromCartAll(name){


    for(var i in cart){

        if(cart[i].name === name){

            cart.splice(i,1);

            break
        }
    }
    saveCart(); // 用于 后面 的保存功能， 因为每一次 改变都需要 保存 结果；

}


//  -- this function job is to remove all items from cart！ everything！   -- //

function  clearCart() {

    cart = [];

    saveCart(); // 用于 后面 的保存功能， 因为每一次 改变都需要 保存 结果；

}

clearCart();       //  用于 激活 该 function， 但 结果不会显示出， 需要 下方 的console 来 输出 结果          //


//  ------------------ this function job is to return total count ------------------ //


function  countCart() {

    var totalCount = 0; // 每一次开始 loop， 值会从 0 开始 计算；

    for (var i in cart){

        totalCount += cart[i].count;

    }

    return totalCount; // 因为需要 电脑把计算的结果告知， 所以️该 function 内部 需要 写 return ！！！

}


//  ------------------ this function job is to return total cost ------------------ //


function  totalPrice() {

    var totalCost = 0;

    for(var i in cart){

        totalCost += cart[i].price * cart[i].count;   // 默认只 每一次 loop through cart， 都会 执行 该 操作；

    }

    return totalCost.toFixed(2); // toFixed() function is going to return a string; 会把小数点后 只保留 相应的 数!!!

}


//  ------------------ return the cart as a list ------------------ //



function listCart(){
    var cartCopy = [];  // a copy of our cartArray
    for(var i in cart){
        var item = cart[i];
        var itemCopy = {};
        for (var p in item){
            itemCopy[p]= item[p];
        }

        itemCopy.total = (item.price * item.count).toFixed(2); // 这里 把 前面 部分 加 括号， 是因为 要先 运算 乘法， 然后再去做 toFixed()的运算；

        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

//  --- saveCart function we want to save cart every time we make the edit in the local storage ---- //


function saveCart(){

    localStorage.setItem("shoppingCart",JSON.stringify(cart)); // setItem(名字，值)方法为存储数据
}

// localStorage.setItem("age",33);
//  localStorage.setItem("price",199); // 存储的对象 会显示在 abblication 功能下的 storage里的 local storage中；



//  --- loadCart function we want to save cart every time we make the edit in the local storage ---- //

function  loadCart() {

    cart = JSON.parse(localStorage.getItem("shoppingCart"));  // get "shoppingCart" with local storage here it is going to be a string,

    // we already converted the vaule of "shoppingCart" with Json string

    // Now we need to get the string back, 就是把 json的对象 转化为 数组 或 对象；
    // JSON.parse() 方法将数据转换为 JavaScript 对象。
}

    console.log(cart);     // 获取 cart //

    loadCart();



});
