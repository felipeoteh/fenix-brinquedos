(function($){

    $(document).ready( function(){

        var html = $('html');

        // shipping added below cepbox
        function waitForElementToDisplay(selector, time) { 
            if(document.querySelector(selector)!=null) {
                $('.shipping-result').html($('.page-simula-frete'));
                return;
            }
            else {
                setTimeout(function() {
                    waitForElementToDisplay(selector, time);
                }, time); 
            }
        } 
         
        $('.botao-simular-frete, #shippingSimulatorButton').click(function() {  
        	if($('#cep1').val() !== "" &&  $('#cep2').val() !== ""){
	            $('.shipping-result').html('<p class="shipping-result__wait">Aguarde...</p>');
            	waitForElementToDisplay('.page-simula-frete', 1000);
        	}
        });

        // cart support class
        if($('.caixa-cupom').length){
            $('.caixa-cupom').parents('tr').addClass('cupom-wrapper');
        }

        if($('#calculoFrete').length){
            $('#calculoFrete').parents('tr').addClass('frete-wrapper');
        }

    });

    // 	gifts list fix
    if($(".page-lista, .page-print_lista").length){
        $(".lista-produtos").wrapAll("<div class='wrap-gifts'></div>");
    }
    if($.fn.jquery != '1.6.2'){
        // start slick on banner home
        $('.banner-home-slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            prevArrow: '<svg class="carousel-prev" width="30" height="30" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                '\t viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">\n' +
                '<style type="text/css">\n' +
                '\t.st0{fill:none;}\n' +
                '\t.st1{fill:#B9B9B9;}\n' +
                '</style>\n' +
                '<g id="seta-vitrine-esquerda" transform="translate(-293 -1134)">\n' +
                '\t<g id="Ret�ngulo_310" transform="translate(293 1134)">\n' +
                '\t\t<g>\n' +
                '\t\t\t<path class="st0" d="M16,0L16,0c8.8,0,16,7.2,16,16l0,0c0,8.8-7.2,16-16,16l0,0C7.2,32,0,24.8,0,16l0,0C0,7.2,7.2,0,16,0z"/>\n' +
                '\t\t</g>\n' +
                '\t\t<g>\n' +
                '\t\t\t<path class="st1" d="M16,32C7.2,32,0,24.8,0,16C0,7.2,7.2,0,16,0s16,7.2,16,16C32,24.8,24.8,32,16,32z M16,1C7.7,1,1,7.7,1,16\n' +
                '\t\t\t\ts6.7,15,15,15c8.3,0,15-6.7,15-15S24.3,1,16,1z"/>\n' +
                '\t\t</g>\n' +
                '\t</g>\n' +
                '\t<g id="direita" transform="translate(304.843 1143)">\n' +
                '\t\t<g id="right-arrow_1_" transform="translate(8.315 14.153) rotate(180)">\n' +
                '\t\t\t<g id="Grupo_317" transform="translate(0)">\n' +
                '\t\t\t\t<g id="Caminho_273">\n' +
                '\t\t\t\t\t<path class="st1" d="M8.1,6.5L1.8,0.2C1.5-0.1,1-0.1,0.7,0.2L0.2,0.7c-0.3,0.3-0.3,0.8,0,1.1l5.3,5.3l-5.3,5.3\n' +
                '\t\t\t\t\t\tc-0.3,0.3-0.3,0.8,0,1.1c0,0,0,0,0,0l0.5,0.5c0.3,0.3,0.8,0.3,1.1,0l6.3-6.3C8.4,7.3,8.4,6.8,8.1,6.5L8.1,6.5z"/>\n' +
                '\t\t\t\t</g>\n' +
                '\t\t\t</g>\n' +
                '\t\t</g>\n' +
                '\t</g>\n' +
                '</g>\n' +
                '</svg>',
            nextArrow: '<svg class="carousel-next" width="30" height="30" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                '\t viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">\n' +
                '<style type="text/css">\n' +
                '\t.st0{fill:none;}\n' +
                '\t.st1{fill:#B9B9B9;}\n' +
                '</style>\n' +
                '<g id="seta-vitrine-direita" transform="translate(-1595 -1134)">\n' +
                '\t<g id="Ret�ngulo_311" transform="translate(1627 1166) rotate(180)">\n' +
                '\t\t<path class="st0" d="M16,0L16,0c8.8,0,16,7.2,16,16l0,0c0,8.8-7.2,16-16,16l0,0C7.2,32,0,24.8,0,16l0,0C0,7.2,7.2,0,16,0z"/>\n' +
                '\t\t<g>\n' +
                '\t\t\t<path class="st1" d="M16,0c8.8,0,16,7.2,16,16c0,8.8-7.2,16-16,16S0,24.8,0,16C0,7.2,7.2,0,16,0z M16,31c8.3,0,15-6.7,15-15\n' +
                '\t\t\t\tS24.3,1,16,1C7.7,1,1,7.7,1,16S7.7,31,16,31z"/>\n' +
                '\t\t</g>\n' +
                '\t</g>\n' +
                '\t<g id="direita" transform="translate(1615.157 1157) rotate(180)">\n' +
                '\t\t<g id="right-arrow_1_" transform="translate(8.315 14.153) rotate(180)">\n' +
                '\t\t\t<g id="Grupo_317" transform="translate(0)">\n' +
                '\t\t\t\t<path id="Caminho_273" class="st1" d="M8.1,6.5L1.8,0.2C1.5-0.1,1-0.1,0.7,0.2L0.2,0.7c-0.3,0.3-0.3,0.8,0,1.1l5.3,5.3l-5.3,5.3\n' +
                '\t\t\t\t\tc-0.3,0.3-0.3,0.8,0,1.1c0,0,0,0,0,0l0.5,0.5c0.3,0.3,0.8,0.3,1.1,0l6.3-6.3C8.4,7.3,8.4,6.8,8.1,6.5L8.1,6.5z"/>\n' +
                '\t\t\t</g>\n' +
                '\t\t</g>\n' +
                '\t</g>\n' +
                '</g>\n' +
                '</svg>',

            responsive: [{
                breakpoint: 768
            }]
        });

        $('.ban-marcas').slick({
            slidesToShow: 6,
            slidesToScroll: 1,

            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    infinite: true,
                    arrows: false,
                    slidesToScroll: 2
                }
            }]

        });


        $('.ban-vantagens').slick({
            slidesToShow: 5,
            slidesToScroll: 1,

            responsive: [{
                breakpoint: 768,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    infinite: true,
                    arrows: false,
                    slidesToScroll: 1
                }
            }]

        });

        $('.regua-itens').slick({
            slidesToShow: 4,
            slidesToScroll: 2,

                prevArrow: '<svg class="carousel-prev" width="30" height="30" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                    '\t viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">\n' +
                    '<style type="text/css">\n' +
                    '\t.st0{fill:none;}\n' +
                    '\t.st1{fill:#B9B9B9;}\n' +
                    '</style>\n' +
                    '<g id="seta-vitrine-esquerda" transform="translate(-293 -1134)">\n' +
                    '\t<g id="Ret�ngulo_310" transform="translate(293 1134)">\n' +
                    '\t\t<g>\n' +
                    '\t\t\t<path class="st0" d="M16,0L16,0c8.8,0,16,7.2,16,16l0,0c0,8.8-7.2,16-16,16l0,0C7.2,32,0,24.8,0,16l0,0C0,7.2,7.2,0,16,0z"/>\n' +
                    '\t\t</g>\n' +
                    '\t\t<g>\n' +
                    '\t\t\t<path class="st1" d="M16,32C7.2,32,0,24.8,0,16C0,7.2,7.2,0,16,0s16,7.2,16,16C32,24.8,24.8,32,16,32z M16,1C7.7,1,1,7.7,1,16\n' +
                    '\t\t\t\ts6.7,15,15,15c8.3,0,15-6.7,15-15S24.3,1,16,1z"/>\n' +
                    '\t\t</g>\n' +
                    '\t</g>\n' +
                    '\t<g id="direita" transform="translate(304.843 1143)">\n' +
                    '\t\t<g id="right-arrow_1_" transform="translate(8.315 14.153) rotate(180)">\n' +
                    '\t\t\t<g id="Grupo_317" transform="translate(0)">\n' +
                    '\t\t\t\t<g id="Caminho_273">\n' +
                    '\t\t\t\t\t<path class="st1" d="M8.1,6.5L1.8,0.2C1.5-0.1,1-0.1,0.7,0.2L0.2,0.7c-0.3,0.3-0.3,0.8,0,1.1l5.3,5.3l-5.3,5.3\n' +
                    '\t\t\t\t\t\tc-0.3,0.3-0.3,0.8,0,1.1c0,0,0,0,0,0l0.5,0.5c0.3,0.3,0.8,0.3,1.1,0l6.3-6.3C8.4,7.3,8.4,6.8,8.1,6.5L8.1,6.5z"/>\n' +
                    '\t\t\t\t</g>\n' +
                    '\t\t\t</g>\n' +
                    '\t\t</g>\n' +
                    '\t</g>\n' +
                    '</g>\n' +
                    '</svg>',
                nextArrow: '<svg class="carousel-next" width="30" height="30" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                    '\t viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">\n' +
                    '<style type="text/css">\n' +
                    '\t.st0{fill:none;}\n' +
                    '\t.st1{fill:#B9B9B9;}\n' +
                    '</style>\n' +
                    '<g id="seta-vitrine-direita" transform="translate(-1595 -1134)">\n' +
                    '\t<g id="Ret�ngulo_311" transform="translate(1627 1166) rotate(180)">\n' +
                    '\t\t<path class="st0" d="M16,0L16,0c8.8,0,16,7.2,16,16l0,0c0,8.8-7.2,16-16,16l0,0C7.2,32,0,24.8,0,16l0,0C0,7.2,7.2,0,16,0z"/>\n' +
                    '\t\t<g>\n' +
                    '\t\t\t<path class="st1" d="M16,0c8.8,0,16,7.2,16,16c0,8.8-7.2,16-16,16S0,24.8,0,16C0,7.2,7.2,0,16,0z M16,31c8.3,0,15-6.7,15-15\n' +
                    '\t\t\t\tS24.3,1,16,1C7.7,1,1,7.7,1,16S7.7,31,16,31z"/>\n' +
                    '\t\t</g>\n' +
                    '\t</g>\n' +
                    '\t<g id="direita" transform="translate(1615.157 1157) rotate(180)">\n' +
                    '\t\t<g id="right-arrow_1_" transform="translate(8.315 14.153) rotate(180)">\n' +
                    '\t\t\t<g id="Grupo_317" transform="translate(0)">\n' +
                    '\t\t\t\t<path id="Caminho_273" class="st1" d="M8.1,6.5L1.8,0.2C1.5-0.1,1-0.1,0.7,0.2L0.2,0.7c-0.3,0.3-0.3,0.8,0,1.1l5.3,5.3l-5.3,5.3\n' +
                    '\t\t\t\t\tc-0.3,0.3-0.3,0.8,0,1.1c0,0,0,0,0,0l0.5,0.5c0.3,0.3,0.8,0.3,1.1,0l6.3-6.3C8.4,7.3,8.4,6.8,8.1,6.5L8.1,6.5z"/>\n' +
                    '\t\t\t</g>\n' +
                    '\t\t</g>\n' +
                    '\t</g>\n' +
                    '</g>\n' +
                    '</svg>',

            responsive: [{
                breakpoint: 600,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    infinite: true,
                    arrows: false,
                    slidesToScroll: 1
                }
            }]

        });

        // slick
        $('.produtos-carrossel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<img class="cursor-pointer w-8 h-8 absolute top-[calc(50%-1rem)] z-10" src="https://images.tcdn.com.br/files/1091184/themes/7/img/seta-esquerda.png"/>',
            nextArrow: '<img class="cursor-pointer w-8 h-8 absolute right-0 top-[calc(50%-1rem)] z-10" src="https://images.tcdn.com.br/files/1091184/themes/7/img/seta-direita.png"/>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
            ]
        });
    }

    $(document).ready(function () {

        $(window).scroll(function () {
          var topScroll = Number(jQuery(window).scrollTop());
          if (topScroll >= 500 ) {
              $("#barraTopo").css( {"display": "block","opacity": "1","visibility": "visible"});
              $("form-buscar").css( {"visibility": "hidden"});                     
          } else {
              $("#barraTopo").css( {"display": "block","opacity": "0","visibility": "hidden"});
              $("#form-buscar").css( {"visibility": "visible"}); 
          }
        
        });
    });


    // open and close filters of smartfilter in catalog and search pages
    $('.open-filters').click(function() {
        $('.filters-list').slideToggle();
    });

})(jQuery);

// menu mobile
(function(){
    var btnMenu = document.getElementsByClassName('trigger-menu')[0];
    var html = document.getElementsByTagName('html')[0];
    var backdropMobile = document.getElementsByClassName('menu-mobile-backdrop')[0];
    var closeMenu = document.getElementById('close-menu-mobile');

    btnMenu.addEventListener('touchend', function(){
        html.classList.add('menu-open');
    });

    html.addEventListener('touchend', function(e){
        console.log(e.target);
        if(e.target == backdropMobile || e.target == closeMenu){
            this.className = this.className.replace(new RegExp('(^|\\b)' + 'menu-open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    });
})();