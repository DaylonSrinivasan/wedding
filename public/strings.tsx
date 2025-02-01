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
            "Now, we’ve settled in Sunnyvale, loving the warm weather and wedding planning. We can’t wait to celebrate with you and make unforgettable memories!"
        ],
        JAPANESE: [
            "私達ふたりは2022年の秋、ニューヨークで出会い、ブロードウェイやカラオケ、Netflixのショー『ラブ・イズ・ブラインド』などを通じて仲を深めました。",
            "交際が始まってから1年後、マンハッタンのタイムズスクエア周辺にふたりで引越し、近所のオシャレなレストランやたくさんのブロードウェイのショー、または行きつけの格安のカクテルバーなどでたくさんの思い出を作りました。",
            "その後、カリフォルニアへの引っ越しを計画。引っ越し直前に、デイロンはハドソン川沿いでピクニックを計画し、友人に見守れる中サプライズでプロポーズをしました。",
            "現在ふたりはカリフォルニア州サニーベールで新生活を楽しみながら結婚式の準備をしています。当日、お祝いしに来ていただける皆さんと一緒に忘れられない思い出を作ることをとても楽しみにしています！"
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
            "ご質問があれば、私たちにお気軽にメッセージを送ってください:)",
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
            ENGLISH: "California Ceremony",
            JAPANESE: "カリフォルニアの結婚式",
        },
        DESCRIPTION: {
            ENGLISH: "Ceremony, cocktail hour, festivities and dancing! Dinner and drinks will be provided.",
            JAPANESE: "挙式、カクテルタイム、披露宴、ディナー、そしてダンス！お飲み物は豊富な種類を用意しています。",
        },
        TIME: {
            ENGLISH: "5:00PM - 10:00 PM, Friday, August 15, 2025",
            JAPANESE: "2025年8月15日 金曜日　17:00〜22:00",
        },
        LOCATION: {
            ENGLISH: "22801 Big Basin Wy, Saratoga, CA 95070",
            JAPANESE: "22801 Big Basin Wy, Saratoga, CA 95070",
        },
        DRESS_CODE: {
            ENGLISH: "Cocktail attire. It's an entirely outdoor venue - wear something comfortable!",
            JAPANESE: "カクテルドレス、スーツなど。結婚式は屋外で行うため、温度調節の可能な服装でお越しください。",
        },
    },
    CALIFORNIA_DINNER: {
        TITLE: {
            ENGLISH: "California Post-Game",
            JAPANESE: "カリフォルニアディナー / アフターパーティー",
        },
        DESCRIPTION: {
            ENGLISH: "Help us post-game our California Wedding :D Daylon's going to reserve somewhere cool to hangout - full details TBD!",
            JAPANESE: "カリフォルニアでの結婚式の後、余韻を一緒に楽しみましょう :D デイロンが会場を予約する予定です。詳細は後日お知らせします！",
        },
        TIME: {
            ENGLISH: "7:00 PM, Saturday, August 16, 2025",
            JAPANESE: "2025年8月16日　土曜日 19:00〜",
        },
        LOCATION: {
            ENGLISH: "TBD",
            JAPANESE: "未定",
        },
        DRESS_CODE: {
            ENGLISH: "Be you :)",
            JAPANESE: "お好きな服装でお越しください。",
        },
    },
    JAPAN_WEDDING: {
        TITLE: {
            ENGLISH: "Japan Wedding",
            JAPANESE: "日本の結婚式",
        },
        DESCRIPTION: {
            ENGLISH: "Our Japan wedding!",
            JAPANESE: "私たちの日本での結婚式！",
        },
        TIME: {
            ENGLISH: "3:10PM, September 20, 2025",
            JAPANESE: "2025年9月20日 15:10〜",
        },
        LOCATION: {
            ENGLISH: "Tokyo, Japan",
            JAPANESE: "東京都",
        },
        DRESS_CODE: {
            ENGLISH: "Not sure yet, but western cocktail attire is probably fine.",
            JAPANESE: "まだ未定ですが、西洋風のカクテルドレスやスーツが無難です。",
        },
    },
    JAPAN_DINNER: {
        TITLE: {
            ENGLISH: "Japan Post-Game",
            JAPANESE: "日本ディナー / ハングアウト",
        },
        DESCRIPTION: {
            ENGLISH: "Help us post-game our Japan Wedding :D Rika's going to reserve somewhere cool to hangout - full details TBD!",
            JAPANESE: "日本での結婚式の後、一緒に楽しみましょう :D リカが素敵な場所を予約する予定です。詳細は追ってお知らせします！",
        },
        TIME: {
            ENGLISH: "7:00 PM, September 20, 2025",
            JAPANESE: "2025年9月20日 午後7時",
        },
        LOCATION: {
            ENGLISH: "TBD",
            JAPANESE: "未定",
        },
        DRESS_CODE: {
            ENGLISH: "Be you :)",
            JAPANESE: "お好きな服装でお越しください。",
        },
    },
    FAQ: {
        ENGLISH: "FAQ",
        JAPANESE: "よくある質問",
    },
    FREQUENTLY_ASKED_QUESTIONS_TITLE: {
        ENGLISH: "FAQs",
        JAPANESE: "よくある質問",
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
                    "多くの方はカリフォルニアの結婚式に参加する予定ですが、どちらの結婚式も全てのゲストに開かれています！",
                    "旅行のアドバイスやガイドラインが必要な場合は、デイロンまたはリカにお気軽にご連絡ください！"
                ],
            }
        },
        {
            QUESTION: {
                ENGLISH: "Can I bring a +1?",
                JAPANESE: "同伴者を連れて行ってもいいですか？",
            },
            ANSWER: {
                ENGLISH: "Yes! Everyone is welcome to bring a +1. Partner, friend, family member: anyone who'll be able to enjoy our wedding with you is welcome!",
                JAPANESE: "はい！どなたでも同伴者を連れてきて大丈夫です。パートナー、友人、家族など、一緒に結婚式を楽しめる方なら大歓迎です！",
            }
        },
        {
            QUESTION: {
                ENGLISH: "Are kids invited?",
                JAPANESE: "子供も参加できますか？",
            },
            ANSWER: {
                ENGLISH: "We'd love for our wedding to be your night off! Children who do not require supervision are welcome to attend.",
                JAPANESE: "ぜひ、ゆっくり楽しんでいただける夜にしたいと思っています！付き添いが必要ないお子様は参加可能です。",
            }
        },
        {
            QUESTION: {
                ENGLISH: "What food options will be available?",
                JAPANESE: "食事のオプションは何がありますか？",
            },
            ANSWER: {
                ENGLISH: [
                    "Rika and I are still selecting our catering, but we are likely to serve buffet style with both vegetarian and non-vegetarian options!",
                    "If you have any special dietary requests, please indicate in your RSVP form!",
                ],
                JAPANESE: [
                    "リカと私はまだケータリングを選定中ですが、ビュッフェスタイルでベジタリアン向けと非ベジタリアン向けの両方のメニューを用意する予定です！",
                    "特別な食事のリクエストがある場合は、RSVPフォームにご記入ください！",
                ],
            }
        },
        {
            QUESTION: {
                ENGLISH: "Do you have hotel recommendations?",
                JAPANESE: "おすすめのホテルはありますか？",
            },
            ANSWER: {
                ENGLISH: [
                    "Rika and I are still doing research - come check this page later for recommendations!",
                    "If you'd be interested in joining a hotel block, please indicate your interest in the RSVP form."
                ],
                JAPANESE: [
                    "リカと私はまだ調査中です。おすすめのホテル情報は後ほどこのページで更新します！",
                    "ホテルの団体予約に興味がある方は、RSVPフォームでお知らせください。",
                ],
            }
        },
        {
            QUESTION: {
                ENGLISH: "Do you have transportation recommendations?",
                JAPANESE: "交通手段についてのおすすめはありますか？",
            },
            ANSWER: {
                ENGLISH: [
                    "The California wedding venue is easily accessible by car, and there's plenty of parking! Uber and Lyft are also great options.",
                    "For folks coming from out of town, Rika and I are brainstorming providing transportation assistance (shuttle, or organizing carpools).",
                    "If you'd be interested, please indicate your interest in the RSVP form!"
                ],
                JAPANESE: [
                    "カリフォルニアの会場は車で簡単にアクセスでき、駐車場もたくさんあります！UberやLyftも便利です。",
                    "遠方から来られる方のために、シャトルバスや相乗りの手配などの交通手段を検討中です。",
                    "興味がある方は、RSVPフォームでお知らせください！",
                ],
            }
        },
        {
            QUESTION: {
                ENGLISH: "Where's your registry?",
                JAPANESE: "ギフト登録（レジストリ）はありますか？",
            },
            ANSWER: {
                ENGLISH: [
                    "No registry! Your presence is the greatest present.",
                    "If you would like to contribute to our honeymoon fund, we'll have a gift-box at the wedding to collect any physical gifts! Or you can venmo me at (link)"
                ],
                JAPANESE: [
                    "ギフト登録はありません！皆さんが来てくださることが私たちにとって最高のプレゼントです。",
                    "もしハネムーン基金にご協力いただける場合は、結婚式当日にギフトボックスを用意します！または、Venmoでの送金も可能です。（リンク）",
                ],
            }
        },
        {
            QUESTION: {
                ENGLISH: "I have more questions. How can I contact you?",
                JAPANESE: "他に質問がある場合、どうやって連絡すればいいですか？",
            },
            ANSWER: {
                ENGLISH: "Rika and I are available on Messenger, text, Instagram, or you can reach our gmail: rikadaylon@gmail.com",
                JAPANESE: "リカと私はMessenger、テキストメッセージ、Instagramで連絡可能です。または、メール（rikadaylon@gmail.com）でもどうぞ！",
            }
        },
    ],
    RSVP: {
        ENGLISH: "RSVP",
        JAPANESE: "こちらから返信",
    },
    GALLERY: {
        ENGLISH: "Gallery",
        JAPANESE: "ギャラリー",
    },
    MADE_WITH: {
        ENGLISH: "Made with",
        JAPANESE: "作成者",
    },

    SEE_CODE_ON: {
        ENGLISH: "See code on",
        JAPANESE: "コードをこちらで確認",
    },

}