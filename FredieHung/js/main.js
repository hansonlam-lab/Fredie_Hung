$(document).ready(function(){
    $nav = $('.nav');

    $toggleCollapse = $('.toggle-collapse');

    /* click event*/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');

    })
});