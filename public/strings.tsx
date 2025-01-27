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
        JAPANESE: "リカとデイロン",
    },
    WELCOME: {
        ENGLISH: "Welcome",
        JAPANESE: "ようこそ",
    },
    WERE_GETTING_MARRIED: {
        ENGLISH: "We're getting married!!",
        JAPANESE: "結婚します！！"
    },
    WELCOME_MESSAGE: {
        ENGLISH: [
            "Rika and I are so excited to celebrate our special day with you!",
            "We will be having two ceremonies: one in California and one in Tokyo. We'd love for you to join whichever ceremony is most convenient for you! See event details below.",
            "Get ready to eat, drink, laugh, and dance the night away! ♪₍₍٩( ᐛ )۶₎₎♪",
            "If you have any questions, Rika and Daylon are just a message away :)"
        ],
        JAPANESE: [
            "私たちの特別な日を一緒にお祝いできることをとても楽しみにしています！",
            "カリフォルニアと東京で2つのセレモニーを開催します。ご都合の良い方にぜひご参加ください！イベントの詳細は以下をご覧ください。",
            "食べて、飲んで、笑って、夜通し踊る準備をしてください！♪₍₍٩( ᐛ )۶₎₎♪",
            "ご質問があれば、RikaまたはDaylonにお気軽にメッセージを送ってくださいね:)"
        ],
    },
    OUR_STORY: {
        ENGLISH: "Our Story",
        JAPANESE: "私たちのストーリー",
    },
    OUR_STORY_MESSAGE: {
        ENGLISH: [
            "Rika and I met in the fall of 2022 in the heart of New York City! We found a shared passion for Broadway, karaoke nights, binge-watching Love Is Blind, and exploring the city together.",
            "After about a year of dating, we found an apartment together in Hell's Kitchen. Awesome restaurants, Broadway, and $5 frozen margharitas were all minutes away!",
            "Eventually, we made plans move to California together. We made arrangements with our jobs, packed our limited items, and prepared to start a new life together. Just weeks before the move, Daylon pulled off the ultimate surprise—a dreamy picnic proposal along the Hudson River, surrounded by our closest friends.",
            "Now, we're settling into our new home in Sunnyvale, enjoying the warm weather, and enjoying our newest hobby: wedding planning! We can't wait to celebrate with you all and make even more unforgettable memories together!",
        ],
        JAPANESE: [
            "リカと私は2022年の秋、ニューヨーク市の中心で出会いました！ ブロードウェイ、カラオケの夜、『ラブ・イズ・ブラインド』の一気見、そして一緒に街を探索するという共通の情熱を見つけました。",
            "約1年の交際の後、私たちはヘルズキッチンに一緒にアパートを見つけました。素晴らしいレストラン、ブロードウェイ、そして5ドルのフローズンマルガリータがすぐ近くにありました！",
            "その後、一緒にカリフォルニアに引っ越す計画を立てました。仕事の調整をし、荷物をまとめ、新しい生活を始める準備をしました。引っ越しの数週間前、デイロンは究極のサプライズを仕掛けました。ハドソン川沿いで親しい友人に囲まれながらの夢のようなピクニックプロポーズでした。",
            "現在、私たちはサニーベールの新しい家に落ち着き、暖かい気候を楽しみながら、新しい趣味である結婚式の準備を楽しんでいます！ 皆さんと一緒にお祝いし、さらに忘れられない思い出を作るのが待ちきれません！"
        ]
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
        JAPANESE: "服装規定",
    },
    CALIFORNIA_WEDDING: {
        TITLE: {
            ENGLISH: "California Ceremony",
            JAPANESE: "カリフォルニアの結婚式",
        },
        DESCRIPTION: {
            ENGLISH: "Ceremony, cocktail hour, festivities and dancing! Dinner and drinks will be provided.",
            JAPANESE: "式典、カクテルタイム、楽しいひとときとダンス！ディナーと飲み物が提供されます。",
        },
        TIME: {
            ENGLISH: "5:00PM - 10:00 PM, August 15, 2025",
            JAPANESE: "2025年8月15日 17:00〜22:00",
        },
        LOCATION: {
            ENGLISH: "22801 Big Basin Wy, Saratoga, CA 95070",
            JAPANESE: "カリフォルニア州サラトガスプリングス",
        },
        DRESS_CODE: {
            ENGLISH: "Cocktail attire. It's an entirely outdoor venue - wear something comfortable!",
            JAPANESE: "カクテルドレス、スーツ、または快適な服装でお越しください。",
        },
    },
    CALIFORNIA_DINNER: {
        TITLE: {
            ENGLISH: "California Post-Game",
            JAPANESE: "カリフォルニアディナー / バーハングアウト",
        },
        DESCRIPTION: {
            ENGLISH: "Help us post-game our California Wedding :D Daylon's going to reserve somewhere cool to hangout - full details TBD!",
            JAPANESE: "カリフォルニアでの結婚式の後、一緒に楽しみましょう :D デイロンが素敵な場所を予約する予定です。詳細は追ってお知らせします！",
        },
        TIME: {
            ENGLISH: "7:00 PM, August 16, 2025",
            JAPANESE: "2025年8月16日 19:00〜",
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
        ENGLISH: "Frequently Asked Questions",
        JAPANESE: "よくある質問",
    },
    FREQUENTLY_ASKED_QUESTIONS: [
        {
            QUESTION: {
                ENGLISH: "Which wedding should I come to?",
                JAPANESE: "TODO",
            },
            ANSWER: {
                ENGLISH: [
                    "Whichever you like!",
                    "While we expect the majority of guests to come to the California wedding, both weddings are open to all guests!",
                    "Feel free to reach out to Daylon and Rika if you need travel tips or guidelines!"
                ],
                JAPANESE: "TODO",
            }
        },
        {
            QUESTION: {
                ENGLISH: "Can I bring a +1?",
                JAPANESE: "TODO",
            },
            ANSWER: {
                ENGLISH: "Yes! Everyone is welcome to bring a +1. Partner, friend, family member: anyone who'll be able to enjoy our wedding with you is welcome!",
                JAPANESE: "TODO",
            }
        },
        {
            QUESTION: {
                ENGLISH: "Are kids invited?",
                JAPANESE: "TODO",
            },
            ANSWER: {
                ENGLISH: "We'd love for our wedding to be your night off! Children who do not require supervision are welcome to attend.",
                JAPANESE: "TODO",
            }
        },
        {
            QUESTION: {
                ENGLISH: "What food options will be available?",
                JAPANESE: "TODO",
            },
            ANSWER: {
                ENGLISH: [
                    "Rika and I are still selecting our catering, but we are likely to serve buffet style with both vegetarian and non-vegetarian options!",
                    "If you have any special dietary requests, please indicate in your RSVP form!",
                ],
                JAPANESE: "TODO",
            }
        },
        {
            QUESTION: {
                ENGLISH: "Do you have hotel recommendations?",
                JAPANESE: "TODO",
            },
            ANSWER: {
                ENGLISH: [
                    "Rika and I are still doing research - come check this page later for recommendations!",
                    "If you'd be interesting in joining a hotel block, please indicate your interest in the RSVP form."
                ],
                JAPANESE: "TODO",
            }
        },
        {
            QUESTION: {
                ENGLISH: "Do you have transportation recommendations?",
                JAPANESE: "TODO",
            },
            ANSWER: {
                ENGLISH: [
                    "The California wedding venue is easily accessible by car, and there's plenty of parking! Uber and Lyft are also great options.",
                    "For folks coming from out of town, Rika and I are brainstorming providing transportation assistance (shuttle, or organizing carpools).",
                    "If you'd be interested, please indicate your interest in the RSVP form!"
                ],
                JAPANESE: "TODO",
            }
        },
        {
            QUESTION: {
                ENGLISH: "Where's your registry?",
                JAPANESE: "TODO",
            },
            ANSWER: {
                ENGLISH: [
                    "No registry! Your presents is the greatest presence.",
                    "If you would like to contribute to our honeymoon fund, we'll have a gift-box at the wedding to collect any physical gifts! Or you can venmo me at (link)"
                ],
                JAPANESE: "TODO",
            }
        },
        {
            QUESTION: {
                ENGLISH: "I have more questions. How can I contact you?",
                JAPANESE: "TODO",
            },
            ANSWER: {
                ENGLISH: "Rika and I are available on Messenger, text, Instagram, or you can reach our gmail: rikadaylon@gmail.com",
                JAPANESE: "TODO",
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