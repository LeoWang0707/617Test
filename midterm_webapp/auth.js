function handleSignUp() {


    //step1 :Get the email/password entered by user

    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;

    // Step2: Validate

    if(email.length<4){

        alert("Please enter a vaild email address");

        return;
    }

    if(password.length<4){
        alert("Please enter a stronger password" );

        return;

    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(

            function(){
                alert("User Create" );
            }
        )

        .catch(

            function(error){
                alert("error.message");
            }
        )
}

function handleSignIn() {

    //Step 1 : Get the email/passwd entered by user
    var email = document.getElementById('form-email').value;
    var password = document.getElementById('form-password').value;

    //Step2 : Sign them in
    firebase.auth().signInWithEmailAndPassword(email,password)
        .then(

            function(){
                window.location.href="http://wanglanglin.com/aau/wnm608/617/midterm_webapp/index.html"
            }
        )
        .catch(
            function(error){
                alert(error.message)
            }
        )
}

function handleSignOut(){  //step2: Sign them in

    firebase.auth().signOut()

        .then(function () {

            alert("signout success");
        })

        .catch(function (error) {
            alert(error.message)
        });
}


// add facebook login

function handleFBLogin(){

    if(!firebase.auth().currentUser){ // 如果 检测到 firebase 里 没有 当前 这个facebook的用户信息， 则执行下面 的 新建 new fb 用户;

        var provider = new firebase.auth.FacebookAuthProvider();    //provider.addScope('displayNmae');

        //provider.addScope('displayName');  该代码是 向服务器 发 请求， 希望 获得 用户名， 但 其实服务器 不会 return 给 你， 可以 不写；

        firebase.auth().signInWithPopup(provider)

            .then(function(result) {
                var token = result.credential.accessToken;

                var user = result.user;

                console.log(user);

                alert(user.displayName);

                window.location.href="http://wanglanglin.com/aau/wnm608/617/midterm_webapp/index.html"

                // window.location.href="http://wanglanglin.com/aau/wnm608/617/midterm_webapp/index.html"

              //       //  console.log(result);    // alert(user.email)  // window.location.href = "http://wanglanglin.com/aau/wnm608/617/week4/week7.html";


            })

            .catch(function(error){

                alert(error.message)
            });

    }

    else{

        handleSignOut();  // 如果 检测到 已有 存在 用户， 则 返回 上面 执行   handleSignOut() 函数， 得到 signout success！
    }
}



// add google login

function handleGoogleLogin(){

    if(!firebase.auth().currentUser){ // 如果 检测到 firebase 里 没有 当前 这个facebook的用户信息， 则执行下面 的 新建 new fb 用户;

        var provider = new firebase.auth.GoogleAuthProvider();    //provider.addScope('displayNmae');

        firebase.auth().signInWithPopup(provider)

            .then(function(result) {
                var token = result.credential.accessToken;

                var user = result.user;

                console.log(user);

                window.location.href="http://wanglanglin.com/aau/wnm608/617/midterm_webapp/index.html"

            })

            .catch(function(error){

                alert(error.message)
            });

    }

    else{

        handleSignOut();  // 如果 检测到 已有 存在 用户， 则 返回 上面 执行   handleSignOut() 函数， 得到 signout success！
    }

}