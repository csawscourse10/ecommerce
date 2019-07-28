$(document).ready(function(){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/products',
        success: function(json) {
            console.log(json);
            var type= "";
            for(var i=0;i<json.resp.length;i++){
                type = json.resp[i].type;
                var name = json.resp[i].name;
                var cost = json.resp[i].cost;
                var clone = $('.copy .product').clone();
                clone.find(".name").html(name);
                clone.find('.cost').html(cost);
                clone.find('.product-inside').mouseover(function() {
                    $(this).find('.overlay-wrap').removeClass("hidden");
                });
                clone.find('.product-inside').mouseout(function() {
                    $(this).find('.overlay-wrap').addClass("hidden");
                });
                clone.find('.add-cart-btn').click(function() {
                    $('.toast-msg').fadeIn('slow');
                    $('.toast-msg').fadeOut(3000);
                });
                if(json.resp[i].img != undefined){
                    clone.find('.product-img').attr('src', json.resp[i].img);
                }
                $('.resp-body').append(clone);
            }
            type = type.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });
            console.log(type)
            $('.resp-head .type').html(type);
            $('.loading').css('display','none');
        },
        error: function(err) {
            console.log(err);
        }
    });
});

