function checkoutLogin(el){
    $(el).addClass('cur-type').siblings('li').removeClass('cur-type')
    let index = $(el).index()
    $('form').eq(index).show().siblings('form').hide()
}

function checkoutPsw(el){
    $(el).hide().siblings('.psw-pic').show()
    if($(el).hasClass('hide-psw')){
        $('.psw').attr('type','text')
    }else if($(el).hasClass('show-psw')){
        $('.psw').attr('type','password')
    }
}