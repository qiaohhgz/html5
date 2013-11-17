(function($){
    $.fn.myButton= function(settings){
        //默认参数
        var defaultSettings = {

        }

        /* 合并默认参数和用户自定义参数 */
        settings = $.extend(defaultSettings,settings);

        return this.each(function(event){
            $(this).click(function(event){
                alert($(this).html());
            });
        });

    }

})(jQuery);