jQuery(document).ready(function(){
    jQuery(".bar").click(function(){
        jQuery(".nav-section ul").slideToggle(1000)
    })
    jQuery(window).resize(function () {
        var screenSize = jQuery(window).width();
        if (screenSize > 480) {
            jQuery(".main-menu ul").removeAttr("style");
        }
        /*
        else{
            jQuery(".main-menu ul").hide();
        }
        */
    });
});