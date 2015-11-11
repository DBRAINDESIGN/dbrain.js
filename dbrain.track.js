
dbrain.track = function(document){
    var trackData = {
        screenSize: {
            w: dbrain.getViewportWidth(),
            h: dbrain.getViewportHeight()
        },
        platform: dbrain.device.inMobile?'mobile':'desktop',
        currentUrl: document.URL
    };
    return {
        init: function(){
            
            if (Cookies.get('dbrtrk') == null ){
                dbrain.track.track();
            }
            if (Cookies.get('dbrprv') == null ){
                dbrain.track.privacy_box();
            }
        },
        track:function(){
            $.ajax({
                type:'post',
                url:'{setup tracking url}',
                data:{trackData:trackData},
                success:function(data){
                    if(data.saved=='ok'){
                        Cookies.set('dbrtrk', true, { expires: 10 });
                    }
                }
            });
            
        },
        privacy_box: function(){
        	var site_name = 'my site name';
            var privacyText = "This Site: "+site_name+", uses cookies to store information on your computer. Some are essential to make "+site_name+" work; other help us improve the user experience. By using Let's Ink, you consent to the placement of these cookies. <a href='/privacy'>Read our Privacy Policy to learn more.</a> "
            $("body").append("<div class='privacy_box'><p>"+privacyText+"</p><a class='acceptCookie'>I accept</a></div>");
            var $privacy_box = $("body").find(".privacy_box");
            $privacy_box
                .css({
                    "position":"fixed",
                    "bottom":"0",
                    "width":"100%",
                    "padding":"20px",
                    "background":"#1b1b1b",
                    "color":"white",
                    "font-weight":"normal"
                })
            .find("a")
                .css({
                    "color":"#b9a664",
                    "text-decoration":"underline"
                });

            $(".acceptCookie").click(function(){
                dbrain.track.cookie_accept( $privacy_box );
            });
        },
        cookie_accept:function(box){
            Cookies.set('dbrprv', true, { expires: 10 });
            box.fadeOut();
        }
    }
}(document);

$(document).ready(function(){
    dbrain.track.init();
});
