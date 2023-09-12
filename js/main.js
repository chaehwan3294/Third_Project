//


$(function(){

    var search;
    search = ["경제", "영어", "고전", "인테리어", "운동"]

    for (i = 0; i < search.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search[i] },
            async: false,
            headers: { Authorization: "KakaoAK fd08f36bd9fb9e3c842768cd0731e0b4" }
        })
            .done(function (msg) {

                var lab = document.getElementsByClassName("box" + i);

                for (var j = 0; j < lab.length; j++) {

                    $(".box" + i).eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>");
                    $(".box" + i).eq(j).append("<h3>" + msg.documents[j].title + "</h3>");
                    $(".box" + i).eq(j).append("<h6>" + msg.documents[j].authors + "</h6>");
                }
            });
    }
    $(".mid_bottom_ul > ul > li").click(function () {
        let i = $(this).index();

        $(this).css({ "background-color": "black", "color": "white" }).siblings().css({ "background-color": "white", "color": "black" })
        $(".mid_bottom_lab").eq(i).show().css("display", "flex").siblings(".mid_bottom_lab").hide()
    });

})

//

$(function(){
    $(".bot_menu_title_wrap").children().click(function () {
        let i = $(this).index();
        console.log(i)

        $(this).css({ "background-color": "#f7f7f7" }).siblings().css({ "background-color": "white" })
        $(".bot_menu_place").children().eq(i).show().css("display", "flex").siblings().hide()
    })

    //listen
    $(".listenbox_num > ul > li").click(function () {
        let i = $(this).index();

        $(this).css({ "background-color": "black", "color": "white" }).siblings().css({ "background-color": "#f7f7f7", "color": "black" })
        $(".listenbox").eq(i).show().css("display", "flex").siblings(".listenbox").hide()
        $(".listen_r_img").eq(i).show().css("display", "block").siblings(".listen_r_img").hide()
    });

    //viewer
    $(".viewerbox_num > ul > li").click(function () {
        let i = $(this).index();

        $(this).css({ "background-color": "black", "color": "white" }).siblings().css({ "background-color": "#f7f7f7", "color": "black" })
        $(".viewerbox").eq(i).show().css("display", "flex").siblings(".viewerbox").hide()
        $(".viewer_r_img").eq(i).show().css("display", "block").siblings(".viewer_r_img").hide()
    });
})

$(function(){
    var search;
    search=["이상","이","스티븐 킹","베르나르 베르베르","댄 브라운"]

    for(i=0;i<search.length;i++){

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: search[i] },
        async: false,
        headers: { Authorization: "KakaoAK fd08f36bd9fb9e3c842768cd0731e0b4" }
    })
    .done(function (msg) {

    var lab = document.getElementsByClassName("lab"+i);

    for (var j = 0; j < lab.length; j++) {

    $(".lab"+i).eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>");
    $(".lab"+i).eq(j).append("<h3>" +msg.documents[j].title + "</h3>");
    $(".lab"+i).eq(j).append("<h6>" + msg.documents[j].authors + "</h6>");
        }
    });
    }
})

// title 올라오는 효과

$(function(){
    
        $('.slide_box').css("transform", "translateY(0px)").css("opacity", "1");
        $('.slide_logo').css("transform", "translateY(0px)").css("opacity", "1");
    
    $(window).scroll(function () {
        let wdb = $(this).scrollTop();
        //스크롤시 박스 올라오는 효과
        let box1 = $('#slider').offset().top;
        let box2 = $('section').offset().top;
        let box3 = $('#mid_banner').offset().top;
        let box4 = $('#index').offset().top;
        let box5 = $('#mid_bottom').offset().top;
        let box6 = $('#mid_ad').offset().top;
        let box7 = $('#bottom_banner').offset().top;
        let box8 = $('#bottom_menu').offset().top;
        let box9 = $('#review').offset().top;

        // console.log(box1)
        if (wdb > box1+ 600) {
            $('.slide_box').css("transform", "translateY(100px)").css("opacity", "0");
        } else {
            $('.slide_box').css("transform", "translateY(0px)").css("opacity", "1");
        }

        if (wdb > box1 +600) {
            $('.slide_logo').css("transform", "translateY(100px)").css("opacity", "0");
        } else {
            $('.slide_logo').css("transform", "translateY(0px)").css("opacity", "1");
        }


        if (wdb > box2 - 700) {
            $('.section_title').css("transform", "translateY(0px)").css("opacity", "1");
        }  else {
            $('.section_title').css("transform", "translateY(100px)").css("opacity", "0");
        }
        if (wdb > box2 + 200){ 
            $('.section_title').css("transform", "translateY(100px)").css("opacity", "0");
        };

        if (wdb > box3 - 700) {
            $('.mid_banner_title').css("transform", "translateY(0px)").css("opacity", "1");
        } else {
            $('.mid_banner_title').css("transform", "translateY(100px)").css("opacity", "0");
        }
        if (wdb > box3 + 200){ 
            $('.mid_banner_title').css("transform", "translateY(100px)").css("opacity", "0");
        };

        if (wdb > box4 - 750) {
            $('.index_title').css("transform", "translateY(0px)").css("opacity", "1");
        } else {
            $('.index_title').css("transform", "translateY(100px)").css("opacity", "0");
        }
        if (wdb > box4 + 230){ 
            $('.index_title').css("transform", "translateY(100px)").css("opacity", "0");
        };

        if (wdb > box5 - 750) {
            $('.mid_bottom_title').css("transform", "translateY(0px)").css("opacity", "1");
        } else {
            $('.mid_bottom_title').css("transform", "translateY(100px)").css("opacity", "0");
        }
        if (wdb > box5 + 230){ 
            $('.mid_bottom_title').css("transform", "translateY(100px)").css("opacity", "0");
        };

        if (wdb > box6 - 750) {
            $('.ad_title').css("transform", "translateY(0px)").css("opacity", "1");
        } else {
            $('.ad_title').css("transform", "translateY(100px)").css("opacity", "0");
        }
        if (wdb > box6 + 230){ 
            $('.ad_title').css("transform", "translateY(100px)").css("opacity", "0");
        };

        if (wdb > box7 - 750) {
            $('.bot_banner_title').css("transform", "translateY(0px)").css("opacity", "1");
        } else {
            $('.bot_banner_title').css("transform", "translateY(100px)").css("opacity", "0");
        }
        if (wdb > box7 + 250){ 
            $('.bot_banner_title').css("transform", "translateY(100px)").css("opacity", "0");
        };

        if (wdb > box8 - 750) {
            $('.listen_u_title').css("transform", "translateY(0px)").css("opacity", "1");
        } else {
            $('.listen_u_title').css("transform", "translateY(100px)").css("opacity", "0");
        }
        if (wdb > box8 + 600){ 
            $('.listen_u_title').css("transform", "translateY(100px)").css("opacity", "0");
        };

        if (wdb > box8 - 750) {
            $('.place_listen_r').css("transform", "translateY(0px)").css("opacity", "1");
        } else {
            $('.place_listen_r').css("transform", "translateY(100px)").css("opacity", "0");
        }
        if (wdb > box8 + 600){ 
            $('.place_listen_r').css("transform", "translateY(100px)").css("opacity", "0");
        };

        if (wdb > box8 - 750) {
            $('.viewer_u_title').css("transform", "translateY(0px)").css("opacity", "1");
        } else {
            $('.viewer_u_title').css("transform", "translateY(100px)").css("opacity", "0");
        }
        if (wdb > box8 + 600){ 
            $('.viewer_u_title').css("transform", "translateY(100px)").css("opacity", "0");
        };

        if (wdb > box8 - 750) {
            $('.place_viewer_r').css("transform", "translateY(0px)").css("opacity", "1");
        } else {
            $('.place_viewer_r').css("transform", "translateY(100px)").css("opacity", "0");
        }
        if (wdb > box8 + 600){ 
            $('.place_viewer_r').css("transform", "translateY(100px)").css("opacity", "0");
        };

        if (wdb > box9 - 750) {
            $('.review_text').css("transform", "translateY(0px)").css("opacity", "1");
        } else {
            $('.review_text').css("transform", "translateY(100px)").css("opacity", "0");
        }
    });
})

$(function(){
    $(window).scroll(function () {
        let wdb = $(this).scrollTop();

        let img1 = $('#mid_ad').offset().top;

        if (wdb > img1 - 700) {
            $('.ad_img > img:nth-child(1)').css({"transform": "scale(1) translateY(0)"}).css("opacity", "1");
        }  else {
            $('.ad_img > img:nth-child(1)').css({"transform": "scale(0) translateY(200px)"}).css("opacity", "0");
        }
        if (wdb > img1 + 700){ 
            $('.ad_img > img:nth-child(1)').css({"transform": "scale(0) translateY(200px)"}).css("opacity", "0");
        };

        if (wdb > img1 - 700) {
            $('.ad_img > img:nth-child(2)').css({"transform": "scale(1) translateY(0)"}).css("opacity", "1");
        }  else {
            $('.ad_img > img:nth-child(2)').css({"transform": "scale(0) translateY(200px)"}).css("opacity", "0");
        }
        if (wdb > img1 + 700){ 
            $('.ad_img > img:nth-child(2)').css({"transform": "scale(0) translateY(200px)"}).css("opacity", "0");
        };

        if (wdb > img1 - 700) {
            $('.ad_img > img:nth-child(5)').css({"transform": "scale(1) translateY(0)"}).css("opacity", "1");
        }  else {
            $('.ad_img > img:nth-child(5)').css({"transform": "scale(0) translateY(200px)"}).css("opacity", "0");
        }
        if (wdb > img1 + 700){ 
            $('.ad_img > img:nth-child(5)').css({"transform": "scale(0) translateY(200px)"}).css("opacity", "0");
        };

        if (wdb > img1 - 700) {
            $('.ad_img > img:nth-child(6)').css({"transform": "scale(1) translateY(0)"}).css("opacity", "1");
        }  else {
            $('.ad_img > img:nth-child(6)').css({"transform": "scale(0) translateY(200px)"}).css("opacity", "0");
        }
        if (wdb > img1 + 700){ 
            $('.ad_img > img:nth-child(6)').css({"transform": "scale(0) translateY(200px)"}).css("opacity", "0");
        };
    });
})