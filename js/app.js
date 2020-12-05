// -------------------- Load Common Files -------------------- //
function loadElements(){
    $.get('common/nav.html',function(response){
        $('nav').html(response);
    });

    $.get('common/footer.html',function(response){
        $('footer').html(response);
    });
}

// -------------------- On Document Ready -------------------- //
$(document).ready(function(){
    loadElements();
});
