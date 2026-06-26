'use strict';

const dashChars = String.raw`\u002D\u2013\u2014\u2212`;

const languages = {

    wiki: {
        monthNames: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ monthName }_${ dayNumber }`,
            headingIds: {
                births: [ "Births" ],
                deaths: [ "Deaths" ],
                events: [ "Events" ],
                holidays: [ "Holidays_and_observances" ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `Wikipedia:Selected_anniversaries/${ monthName }_${ dayNumber }`,
            listElementSelector: "body > ul li,section > ul li"
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(?:ad\s+)?(\d+)\s*(?:(bce?)|ad|ce)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          new RegExp(String.raw`^\s*(?:ad\s+)?(\d+)\s*(?:(bce?)|ad|ce)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i')
    },

    en: {
        monthNames: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ monthName }_${ dayNumber }`,
            headingIds: {
                births: [ 'Births' ],
                deaths: [ 'Deaths' ],
                events: [ 'Events' ],
                holidays: [ 'Holidays_and_observances' ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `Wikipedia:Selected_anniversaries/${ monthName }_${ dayNumber }`,
            listElementSelector: 'body > ul li,section > ul li'
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(?:ad\s+)?(\d+)\s*(?:(bce?)|ad|ce)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          new RegExp(String.raw`^\s*(?:ad\s+)?(\d+)\s*(?:(bce?)|ad|ce)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i')
    },

    de: {
        monthNames: [
            'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
            'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ dayNumber }._${ monthName }`,
            headingIds: {
                births: [ 'Geboren' ],
                deaths: [ 'Gestorben' ],
                events: [ 'Ereignisse' ],
                holidays: [
                    'Feier-_und_Gedenktage',
                    'Feier-,_Gedenk-_und_Aktionstage',
                    'Feier-,_Aktions-_und_Gedenktage'
                ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `Wikipedia:Hauptseite/Jahrestage/${ monthName }/${ dayNumber }`,
            listElementSelector: 'body > ul li,section > ul li'
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(v\.\s*Chr\.)?\s*(?::|[${ dashChars }])\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(v\.\s*Chr\.)?\s*(?::|[${ dashChars }])\s*(.*\S.*)`, 'i')
    },

    fr: {
        monthNames: [
            'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
            'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => {
                if (dayNumber === 1) {
                    dayNumber = '1er';
                }
                return `${ dayNumber }_${ monthName }`;
            },
            headingIds: {
                births: [ 'Naissances' ],
                deaths: [ 'Décès' ],
                events: [ 'Événements', 'Évènements', 'Arts,_culture_et_religion', 'Sciences_et_techniques', 'Économie_et_société' ],
                holidays: [ 'Célébrations' ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => {
                if (dayNumber === 1) {
                    if (new Set([ 1, 2, 3, 5, 9, 10, 11, 12 ]).has(monthNumber)) {
                        dayNumber = '1er';
                    }
                }
                return `Wikipédia:Éphéméride/${ dayNumber }_${ monthName }`;
            },
            listElementSelector: 'body > ul li,section > ul li'
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(av\.\s*J\.\s*[${ dashChars }]C\.)?\s*(?::|[${ dashChars }])\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(av\.\s*J\.\s*[${ dashChars }]C\.)?\s*(?::|[${ dashChars }])\s*(.*\S.*)`, 'i')
    },

    sv: {
        monthNames: [
            'januari', 'februari', 'mars', 'april', 'maj', 'juni',
            'juli', 'augusti', 'september', 'oktober', 'november', 'december'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ dayNumber }_${ monthName }`,
            headingIds: {
                births: [ 'Födda' ],
                deaths: [ 'Avlidna' ],
                events: [ 'Händelser' ],
                holidays: [ 'Återkommande_bemärkelsedagar' ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `Mall:${ dayNumber }_${ monthName }`,
            listElementSelector: 'body > ul li,section > ul li'
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(f\.\s*Kr\.)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(f\.\s*Kr\.)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i')
    },

    pt: {
        monthNames: [
            'de janeiro', 'de fevereiro', 'de março', 'de abril', 'de maio', 'de junho',
            'de julho', 'de agosto', 'de setembro', 'de outubro', 'de novembro', 'de dezembro'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ dayNumber }_${ monthName }`,
            headingIds: {
                births: [ 'Nascimentos' ],
                deaths: [ 'Mortes', 'Falecimentos' ],
                events: [ 'Eventos', 'Eventos_históricos' ],
                holidays: [ 'Feriados_e_eventos_cíclicos' ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `Wikipédia:Efemérides/${ dayNumber }_${ monthName }`,
            listElementSelector: 'body > ul li,section > ul li'
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(a\.\s*C\.)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(a\.\s*C\.)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i')
    },

    ru: {
        monthNames: [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ dayNumber }_${ monthName }`,
            headingIds: {
                births: [ 'Родились' ],
                deaths: [ 'Скончались' ],
                events: [ 'События' ],
                holidays: [
                    'Праздники',
                    'Праздники_и_памятные_дни',
                    'Праздники_и_памятные_даты',
                    'Праздники,_памятные_даты'
                ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNo, dayNo) => `Шаблон:События_дня/${ monthNo < 10 ? `0${ monthNo }` : monthNo }-${ dayNo }`,
            listElementSelector: 'body > ul li,section > ul li'
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(?:год)?\s*(до\s*н\.\s*э\.)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(?:год)?\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(?:год)?\s*(до\s*н\.\s*э\.)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i')
    },

    es: {
        monthNames: [
            'de enero', 'de febrero', 'de marzo', 'de abril', 'de mayo', 'de junio',
            'de julio', 'de agosto', 'de septiembre', 'de octubre', 'de noviembre', 'de diciembre'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ dayNumber }_${ monthName }`,
            headingIds: {
                births: [ 'Nacimientos' ],
                deaths: [ 'Fallecimientos' ],
                events: [ 'Acontecimientos' ],
                holidays: [ 'Celebraciones' ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `Plantilla:Efemérides - ${ dayNumber }_${ monthName }`,
            listElementSelector: 'body > ul li,section > ul li'
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(a\.\s*C\.)?\s*\.*[:${ dashChars }]\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(a\.\s*C\.)?\s*\.*[:${ dashChars }]\s*(.*\S.*)`, 'i')
    },

    ar: {
        monthNames: [
            'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
            'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ dayNumber }_${ monthName }`,
            headingIds: {
                births: [ 'مواليد' ],
                deaths: [ 'وفيات' ],
                events: [ 'أحداث', 'الأحداث' ],
                holidays: [ 'أعياد_ومناسبات' ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `ويكيبيديا:في_هذا_اليوم/${ dayNumber }_${ monthName }`,
            listElementSelector: 'body > ul li,section > ul li'
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(ق.م)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(ق.م)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i')
    },

    bs: {
        monthNames: [
            'januar', 'februar', 'mart', 'april', 'maj', 'juni',
            'juli', 'august', 'septembar', 'oktobar', 'novembar', 'decembar'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ dayNumber }_${ monthName }`,
            headingIds: {
                births: [ 'Rođeni' ],
                deaths: [ 'Umrli' ],
                events: [ 'Događaji' ],
                holidays: [ 'Praznici' ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `Šablon:Na_današnji_dan/${ dayNumber }._${ monthName }`,
            listElementSelector: 'body > ul li,section > ul li'
        },
        yearListElementRegEx:
            new RegExp(String.raw`^\s*(\d+)\s*(p\. n\. e)?\s*(?::|[${ dashChars }])\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
            new RegExp(String.raw`^\s*(\d+)\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
            new RegExp(String.raw`^\s*(\d+)\s*(p\. n\. e)?\s*(?::|[${ dashChars }])\s*(.*\S.*)`, 'i')
    },

    uk: {
        monthNames: [
            'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
            'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ dayNumber }_${ monthName }`,
            headingIds: {
                births: [ 'Народились' ],
                deaths: [ 'Померли' ],
                events: [ 'Події' ],
                holidays: [ 'Свята_і_пам\'ятні_дні' ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `Вікіпедія:Проект:Цей день в історії/${ dayNumber }_${ monthName }`,
            listElementSelector: 'body > div.onthisdayselected > ul li, section > div.onthisdayselected > ul li'
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(?:рік)?\s*(до\s*н\.\s*е\.)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(?:рік)?\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(?:рік)?\s*(до\s*н\.\s*е\.)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i')
    },

    it: {
        monthNames: [
            'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
            'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ dayNumber }_${ monthName }`,
            headingIds: {
                births: ['Nati'],
                deaths: ['Morti'],
                events: ['Eventi'],
                holidays: ['Feste_e_ricorrenze']
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `Template:PaginaPrincipale/Attualita/${ dayNumber }_${ monthName }`,
            listElementSelector: 'body > ul li,section > ul li'
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(a\.\s*C\.)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(a\.\s*C\.)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i')
    },

    tr: {
        monthNames: [
            'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ dayNumber }_${ monthName }`,
            headingIds: {
                births: [ 'Doğumlar' ],
                deaths: [ 'Ölümler' ],
                events: [ 'Olaylar' ],
                holidays: [ 'Tatiller_ve_özel_günler' ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `Şablon:Tarihte_bugün/${ dayNumber }_${ monthName }`,
            listElementSelector: 'body > ul li,section > ul li'
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(?:(M.?Ö.?))?\s*(?:yil)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(?:(M.?Ö.?))?\s*(?:yil)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i')
    },

    zh: {
        monthNames: [
            '1月', '2月', '3月', '4月', '5月', '6月',
            '7月', '8月', '9月', '10月', '11月', '12月'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ monthName }${ dayNumber }日`,
            headingIds: {
                births: [ '出生'],
                deaths: [ '逝世' ],
                events: [ '大事记', '大事記', '大事紀' ],
                holidays: [ '节假日和习俗', '節假日和習俗', '节日、风俗习惯', '節日、風俗習慣' ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `Wikipedia:历史上的今天/${ monthName }${ dayNumber }日`,
            listElementSelector: 'section > dl > .event'
        },
        yearListElementRegEx:
          new RegExp(String.raw`^\s*(前?)\s*(\d+)\s*(?:年)?\s*[：:${ dashChars }]\s*(.*\S.*)$`, 'i'),
        yearPrefixRegEx:
          new RegExp(String.raw`^\s*(\d+)\s*(?:年)?\s*[：:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
          /(前?)(\d+)(?:年)?\s*(.*\S.*)/
    },

    cs: {
        monthNames: [
            'leden', 'únor', 'březen', 'duben', 'květen', 'červen',
            'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `${ dayNumber }._${ monthName }`,
            headingIds: {
                births: [ 'Narození' ],
                deaths: [ 'Úmrtí' ],
                events: [ 'Události' ],
                holidays: [ 'Svátky' ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => `Wikipedie:Vybraná_výročí_dne/${ dayNumber }._${ monthName }`,
            listElementSelector: 'body > ul li,section > ul li'
        },
        yearListElementRegEx:
            new RegExp(String.raw`^\s*(?:př\.n\.l\.\s+)?(\d+)\s*(?:(n\.l\.?)|ad)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i'),
        yearPrefixRegEx:
            new RegExp(String.raw`^\s*(\d+)\s*[:${ dashChars }]*\s*$`, 'i'),
        selectedRegEx:
            new RegExp(String.raw`^\s*(?:př\.n\.l\.\s+)?(\d+)\s*(?:(n\.l\.?)|ad)?\s*[${ dashChars }]\s*(.*\S.*)`, 'i')
    }

};

module.exports = {
    languages
};
