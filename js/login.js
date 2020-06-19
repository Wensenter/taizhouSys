function checkoutLogin(el){
    $(el).addClass('cur-type').siblings('li').removeClass('cur-type')
    let index = $(el).index()
    $('form').eq(index).show().siblings('form').hide()
}