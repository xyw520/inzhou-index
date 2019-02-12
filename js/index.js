$(document).ready(function () {

    $('#setHome').click(function () {
        setHome(this, window.location)

    })

    $('#setCollect').click(function () {
        addFavorite(window.location,document.title)

    })

    function setHome(obj, url) {
        try {
            obj.style.behavior = 'url(#default#homepage)';
            obj.setHomePage(url);
        } catch (e) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                } catch (e) {
                    alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
                }
            } else {
                alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + url + "】设置为首页。");
            }
        }
    }

    function addFavorite(sURL, sTitle) {
        var sTitle = '';
        var sURL = location.href;
        if (window.sidebar) return true;
        try {
            window.external.addFavorite(sURL, sTitle);
        } catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
        return false;
    }


    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
   


});