import RSVP from "@/app/Components/Rsvp/Rsvp";

export enum Language {
    ENGLISH = "ENGLISH",
    JAPANESE = "JAPANESE",
}


export const STRINGS = {
    LANGUAGE: {
        ENGLISH: "Language",
        JAPANESE: "言語",
    },
    RIKA_AND_DAYLON: {
        ENGLISH: "Rika and Daylon",
        JAPANESE: "Rika and Daylon",
    },
    OUR_STORY: {
        ENGLISH: "Our Story",
        JAPANESE: "ふたりの紹介",
    },
    OUR_STORY_MESSAGE: {
        ENGLISH: [
            "Rika and Daylon met in fall 2022 in NYC, bonding over Broadway, karaoke, Love Is Blind, and exploring the city together.",
            "After a year of dating, we moved in together in Hell's Kitchen, enjoying amazing restaurants, Broadway shows, and $5 frozen margaritas nearby.",
            "We eventually planned a move to California. Just weeks before, Daylon surprised Rika with a dreamy picnic proposal along the Hudson River, surrounded by friends.",
            "Now, we've settled in Sunnyvale, loving the warm weather and our newest hobby: wedding planning! We can't wait to celebrate with you and make unforgettable memories!"
        ],
        JAPANESE: [
            "私達ふたりは2022年の秋、ニューヨークで出会い、ブロードウェイやカラオケ、Netflixのショー『ラブ・イズ・ブラインド』などを通じて仲を深めました。",
            "交際が始まってから1年後、マンハッタンのタイムズスクエア周辺にふたりで引越し、近所のオシャレなレストランやたくさんのブロードウェイのショー、または行きつけの格安のカクテルバーなどでたくさんの思い出を作りました。",
            "その後、カリフォルニア州への引っ越しを計画。引っ越し直前に、デイロンはハドソン川沿いでピクニックを計画し、友人に見守れる中サプライズでプロポーズをしました。",
            "現在ふたりはカリフォルニア州サニーベールで新生活を楽しみながら結婚式の準備をしています。当日、お祝いに来ていただける皆さんと一緒に素敵な思い出を作ることをとても楽しみにしています！"
        ]
    },
    WELCOME: {
        ENGLISH: "Welcome",
        JAPANESE: "ご挨拶",
    },
    WERE_GETTING_MARRIED: {
        ENGLISH: "We're getting married!!",
        JAPANESE: "結婚します！！"
    },
    WELCOME_MESSAGE: {
        ENGLISH: [
            "Rika and Daylon are so excited to celebrate our special day with you!",
            "We will be having two ceremonies: one in California and one in Tokyo. We'd love for you to join whichever ceremony is most convenient for you! See event details below.",
            "Get ready to eat, drink, laugh, and dance the night away! ♪₍₍٩( ᐛ )۶₎₎♪",
            "If you have any questions, Rika and Daylon are just a message away :)"
        ],
        JAPANESE: [
            "このたび、私たちは結婚式を挙げることになりました。",
            "私たちの特別な日を、皆さんと一緒にお祝いできることをとても楽しみにしています！",
            "カリフォルニアと東京で2つの結婚式を予定しています。ご都合の良い方にぜひご参加ください！イベントの詳細は以下をご覧ください。",
            "ぜひ私たちと一緒に食べて、飲んで、笑って、踊り明かしましょう！♪₍₍٩( ᐛ )۶₎₎♪",
            "ご質問があれば、お気軽にご連絡ください。",
            "新郎　シュリニヴァサン　デイロン",
            "新婦　横字　梨花"
        ],
    },
    EVENTS: {
        ENGLISH: "Events",
        JAPANESE: "イベント",
    },
    TIME: {
        ENGLISH: "Time",
        JAPANESE: "時間",
    },
    LOCATION: {
        ENGLISH: "Location",
        JAPANESE: "場所",
    },
    DRESS_CODE: {
        ENGLISH: "Dress Code",
        JAPANESE: "服装",
    },
    CALIFORNIA_WEDDING: {
        TITLE: {
            ENGLISH: "California Wedding",
            JAPANESE: "カリフォルニアの結婚式",
        },
        DESCRIPTION: {
            ENGLISH: "Ceremony, cocktail hour, festivities and dancing!",
            JAPANESE: "挙式、カクテルタイム、披露宴、ディナー、そしてダンス！",
        },
        TIME: {
            ENGLISH: "5:00PM - 10:00 PM (Doors Open 4:30PM), Friday, August 15, 2025",
            JAPANESE: "2025年8月15日 金曜日　17:00〜22:00 (受付開始 16:30)",
        },
        LOCATION: {
            ENGLISH: "Saratoga Springs (22801 Big Basin Way, Saratoga, CA 95070)",
            JAPANESE: "Saratoga Springs (22801 Big Basin Way, Saratoga, CA 95070)",
        },
        DRESS_CODE: {
            ENGLISH: "Cocktail attire: Dresses, jumpsuits, or dressy separates for women; suits or dress shirts with slacks for men. The venue is entirely outdoors, so wear something comfortable!",
            JAPANESE: "綺麗めな服装ならOK!（例：カクテルドレス、スーツなど。）結婚式は屋外で行うため、温度調節の可能な服装でお越しください。",
        },
    },
    CALIFORNIA_AFTER_SOCIAL: {
        TITLE: {
            ENGLISH: "California After-Social",
            JAPANESE: "カリフォルニア　ディナー / アフターパーティー",
        },
        DESCRIPTION: {
            ENGLISH: "Help us post-game our California Wedding :D Daylon's going to reserve somewhere cool to hangout - full details TBD!",
            JAPANESE: "カリフォルニアでの結婚式の後、余韻を一緒に楽しみましょう！ 会場等の詳細は後日お知らせします！",
        },
        TIME: {
            ENGLISH: "TBD(8:00PM - 10:00PM?), Saturday, August 16, 2025",
            JAPANESE: "2025年8月16日 土曜日 時間未定（20:00〜22:00?) ",
        },
        LOCATION: {
            ENGLISH: "TBD",
            JAPANESE: "未定",
        },
        DRESS_CODE: {
            ENGLISH: "Be you :)",
            JAPANESE: "お好きな格好でOK！",
        },
    },
    TOKYO_WEDDING: {
        TITLE: {
            ENGLISH: "Tokyo Wedding",
            JAPANESE: "東京の結婚式",
        },
        DESCRIPTION: {
            ENGLISH: "Ceremony, cocktail hour, and performances!",
            JAPANESE: "挙式、カクテルタイム、披露宴、ディナー、そしてパフォーマンス！",
        },
        TIME: {
            ENGLISH: "3:10PM-7:00PM (Doors Open 2:10PM),　Saturday, September 20, 2025",
            JAPANESE: "2025年9月20日 土曜日 15:10〜19:00 (受付開始 14:10) ",
        },
        LOCATION: {
            ENGLISH: "Hotel Bell Classic Tokyo (3-chōme-33-6 Minamiōtsuka, Toshima City, Tokyo 170-0005)",
            JAPANESE: "ホテルベルクラシック東京 (〒170-0005 東京都豊島区南大塚 3-33-6)",
        },
        DRESS_CODE: {
            ENGLISH: "Semi-formal. Japanese (or Indian) traditional attire is welcome too!",
            JAPANESE: "セミフォーマル。和装でもOK!　東京の結婚式は屋内で行います。",
        },
    },
    TOKYO_AFTER_SOCIAL: {
        TITLE: {
            ENGLISH: "Tokyo After-Social",
            JAPANESE: "東京　二次会",
        },
        DESCRIPTION: {
            ENGLISH: "Help us post-game our Japan Wedding :D Rika's going to reserve somewhee cool to hangout - full details TBD (hoping to find a place near Ikebukuro)！",
            JAPANESE: "東京での結婚式の後、余韻を一緒に楽しみましょう！会場等の詳細は後日お知らせします（現在池袋周辺で検討中）！",
        },
        TIME: {
            ENGLISH: "TBD (8:00PM - 10:00PM?), Saturday, September 20, 2025",
            JAPANESE: "2025年9月20日 土曜日 時間未定（20:00〜22:00?)",
        },
        LOCATION: {
            ENGLISH: "TBD",
            JAPANESE: "未定",
        },
        DRESS_CODE: {
            ENGLISH: "Be you :)",
            JAPANESE: "お好きな格好でOK！",
        },
    },
    ACCOMMODATIONS: {
        ENGLISH: "Accommodations",
        JAPANESE: "宿泊施設",
    },
    DATES_AVAILABLE: {
        ENGLISH: "Dates Available",
        JAPANESE: "利用可能日",
    },
    PRICE: {
        ENGLISH: "Price",
        JAPANESE: "料金",
    },
    TRANSPORTATION: {
        ENGLISH: "Transportation",
        JAPANESE: "交通手段",
    },
    BOOKING_INFO: {
        ENGLISH: "Booking Info",
        JAPANESE: "予約情報",
    },
    DISCOUNTED_RATE: {
        ENGLISH: "discounted rate",
        JAPANESE: "割引料金",
    },
    ALTERNATIVES: {
        ENGLISH: "Alternatives",
        JAPANESE: "代替案",
    },
    CALIFORNIA_ACCOMMODATIONS: {
        TITLE: {
            ENGLISH: "California Hotel Block",
            JAPANESE: "カリフォルニア宿泊施設ブロック",
        },
        HOTEL_NAME: {
            ENGLISH: "Sonesta Select - San Jose Airport",
            JAPANESE: "ソネスタ セレクト - サンノゼ空港",
        },
        DATES_AVAILABLE: {
            ENGLISH: "August 13 -> August 19",
            JAPANESE: "8月13日〜8月19日",
        },
        PRICE: {
            ENGLISH: "$100 per night (discounted wedding block)",
            JAPANESE: "1泊100ドル（結婚式用の割引ブロック）",
        },
        LOCATION: {
            ENGLISH: "1727 Technology Dr, San Jose, CA 95110",
            JAPANESE: "1727 Technology Dr, サンノゼ, CA 95110",
        },
        TRANSPORTATION: {
            ENGLISH: "The hotel offers a free shuttle to/from San Jose Airport! To get to the wedding venue (~30 minute drive), we're brainstorming carpool options!",
            JAPANESE: "ホテルはサンノゼ空港との無料シャトルサービスを提供しています！結婚式場（車で約30分）へは、現在カープールの方法を検討中です！",
        },
        BOOKING_INFO: {
            ENGLISH: "Click to access the ",
            JAPANESE: "詳細はクリックしてください。",
        },
        ALTERNATIVES: {
            ENGLISH: "Juniper Hotel Cupertino, Aloft Cupertino and DoubleTree by Hilton Hotel Campbell are closer to the wedding venue. Nightly rates start at around $190.",
            JAPANESE: "Juniper Hotel Cupertino、Aloft Cupertino、DoubleTree by Hilton Hotel Campbellは結婚式場により近く、宿泊料金は1泊約190ドルからです。",
        }
    },
    TOKYO_ACCOMMODATIONS: {
        TITLE: {
            ENGLISH: "Tokyo Hotel Block",
            JAPANESE: "東京宿泊施設ブロック",
        },
        HOTEL_NAME: {
            ENGLISH: "Hotel Bell Classic Tokyo (also our ceremony venue!)",
            JAPANESE: "ホテルベルクラシック東京（挙式会場でもあります！）",
        },
        DATES_AVAILABLE: {
            ENGLISH: "(Uhh daylon needs to confirm, will fill this out soon :D)",
            JAPANESE: "（デイロンが確認中です。後ほど更新します :D）",
        },
        PRICE: {
            ENGLISH: "1 guest: ¥13,300-¥16,700 | 2 guests: ¥18,700-¥25,500 | 3+guests  ¥33,300+",
            JAPANESE: "1名：¥13,300〜¥16,700｜2名：¥18,700〜¥25,500｜3名以上：¥33,300〜",
        },
        LOCATION: {
            ENGLISH: "3 Chome-33-6 Minamiotsuka, Toshima City, Tokyo 170-0005, Japan",
            JAPANESE: "東京都豊島区南大塚3丁目33-6 〒170-0005",
        },
        TRANSPORTATION: {
            ENGLISH: "This hotel is a 1 min walk from JR Yamanote-line Otsuka Station or a 5 min walk from Tokyo Metro Marunouchi-Line Shin-Otsuka Station.",
            JAPANESE: "このホテルはJR山手線大塚駅から徒歩1分、東京メトロ丸ノ内線新大塚駅から徒歩5分です。",
        },
        BOOKING_INFO: {
            ENGLISH: "Reach out to Rika or Daylon! They can help book your hotel reservation for you.",
            JAPANESE: "リカまたはデイロンに連絡してください！宿泊予約をサポートしてくれます。",
        },
        ALTERNATIVES: {
            ENGLISH: "There's many hotels in the area. I've found good deals on Booking.com!",
            JAPANESE: "周辺には他にも多くのホテルがあります。Booking.comでお得なプランを見つけました！",
        }
    },
    FAQ: {
        ENGLISH: "FAQ",
        JAPANESE: "よくあるご質問",
    },
    FREQUENTLY_ASKED_QUESTIONS_TITLE: {
        ENGLISH: "FAQs",
        JAPANESE: "よくあるご質問",
    },
    FREQUENTLY_ASKED_QUESTIONS: [
        {
            QUESTION: {
                ENGLISH: "Which wedding should I come to?",
                JAPANESE: "どの結婚式に参加すればいいですか？",
            },
            ANSWER: {
                ENGLISH: [
                    "Whichever you like!",
                    "While we expect the majority of guests to come to the California wedding, both weddings are open to all guests!",
                    "Feel free to reach out to Daylon and Rika if you need travel tips or guidelines!"
                ],
                JAPANESE: [
                    "お好きな方にどうぞ！",
                    "カリフォルニアの結婚式がメインの式になる予定ですが、どちらの結婚式にもご参加いただけます！",
                    "交通アクセスに関するご質問やご相談などがありましたら、お気軽にご連絡ください！"
                ],
            }
        },
        {
            QUESTION: {
                ENGLISH: "Can I bring a +1?",
                JAPANESE: "追加のゲストを連れて行ってもいいですか？",
            },
            ANSWER: {
                ENGLISH: "Yes! Everyone is welcome to bring an adult +1. Partner, friend, family member: anyone who'll be able to enjoy our wedding with you is welcome!",
                JAPANESE: "はい！どなたでも大人のゲストを１名連れてきていただくことができます。パートナー、友人、家族など、一緒に結婚式を楽しめる方なら大歓迎です！",
            }
        },
        {
            QUESTION: {
                ENGLISH: "Are kids invited?",
                JAPANESE: "子供も参加できますか？",
            },
            ANSWER: {
                ENGLISH: ["For the California wedding, We'd love for our wedding to be your night off! Children who do not require supervision are welcome to attend.",
                    "Little ones are welcome to attend the Tokyo wedding! Heads up: there will be loud music, and lots of sound and lighting effects!"],
                JAPANESE: ["カリフォルニアの結婚式ではゲストの皆さんに楽しいひとときを過ごしてもらいため、付き添いの必要のない10代のお子様は参加いただけます。",
                    "東京の結婚式では小さいお子様もご参加いただけます！光や音の演出等を予定していますので、あらかじめご理解をお願いします。"]

            }
        },
        {
            QUESTION: {
                ENGLISH: "What food options will be available?",
                JAPANESE: "お料理はどのようなものになりますか？",
            },
            ANSWER: {
                ENGLISH: [
                    "For the California wedding, we will be serving buffet style pastas, salads and steak, with some sides!",
                    "",
                    "For the Japan wedding, we are picking our catering, but it will most likely be a course meal. If you have any special dietary requests, please indicate in your RSVP form!",
                ],
                JAPANESE: [
                    "カリフォルニアの結婚式ではブッフェ形式になります。お料理の内容はステーキ、パスタ、サラダなどです。",
                    "東京の結婚式に関しては検討中ですが、コース料理になる予定です。",
                    "アレルギー対応も可能なので、食事に関するリクエストがある場合は、出欠フォームにその旨ご記入ください。",
                ],
            }
        },
        {
            QUESTION: {
                ENGLISH: "What will the weather be like at the weddings?",
                JAPANESE: "結婚式当日の気候を教えてください。",
            },
            ANSWER: {
                ENGLISH: [
                    "For the California wedding, we expect the weather to be warm and dry with very little to no rain.",
                    "It can get pretty hot before sunset around 8:00PM, but it might get cool and breezy at night.",
                    "",
                    "For the Tokyo wedding, September is still part of Tokyo's typhoon season so it might be rainy.",
                    "Typically, September is still hot and humid in Tokyo, but we will have an indoor wedding! "
                ],
                JAPANESE: [
                    "カリフォルニアの結婚式に関しては、通常は温暖で乾燥した気候であり、８月は晴天の場合が多いです。",
                    "日没が20時頃のため、日中は日差しが強くなる可能性がありますが、夜には気温が下がり肌寒くなる可能性もあります。",
                    "東京の結婚式に関しては、9月は東京の台風シーズンにあたるため、当日、雨になる可能性があります。",
                    "一般的に９月はまだ暑いですが、東京の結婚式は全て屋内で行うため快適にお過ごしいただけます！"
                ],
            }
        },
        {
            QUESTION: {
                ENGLISH: "Where's your registry?",
            },
            ANSWER: {
                ENGLISH: [
                    "No registry! The gift we're most excited for is seeing everyone's smiles and sweet dance moves :)",
                    "We'll have a gift box at the wedding to gather any cards or small gifts you'd like to share with us!",
                    "Or if you prefer to contribute to our wedding expenses, you're welcome to send a gift via Zelle at (925) 588 9935 - but this is super optional!",
                ],
            }
        },
        {
            QUESTION: {
                ENGLISH: "I have more questions. How can I contact you?",
                JAPANESE: "他に質問がある場合、どのように連絡すればいいですか？",
            },
            ANSWER: {
                ENGLISH: "We are available on Messenger, text, Instagram, or you can reach our gmail: rikadaylon@gmail.com",
                JAPANESE: "メッセンジャー、ライン、Instagram、または、こちらのメールアドレス（rikadaylon@gmail.com）までご連絡ください！",
            }
        },
    ],
    RSVP: {
        ENGLISH: "RSVP",
        JAPANESE: "出欠フォームへのご回答はこちらから",
    },
    GALLERY: {
        ENGLISH: "Gallery",
        JAPANESE: "ギャラリー",
    },
    MADE_WITH: {
        ENGLISH: "Made with",
        JAPANESE: "Made with",
    },

    SEE_CODE_ON: {
        ENGLISH: "See code on",
        JAPANESE: "See code on",
    },

}