<!doctype html><html lang="ru"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><base href="/landing/"><title>WorldSciPubl</title><meta name="facebook-domain-verification" content="gta4edmceapujfhozlol4f48p2ack2"/><script>(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          'gtm.start': new Date().getTime(),
          event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-NF7Q6BJ');</script><script>!(function () {
        var t = document.createElement('script');
        (t.type = 'text/javascript'),
          (t.async = !0),
          (t.src = 'https://vk.com/js/api/openapi.js?162'),
          (t.onload = function () {
            VK.Retargeting.Init('VK-RTRG-837729-8F4Pd'),
              VK.Retargeting.Hit();
          }),
          document.head.appendChild(t);
      })();</script><script>!(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ?
            n.callMethod.apply(n, arguments) :
            n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/en_US/fbevents.js'
      );
      fbq('init', '2365479983546227');
      fbq('track', 'PageView');</script><script>var yaParams = {
        ip: "<?=$_SERVER['REMOTE_ADDR'];?>",
      };</script><script>(function (d, w, c) {
        (w[c] = w[c] || []).push(function () {
          try {
            w.yaCounter50181778 = new Ya.Metrika2({
              id: 50181778,
              params: window.yaParams,
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
            });
          } catch (e) {}
        });

        var n = d.getElementsByTagName('script')[0],
          s = d.createElement('script'),
          f = function () {
            n.parentNode.insertBefore(s, n);
          };
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://mc.yandex.ru/metrika/tag.js';

        if (w.opera == '[object Opera]') {
          d.addEventListener('DOMContentLoaded', f, false);
        } else {
          f();
        }
      })(document, window, 'yandex_metrika_callbacks2');</script><script async src="https://www.googletagmanager.com/gtag/js?id=UA-125087961-1"></script><script>window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      gtag('js', new Date());
      gtag('config', 'UA-125087961-1');</script><script>var utmCookie = {
        cookieNamePrefix: '_uc_',
        utmParams: [
          'utm_source',
          'utm_medium',
          'utm_campaign',
          'utm_term',
          'utm_content',
        ],
        cookieExpiryDays: 365,
        createCookie: function (c, d, e) {
          if (e) {
            var b = new Date();
            b.setTime(b.getTime() + e * 24 * 60 * 60 * 1000);
            var a = '; expires=' + b.toGMTString();
          } else {
            var a = '';
          }
          document.cookie =
            this.cookieNamePrefix + c + '=' + d + a + '; path=/';
        },
        readCookie: function (b) {
          var e = this.cookieNamePrefix + b + '=';
          var a = document.cookie.split(';');
          for (var d = 0; d < a.length; d++) {
            var f = a[d];
            while (f.charAt(0) == ' ') {
              f = f.substring(1, f.length);
            }
            if (f.indexOf(e) == 0) {
              return f.substring(e.length, f.length);
            }
          }
          return null;
        },
        eraseCookie: function (a) {
          this.createCookie(a, '', -1);
        },
        getParameterByName: function (b) {
          b = b.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
          var a = '[\\?&]' + b + '=([^&#]*)';
          var d = new RegExp(a);
          var c = d.exec(window.location.search);
          if (c == null) {
            return '';
          } else {
            return decodeURIComponent(c[1].replace(/\+/g, ' '));
          }
        },
        utmPresentInUrl: function () {
          var d = false;
          for (var a = 0; a < this.utmParams.length; a++) {
            var c = this.utmParams[a];
            var b = this.getParameterByName(c);
            if (b != '' && b != undefined) {
              d = true;
            }
          }
          return d;
        },
        writeUtmCookieFromParams: function () {
          for (var a = 0; a < this.utmParams.length; a++) {
            var c = this.utmParams[a];
            var b = this.getParameterByName(c);
            this.createCookie(c, b, this.cookieExpiryDays);
          }
        },
        writeCookieOnce: function (a, c) {
          var b = this.readCookie(a);
          if (!b) {
            this.createCookie(a, c, this.cookieExpiryDays);
          }
        },
        writeReferrerOnce: function () {
          value = document.referrer;
          if (value === '' || value === undefined) {
            this.writeCookieOnce('referrer', 'direct');
          } else {
            this.writeCookieOnce('referrer', value);
          }
        },
        referrer: function () {
          return this.readCookie('referrer');
        },
      };
      utmCookie.writeReferrerOnce();
      if (utmCookie.utmPresentInUrl()) {
        utmCookie.writeUtmCookieFromParams();
      }</script><script src="//widget.manychat.com/369241_e8d30.js" defer="defer"></script><script src="https://mccdn.me/assets/js/widget.js" defer="defer"></script><link rel="icon" href="favicon.ico"><script defer="defer" src="js/promocode.a9002c01c6cf33680979.js"></script><link href="css/promocode.css" rel="stylesheet"></head><body><header class="header header_bg_white" id="header"><div class="header__inner"><a target="_blank" class="header__logo header-logo" href="/"><img class="header-logo__img" src="images/content/logo/logo_black.svg" alt="Logo: World Sci Publ"><h3 class="header-logo__label text text_color_gray-blue text_weight_bold">Publication service<br>World Sci Publ</h3></a><ul class="header__action"><li class="header__action-item header__action-item_call"><a target="_blank" class="call-btn" id="header-call-btn" href="tel:+74951277926" data-formsended="call_1"><img class="call-btn__img" src="images/content/icons/phone-call.svg" alt="phone"> <span class="text call-btn__label">+7 (495) 127 - 79 - 26</span></a></li><li class="header__action-item"><button class="burger js-burger"><span class="burger__item"></span> <span class="burger__item"></span> <span class="burger__item"></span></button></li></ul></div><div class="drawer js-drawer"><div class="drawer__overlay js-drawer-overlay"></div><div class="drawer__sidebar drawer__sidebar_pos_right"><nav class="navbar navbar_bg_white"><div class="navbar__inner"><h3 class="navbar__title text text_weight_bold text_color_gray-blue text_size_accent">Меню сервиса World Sci Publ</h3><ul class="navbar__links nav-links"><li class="nav-links__item"><a class="button button_menu text text_color_gray-blue" href="/audit/" target="_blank">⚙️ Подробный аудит статьи с рецензией</a></li><li class="nav-links__item"><button class="button button_menu text text_color_gray-blue" data-show-popup="1" data-step="1" data-formsended="submit_application_">⏱ Сроки и стоимость публикации</button></li><li class="nav-links__item"><a class="button button_menu text text_color_gray-blue" href="/promocode" target="_blank">💵 Промокод 100$ на первую публикацию</a></li><li class="nav-links__item"><a class="button button_menu text text_color_gray-blue" href="/cooperation" target="_blank">✍🏼 Вакансия “редактор научных статей”</a></li></ul><ul class="navbar__cards"><li class="navbar__card navbar-card"><a target="_blank" href="/" class="navbar-card__link"><img class="navbar-card__img" src="images/content/menu/site.svg" alt="Личный кабинет"> <span class="navbar-card__label text">Сайт</span></a></li><li class="navbar__card navbar-card"><a target="_blank" href="/cabinet/" class="navbar-card__link"><img class="navbar-card__img" src="images/content/menu/cabinet.svg" alt="Личный кабинет"> <span class="navbar-card__label text">Личный кабинет</span></a></li><li class="navbar__card navbar-card"><a target="_blank" href="https://journal.worldscipubl.com" class="navbar-card__link"><img class="navbar-card__img" src="images/content/menu/blog.svg" alt="Блог"> <span class="navbar-card__label text">Блог</span></a></li><li class="navbar__card navbar-card"><a target="_blank" href="https://taplink.cc/world.sci.publ" class="navbar-card__link"><img class="navbar-card__img" src="images/content/menu/favorites.svg" alt="Избранное"> <span class="navbar-card__label text">Избранное</span></a></li></ul><div class="navbar__banner navbar-banner"><h3 class="navbar-banner__title text text_color_gray-blue text_size_accent text_weight_bold">Чат-бот</h3><h4 class="navbar-banner__subtitle text text_color_gray-blue text_weight_bold">Робот помощник автоматически предоставит:</h4><p class="navbar-banner__description text text_color_gray-blue">– доступ к полезным материалам;<br>– информацию о продукте;<br>– чат со специалистом.<br></p><a class="navbar-banner__btn button button_secondary button_icon_fb" href="https://m.me/worldscipubl" target="_blank">Запустить чат-бот </a><img class="navbar-banner__bg" src="images/content/menu/bot.svg" alt="bot"></div><div class="navbar__footer"><ul class="navbar__actions"><li class="navbar__actions-item"><a target="_blank" class="text text_color_gray-blue" href="mailto:ask@worldscipubl.com">ask@worldscipubl.com</a></li><li class="navbar__actions-item"><a target="_blank" class="text text_color_gray-blue" href="tel:+74951277926">+7 (495) 127 - 79 - 26</a></li><li class="navbar__actions-item"><ul class="social-list navbar__social"><li class="social-list__item"><a href="https://teleg.run/worldscipubl" target="_blank" rel="noreferrer" class="social-list__link"><img class="social-list__link-img" src="https://camo.githubusercontent.com/f4b401dd7cd9b7840fd31acafd49e151a80e4c9600bf219934461b96dd98e013/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f74656c656772616d2e737667" alt="telegram"></a></li><li class="social-list__item"><a href="https://vk.com/worldscipubl/" target="_blank" rel="noreferrer" class="social-list__link"><img class="social-list__link-img" src="https://camo.githubusercontent.com/26be819fcce90f75668efeb7a432b969dcc35a1e4478149c3fcd48fda5b457c3/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f766b2e737667" alt="vk"></a></li><li class="social-list__item"><a href="https://api.whatsapp.com/send/?phone=%2B79086008126&amp;text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21+%D0%9D%D0%BE%D0%BC%D0%B5%D1%80+%D0%BC%D0%BE%D0%B5%D0%B9+%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D0%B8%3A+undefined&amp;app_absent=0" target="_blank" rel="noreferrer" class="social-list__link"><img class="social-list__link-img" src="https://camo.githubusercontent.com/945d32cdd8d51fe844ca8b2976914ae8786586607aee1cba24d7318e24b30411/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f77686174736170702e737667" alt="whatsapp"></a></li><li class="social-list__item"><a href="https://www.youtube.com/channel/UC9Wuvp-a1pZn_iHkPAFrwKA?view_as=subscriber" target="_blank" rel="noreferrer" class="social-list__link"><img class="social-list__link-img" src="https://camo.githubusercontent.com/d54e97f5edde790381f7e62b217410df33e066a0dc8f692f2fc6b25fc1768b0c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f796f75747562652e737667" alt="YouTube"></a></li><li class="social-list__item"><a href="https://www.instagram.com/world.sci.publ/" target="_blank" rel="noreferrer" class="social-list__link"><img class="social-list__link-img" src="https://camo.githubusercontent.com/c9dacf0f25a1489fdbc6c0d2b41cda58b77fa210a13a886d6f99e027adfbd358/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f696e7374616772616d2e737667" alt="instagram"></a></li><li class="social-list__item"><a href="https://www.facebook.com/worldscipubl/" target="_blank" rel="noreferrer" class="social-list__link"><img class="social-list__link-img" src="https://camo.githubusercontent.com/8f245234577766478eaf3ee72b0615e99bb9ef3eaa56e1c37f75692811181d5c/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f66616365626f6f6b2e737667" alt="facebook"></a></li></ul></li></ul><a target="_blank" class="navbar__faq text text_color_gray-blue" href="#">F.A.Q.</a></div></div></nav></div></div></header><section class="promo container mt-first js-navbar-audit-page"><div class="promo__body"><ul class="promo__group"><li class="promo__group-item"><button class="button button_primary active js-navbar-btn">Активация промокода</button></li><li class="promo__group-item"><a class="button button_secondary button_icon_fb" href="https://m.me/worldscipubl?ref=w15985277" target="_blank">Бесплатный перевод научной статьи</a></li></ul></div></section><section class="promo pb-section js-audit-page"><div class="promo__inner container"><div class="promo__header"><h2 class="text text_weight_bold text_size_title mt-1em">Активация промокода</h2></div><div class="promo__body"><div class="promo__col"><p class="text text_size_accent">Для активации промокода заполните все обязательные поля и подгрузите статью на <span class="text_color_light-blue">аудит.</span></p><p class="text text_size_accent mt-1em">За вами будет закреплена скидка по промокоду и создан профиль в личном кабинете World Sci Publ.</p><p class="text text_size_accent mt-1em">На указанную почту поступит подробная информация о дальнейшем ходе работ.</p><p class="text text_size_accent mt-1em">Если статья не пройдет <span class="text_color_light-blue">аудит</span>, промокод не сгорит.</p><img class="promo__img mt-1em" src="images/content/mockups/promocode.svg" alt="Загрузите статью на проверку и заполните данные"></div><div class="promo__col"><form class="form-promocode js-promo-form" name="promocode-solo" novalidate><div class="form-promocode__header"><h3 class="text text_weight_bold text_size_accent">Введите промокод:</h3></div><div class="form-promocode__form"><div class="field form-promocode__input"><input class="field__input" name="coupon" placeholder="Введите промокод" required> <span class="field__error"></span></div><div class="field form-promocode__input"><input class="field__input" name="email" placeholder="E-mail" pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" type="email" required> <span class="field__error"></span></div><button class="button button_success form-promocode__input form-promocode__input_submit">Проверить</button></div><p class="form-promocode__error text text_color_red"></p><div class="form-promocode__footer"><button class="text text_size_default form-promocode__get-promocode" href="">Нет промокода? <span class="text_color_light-blue">Получить</span></button></div></form><div class="audit-form audit-form_blur audit-form_frame mt-1em js-article-upload"><div class="audit-form__inner"><div class="form-frame js-audit-from"><form class="form-frame__item active audit-form__form" name="audit" novalidate><h2 class="text text_weight_bold text_size_accent text_align_center mb-1em">Заполните данные для подробного аудита</h2><div class="field audit-form__input"><div class="custom-select"><select class="custom-select__inner" name="rating"><option value="0" disabled="disabled" selected="selected">Необходимый рейтинг журнала</option><option value="Q4">Q4 / 0-24%</option><option value="Q3">Q3 / 25-49%</option><option value="Q2">Q2 / 50-74%</option><option value="Q1">Q1 / 75-100%</option></select></div><span class="field__error"></span></div><div class="field audit-form__input"><input class="field__input" name="subject" placeholder="Тематика статьи" required> <span class="field__error"></span></div><div class="field audit-form__input"><input class="field__input" name="email" placeholder="E-mail" pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" type="email" required> <span class="field__error"></span></div><div class="field audit-form__input"><input class="field__input" name="phone" placeholder="Номер телефона" pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" type="tel" required> <span class="field__error"></span></div><div class="field audit-form__input"><input class="field__input" name="name" placeholder="Имя" required> <span class="field__error"></span></div><button class="button button_success audit-form__input">Отправить на аудит</button></form><form class="form-frame__item" name="audit" novalidate><label class="article-upload"><i class="article-upload__img"></i><h2 class="article-upload__label text text_weight_bold text_size_accent text_align_center mb-1em">Загрузите статью (.pdf .doc .docx)</h2><div class="field article-upload__input"><div class="field-file js-field-file"><input class="field-file__input-original js-article-upload-input" name="file" placeholder="Загрузить статью (.pdf .doc .docx)" type="file" required><div class="field-file__input-surrogate field__input" data-placeholder="Загрузить статью (.pdf .doc .docx)" data-many-file="Файлы загржуены">Загрузить статью (.pdf .doc .docx)</div></div><span class="field__error"></span></div></label> <button class="button button_success audit-form__input">Отправить на аудит</button></form><div class="form-frame__item"><h3 class="text text_weight_bold text_size_accent mb-2em">Ваша статья получена, специалист проведет аудит в течение двух дней</h3><p class="text text_size_accent mb-1em">Отслеживайте работу в личном кабинете</p><p class="text text_size_accent mb-1em">Мы отправили письмо с паролем для входа на указанную Вами почту: <span class="text_weight_bold js-audit-from-email"></span></p><img class="audit-form__sent-img" src="images/content/mockups/web-site.svg"> <a href="/cabinet/login" class="button button_success m-auto-ws mt-a mb-2em">Войти / Зарегистрироваться</a></div><div class="form-frame__item"><h3 class="text text_weight_bold text_size_accent text_align_center mb-2em">Вы уже зарегистрированы в личном кабинете</h3><p class="text text_size_accent text_align_center mb-1em">В целях безопасности загрузите статью на технический аудит через личный кабинет.</p><img class="audit-form__sent-img" src="images/content/mockups/web-site.svg"> <a href="/cabinet/login" class="button button_success m-auto-ws mt-a mb-2em">Войти / Зарегистрироваться</a></div><i class="form-frame__loader loader loader_form"></i></div></div></div></div></div></div></section><section class="footer"><div class="footer-grid container"><img class="logo" src="images/content/logo/logo_white.svg"><p class="desc text text_color_white text_size_default">Сервис подготовки и продвижения научных статей в проверенные журналы из баз данных Scopus и Web of Science</p><div class="links_1"><ul class="footer-links"><li class="footer-links__item"><a target="_blank" class="text text_color_white text_size_default text_weight_bold" href="#">Как мы работаем</a></li><li class="footer-links__item"><a target="_blank" class="text text_color_white text_size_default text_weight_bold" href="#">Стоимость</a></li><li class="footer-links__item"><a target="_blank" class="text text_color_white text_size_default text_weight_bold" href="#">Гарантии</a></li></ul></div><div class="links_2"><ul class="footer-links"><li class="footer-links__item"><a target="_blank" class="text text_color_white text_size_default text_weight_bold" href="#">О нас</a></li><li class="footer-links__item"><a target="_blank" class="text text_color_white text_size_default text_weight_bold" href="#">Ответы на вопросы</a></li></ul></div><div class="social"><h3 class="text text_color_white text_size_default text_weight_bold">Напишите нам</h3><ul class="social-list social-list_footer"><li class="social-list__item"><a href="https://teleg.run/worldscipubl" target="_blank" rel="noreferrer" class="social-list__link"><img class="social-list__link-img" src="images/content/social/telegram.svg" alt="telegram"></a></li><li class="social-list__item"><a href="https://vk.com/worldscipubl/" target="_blank" rel="noreferrer" class="social-list__link"><img class="social-list__link-img" src="images/content/social/vk.svg" alt="vk"></a></li><li class="social-list__item"><a href="https://api.whatsapp.com/send/?phone=%2B79086008126&amp;text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21+%D0%9D%D0%BE%D0%BC%D0%B5%D1%80+%D0%BC%D0%BE%D0%B5%D0%B9+%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D0%B8%3A+undefined&amp;app_absent=0" target="_blank" rel="noreferrer" class="social-list__link"><img class="social-list__link-img" src="images/content/social/whatsapp.svg" alt="whatsapp"></a></li><li class="social-list__item"><a href="https://www.youtube.com/channel/UC9Wuvp-a1pZn_iHkPAFrwKA?view_as=subscriber" target="_blank" rel="noreferrer" class="social-list__link"><img class="social-list__link-img" src="images/content/social/youtube.svg" alt="YouTube"></a></li><li class="social-list__item"><a href="https://www.instagram.com/world.sci.publ/" target="_blank" rel="noreferrer" class="social-list__link"><img class="social-list__link-img" src="images/content/social/instagram.svg" alt="instagram"></a></li><li class="social-list__item"><a href="https://www.facebook.com/worldscipubl/" target="_blank" rel="noreferrer" class="social-list__link"><img class="social-list__link-img" src="images/content/social/facebook.svg" alt="facebook"></a></li></ul></div><div class="contact"><h3 class="text text_color_white text_size_default text_weight_bold">Контакты</h3><ul class="footer-links"><li class="footer-links__item"><p class="text text_color_white text_size_default mt-1em">г. Липецк, ул. Замятина, д. 1</p></li><li class="footer-links__item"><p class="text text_color_white text_size_default">г. Тюмень, ул. 50 лет ВЛКСМ, д.13, к. 1 офис 86</p></li><li class="footer-links__item"><a target="_blank" class="text text_color_white text_size_default" href="tel:84951277926">+7 (495) 127 - 79 - 26</a></li></ul></div><div class="about"><p class="text text_color_white text_size_default">ИП Кадыров</p><p class="text text_color_white text_size_default">Марсель Алмазович</p><p class="text text_color_white text_size_default">ИНН 022903480700</p><p class="text text_color_white text_size_default">ОГРНИП 318723200073192</p></div><p class="politics text text_color_white text_size_default">Политика конфиденциальности</p></div></section><noscript><img src="https://vk.com/rtrg?p=VK-RTRG-837729-8F4Pd" style="position: fixed; left: -999px" alt=""/></noscript><noscript><img height="1" width="1" style="display: none" alt="facebook" src="https://www.facebook.com/tr?id=2365479983546227&ev=PageView&noscript=1"/></noscript><noscript><div><img src="https://mc.yandex.ru/watch/50181778" style="position: absolute; left: -9999px" alt=""/></div></noscript><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NF7Q6BJ" height="0" width="0" style="display: none; visibility: hidden"></iframe></noscript><script>var csrfToken = '<?=$_SESSION['csrf-token']?>';
  // var csrfToken = 121;</script></body></html>