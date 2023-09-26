//sub

    $(function () {

        $.get("./txt/tmpbox.txt", function (data) {

            console.log(data)

            $(".tmpbox").html(data);
        })
    });

    $(function(){
        $(".sub_info_menu_bar").children().click(function () {
            let i = $(this).index();
            console.log(i)
    
            $(this).css({ "background-color": "#f7f7f7" }).siblings().css({ "background-color": "white" })
            $(".book_info_wrap").children().eq(i).show().css("display", "block").siblings().hide()
        })
    })

    $(function(){

        var search;
        search = ["살인"]
    
        for (i = 0; i < search.length; i++) {
    
            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: search[i] },
                async: false,
                headers: { Authorization: "KakaoAK fd08f36bd9fb9e3c842768cd0731e0b4" }
            })
                .done(function (msg) {
    
                    var lab = document.getElementsByClassName("etc" + i);
    
                    for (var j = 0; j < lab.length; j++) {
    
                        $(".etc" + i).eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>");
                        $(".etc" + i).eq(j).append("<h3>" + msg.documents[j].title + "</h3>");
                        $(".etc" + i).eq(j).append("<h6>" + msg.documents[j].authors + "</h6>");
                    }
                });
        }
    })
