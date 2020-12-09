// ------------------ Highlight Active Link ------------------ //
function activeLink(){
    //get document file name
    var url = document.location.href.match(/[^\/]+$/)[0]
    // var activePage = url;
    // $('.nav-item a').each(function () {
    //     var linkPage = this.href;
    //
    //     if (activePage == linkPage) {
    //         $(this).closest("li").addClass("active");
    //     }
    // });

    if(url = "index.html"){
        $('.js-nav-home a').addClass("active");
        $('.js-nav-projects a').removeClass("active");
        $('.js-nav-contact a').removeClass("active");
    } if (url = "index.html#contact") {
        $('.js-nav-home a').removeClass("active");
        $('.js-nav-projects a').removeClass("active");
        $('.js-nav-contact a').addClass("active");
    } if(url = "projects.html" || "parking.html"){
        $('.js-nav-home a').removeClass("active");
        $('.js-nav-projects a').addClass("active");
        $('.js-nav-contact a').removeClass("active");
    }
}

// -------------------- Load Common Files -------------------- //
function loadElements(){
    //load navigation
    $.get('common/nav.html',function(response){
        $('nav').html(response);
    });

    //load footer
    $.get('common/footer.html',function(response){
        $('footer').html(response);
    });
}

// ---------------- Disable Right Click on Img ---------------- //
function rightClick(){
    $("img").on("contextmenu",function(){
        return false;
    });
}

// ------------------ Hide Modal After Load ------------------ //
function hideModal(){
    $("#modal").css("opacity","0");
    $("#modal").css("pointer-events","none");
}

// -------------------- On Document Ready -------------------- //
$(document).ready(function(){
    activeLink();
    loadElements();
    rightClick();
    hideModal();
});
