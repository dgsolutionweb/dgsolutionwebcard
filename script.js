$(document).ready(function() {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Configurar particles.js
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
                value: 0.5,
                random: true,
                animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            }
        },
        retina_detect: true
    });

    // Animação do nome da empresa
    const companyName = new Typed('#company-name', {
        strings: ['DGSolution<span class="text-warning">WEB</span>'],
        typeSpeed: 100,
        showCursor: false,
        onComplete: (self) => {
            $('#company-name').css('opacity', 1);
        }
    });

    // Animação das palavras do slogan
    $('.slogan-word').each(function(index) {
        $(this)
            .css({
                'opacity': 0,
                'transform': 'translateY(20px)'
            })
            .delay(2000 + (index * 200))
            .animate({
                'opacity': 1,
                'transform': 'translateY(0)'
            }, 500);
    });

    // Efeito hover nas palavras do slogan
    $('.slogan-word').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.1)',
                'text-shadow': '0 0 15px rgba(255,255,255,0.5)'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'text-shadow': '0 0 10px rgba(255,255,255,0.1)'
            });
        }
    );

    // Melhore o efeito hover dos botões
    $('.btn-glass').hover(
        function() {
            const $icon = $(this).find('i');
            const $text = $(this).contents().filter(function() {
                return this.nodeType === 3;
            });
            
            $icon.css({
                'transform': 'scale(1.2) rotate(5deg)',
                'text-shadow': '0 0 10px rgba(255,255,255,0.5)'
            });
            
            $(this).css({
                'letter-spacing': '1px'
            });
            
            // Adiciona um efeito de brilho
            $(this).append('<div class="btn-shine"></div>');
            setTimeout(() => {
                $('.btn-shine').remove();
            }, 500);
        },
        function() {
            const $icon = $(this).find('i');
            const $text = $(this).contents().filter(function() {
                return this.nodeType === 3;
            });
            
            $icon.css({
                'transform': 'scale(1) rotate(0deg)',
                'text-shadow': 'none'
            });
            
            $(this).css({
                'letter-spacing': 'normal'
            });
        }
    );

    // Compartilhar cartão
    $('.share-btn').click(function(e) {
        e.preventDefault();
        
        if (navigator.share) {
            navigator.share({
                title: 'DGSolution WEB - Cartão Digital',
                text: 'Confira meu cartão digital!',
                url: window.location.href
            })
            .then(() => console.log('Compartilhado com sucesso'))
            .catch((error) => console.log('Erro ao compartilhar:', error));
        } else {
            // Fallback para navegadores que não suportam Web Share API
            const dummy = document.createElement('input');
            document.body.appendChild(dummy);
            dummy.value = window.location.href;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
            
            // Feedback visual
            const originalText = $(this).html();
            $(this).html('<i class="fas fa-check"></i> Link Copiado!');
            setTimeout(() => {
                $(this).html(originalText);
            }, 2000);
        }
    });

    // Efeito parallax suave
    $(window).on('mousemove', function(e) {
        const moveX = (e.pageX * -1 / 25);
        const moveY = (e.pageY * -1 / 25);
        $('.profile-card').css({
            transform: `translate3d(${moveX}px, ${moveY}px, 0)`
        });
    });

    // Animação de entrada
    $('.profile-card').css({
        opacity: 0,
        transform: 'translateY(20px)'
    }).animate({
        opacity: 1,
        transform: 'translateY(0)'
    }, 1000);
}); 