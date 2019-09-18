$(function () {
   //1.监听窗口的改变
    $(window).on('resize', function () {
        //1.1获取窗口的宽度
        let clientW = $(window).width();
        //1.2设置临界值
        let isShowBigImg = clientW >= 800;
        //1.3获取所有的item
        let $allItems = $('.item');
        //1.4遍历
        $allItems.each(function (index, item) {
            //1.4.1取出图片路径
            let src = isShowBigImg ? $(item).data('lg-img') : $(item).data('sm-img');
            let imgUrl = 'url("'+src+'")';

            //1.4.2设置背景
            $(item).css({
                backgroundImage:imgUrl
            });
            //1.4.3设置img标签
            if (!isShowBigImg) {
                let $img = '<img src="'+src+'" alt="">';
                //empty将之前的都清空
                $(item).empty().append($img);
            } else {
                $(item).empty();
            }

        })
    });

    $(window).trigger('resize');

    //工具提示
    $('[data-toggle="tooltip"]').tooltip();


    //導航處理
    let $alllis = $('#lk_nav li');
    $($alllis[2]).on('click', function () {
        // alert('111')
        $('html, body').animate({scrollTop: $('#lk_hot').offset().top}, 1000);
    })
});
