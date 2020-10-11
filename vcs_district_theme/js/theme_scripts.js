(function($) {
  function build_translate_menu() {
    var current_language = window.navigator.userLanguage || window.navigator.language;
    var languages = [["Afrikaans", "Afrikaans", "af"], ["Albanian", "shqiptar", "sq"], ["Amharic", "አማርኛ", "am"], ["Arabic", "العربية", "ar"], ["Armenian", "հայերեն", "hy"], ["Azerbaijani", "Azərbaycan", "az"], ["Basque", "Euskal", "eu"], ["Belarusian", "Беларуская", "be"], ["Bengali", "বাঙালি", "bn"], ["Bosnian", "bosanski", "bs"], ["Bulgarian", "български", "bg"], ["Burmese", "မြန်မာ", "my"], ["Catalan", "català", "ca"], ["Cebuano", "Cebuano", "ceb"], ["Chichewa", "Chichewa", "ny"], ["Chinese Simplified", "简体中文", "zh-CN"], ["Chinese Traditional", "中國傳統的", "zh-TW"], ["Corsican", "Corsu", "co"], ["Croatian", "hrvatski", "hr"], ["Czech", "čeština", "cs"], ["Danish", "dansk", "da"], ["Dutch", "Nederlands", "nl"], ["Esperanto", "esperanto", "eo"], ["Estonian", "eesti", "et"], ["Filipino", "Pilipino", "tl"], ["Finnish", "suomalainen", "fi"], ["French", "français", "fr"], ["Galician", "galego", "gl"], ["Georgian", "ქართული", "ka"], ["German", "Deutsche", "de"], ["Greek", "ελληνικά", "el"], ["Gujarati", "ગુજરાતી", "gu"], ["Haitian Creole", "kreyòl ayisyen", "ht"], ["Hausa", "Hausa", "ha"], ["Hawaiian", "ʻŌlelo Hawaiʻi", "haw"], ["Hebrew", "עִברִית", "iw"], ["Hindi", "हिंदी", "hi"], ["Hmong", "Hmong", "hmn"], ["Hungarian", "Magyar", "hu"], ["Icelandic", "Íslenska", "is"], ["Igbo", "Igbo", "ig"], ["Indonesian", "bahasa Indonesia", "id"], ["Irish", "Gaeilge", "ga"], ["Italian", "italiano", "it"], ["Japanese", "日本語", "ja"], ["Javanese", "Jawa", "jw"], ["Kannada", "ಕನ್ನಡ", "kn"], ["Kazakh", "Қазақ", "kk"], ["Khmer", "ភាសាខ្មែរ", "km"], ["Korean", "한국어", "ko"], ["Kurdish", "Kurdî", "ku"], ["Kyrgyz", "Кыргызча", "ky"], ["Lao", "ລາວ", "lo"], ["Latin", "Latinae", "la"], ["Latvian", "Latvijas", "lv"], ["Lithuanian", "Lietuvos", "lt"], ["Luxembourgish", "lëtzebuergesch", "lb"], ["Macedonian", "Македонски", "mk"], ["Malagasy", "Malagasy", "mg"], ["Malay", "Malay", "ms"], ["Malayalam", "മലയാളം", "ml"], ["Maltese", "Malti", "mt"], ["Maori", "Maori", "mi"], ["Marathi", "मराठी", "mr"], ["Mongolian", "Монгол", "mn"], ["Myanmar", "မြန်မာ", "my"], ["Nepali", "नेपाली", "ne"], ["Norwegian", "norsk", "no"], ["Nyanja", "madambwe", "ny"], ["Pashto", "پښتو", "ps"], ["Persian", "فارسی", "fa"], ["Polish", "Polskie", "pl"], ["Portuguese", "português", "pt"], ["Punjabi", "ਪੰਜਾਬੀ ਦੇ", "pa"], ["Romanian", "Română", "ro"], ["Russian", "русский", "ru"], ["Samoan", "Samoa", "sm"], ["Scottish Gaelic", "Gàidhlig na h-Alba", "gd"], ["Serbian", "Српски", "sr"], ["Sesotho", "Sesotho", "st"], ["Shona", "Shona", "sn"], ["Sindhi", "سنڌي", "sd"], ["Sinhala", "සිංහල", "si"], ["Slovak", "slovenský", "sk"], ["Slovenian", "slovenski", "sl"], ["Somali", "Soomaali", "so"], ["Spanish", "Español", "es"], ["Sundanese", "Sunda", "su"], ["Swahili", "Kiswahili", "sw"], ["Swedish", "svenska", "sv"], ["Tajik", "Тоҷикистон", "tg"], ["Tamil", "தமிழ்", "ta"], ["Telugu", "తెలుగు", "te"], ["Thai", "ไทย", "th"], ["Turkish", "Türk", "tr"], ["Ukrainian", "український", "uk"], ["Urdu", "اردو", "ur"], ["Uzbek", "O'zbekiston", "uz"], ["Vietnamese", "Tiếng Việt", "vi"], ["Welsh", "Cymraeg", "cy"], ["Western Frisian", "Western Frysk", "fy"], ["Xhosa", "isiXhosa", "xh"], ["Yiddish", "ייִדיש", "yi"], ["Yoruba", "yorùbá", "yo"], ["Zulu", "Zulu", "zu"]];
    var translate_strings = [];
    for (i = 0; i < languages.length; i++) {
      translate_strings[i] = "<a href='//translate.google.com/translate?u=" + window.location.href + "&amp;langpair=" + current_language + "|" + languages[i][2] + "&amp;hl=" + current_language + "&amp;anno=0&amp;ie=UTF8'><span class='link-text'>" + languages[i][0] + " (" + languages[i][1] + ")</span></a>";
      $(".menu--translate").append("<li>" + translate_strings[i] + "</li>");
    }
  }
  $(document).click(function(e) {
    target = $(e.target);
    if (!target.closest("#toggle-search").length && $("#toggle-search").is(":visible")) {
      $("#toggle-search").toggleClass("open");
    }
  });
  // Toggle the Search region
  $(".search-btn").click(function() {
    $("#toggle-search").toggleClass("open");
    return false;
  });
  // Toggle filter button
  $(".button--filter").click(function() {
    $(".views-exposed-form").toggleClass("open");
    return false;
  });
  // Toggle the sidebar region
  $(".button--page-menu").click(function() {
    $(".region-left-sidebar").toggleClass("open");
  });
  // Toggle the sidebar region (schools without breadcrumbs bar)
  $(".filter-btn").click(function() {
    $(".views-exposed-form").toggleClass("open");
    return false;
  });
  // Show/Hide the Announcements region
  $(".announcements-toggle").on("click", function() {
    $(".announcements").slideToggle({
      queue: false,
      start: function(a) {
        $(".announcements-toggle--chevron").toggleClass(function() {
            return $(this).is(".rotate-reset, .rotate") ? 'rotate rotate-reset' : 'rotate-reset';
        });
        if ($(".announcements-toggle--text--action").text() == "Hide") {
          $(".announcements-toggle--text--action").text("Show");
        } else {
          $(".announcements-toggle--text--action").text("Hide");
        }
      }
    });
  });
  // Fix for accordion shifting issue
  $(".ckeditor-accordion-toggler").on("click", function() {
    $("html, body").stop();
  });
  $(function() {
    $(".translate-menu").addClass("expanded dropdown").append("<ul class='dropdown-menu menu--translate'></ul>");
    $(".translate-menu > a").append("<span class='dropdown-indicator fas fa-angle-down'></span>");
    build_translate_menu();
    // Fix for accordion shifting issue
    $(".ckeditor-accordion-toggler").attr("href", "javascript:void(0);");
  });
})(jQuery);
