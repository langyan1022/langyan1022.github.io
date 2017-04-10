$(function(){
    String.prototype.trim=function(){
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
    window.name=window.name||"";

    var $loader=$('#loader');

    var winWidth=$(window).width();
    var winHeight=$(window).height();
    var bgOrginWidth=640;
    var bgOrignHeight=3000;
    var bgHeight=0;

    var nameOrginTop=1410;
    var nameTop=0;
    if(winWidth>bgOrginWidth){
        bgHeight=bgOrginWidth/winWidth*bgOrignHeight;
        nameTop=bgOrginWidth/winWidth*nameOrginTop;
    }else{
        bgHeight=winWidth/bgOrginWidth*bgOrignHeight;
        nameTop=winWidth/bgOrginWidth*nameOrginTop;
    }

    $loader.hide();

    $("#main").css({"width":winWidth,"height":bgHeight});
    $("#screen1").css({"width":winWidth});
    $("#name").css({"top":nameTop});
    $("#screen1").css({"height":winHeight});


    $(document).on('click','#btnName',function(){

        window.name= $('#inputName').val().trim();
        if(window.name==''){
            alert("(づ￣3￣)づ╭❤～，告诉下我你的名字呗");
            $('#inputName').focus();
            return;
        }
        if(window.name.length>4||window.name.length<2){
            alert("(づ￣3￣)づ╭❤～，别捣乱");
            $('#inputName').val("").focus();
            return;
        }
        var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
        if(!reg.test(window.name)){
            alert("(づ￣3￣)づ╭❤～，别捣乱");
            $('#inputName').val("").focus();
            return;
        }
        $loader.show();

        $("#screen1").hide('slow');
        $("#screen2").show('slow');
        $("#name").text(window.name);
        setTimeout(function() {

            $loader.hide('slow');
        }, 3000);


    })
});
