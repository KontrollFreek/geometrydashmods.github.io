function readyFn( jQuery ) {
    $(".dropdown-trigger").dropdown({ hover: false });
}

$(document).ready(function(){
    $('.sidenav').sidenav();
});

$( document ).ready( readyFn );