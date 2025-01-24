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
            "Rika and I are SO excited to celebrate our special day with you!",
            "Join us for our ceremonies in California or Tokyo—whichever works best for you!",
            "Get ready to eat, drink, laugh, and dance the night away! ♪₍₍٩( ᐛ )۶₎₎♪",
        ],
        JAPANESE: [
            "りかと私は、皆さんと一緒に結婚をお祝いできることにとてもワクワクしています！ TODO",
            "カリフォルニアまたは東京でのセレモニーにぜひご参加ください。ご都合の良い方を選んでくださいね！",
            "食べて、飲んで、笑って、夜を踊りながら楽しんでくださいね！ ♪₍₍٩( ᐛ )۶₎₎♪",]
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
            ENGLISH: "California Dinner Hangout",
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
        RSVP_FORM: {
            ENGLISH: "https://docs.google.com/forms/d/e/1FAIpQLSe0RH6C8ISg1NsCzubs2L48sMtQQdKY7QPKUiAgMB1OYDiNqg/viewform?usp=sharing",
            JAPANESE: "https://docs.google.com/forms/d/e/1FAIpQLSe0RH6C8ISg1NsCzubs2L48sMtQQdKY7QPKUiAgMB1OYDiNqg/viewform?usp=sharing",
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
        RSVP_FORM: {
            ENGLISH: "https://docs.google.com/forms/d/e/1FAIpQLSfuZ5C76VrQaDunwKtq5BeuBZ3LboV9JkhpvWcaYKddiPe1QA/viewform?usp=sharing",
            JAPANESE: "https://docs.google.com/forms/d/e/1FAIpQLSfuZ5C76VrQaDunwKtq5BeuBZ3LboV9JkhpvWcaYKddiPe1QA/viewform?usp=sharing",
        },
    },
    JAPAN_DINNER: {
        TITLE: {
            ENGLISH: "Japan Dinner / Hangout",
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
        RSVP_FORM: {
            ENGLISH: "TODO",
            JAPANESE: "TODO",
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
                ENGLISH: "We'd love for our wedding to be your night off! Rule of thumb: older kids who do not require parental supervision are more than welcome :)",
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
                ENGLISH: "Will there be an open bar?",
                JAPANESE: "TODO",
            },
            ANSWER: {
                ENGLISH: "Yes! Both our California and Japan venues will offer complimentary open bars for our guests - please enjoy!!",
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
                ENGLISH: "You guys are so cute together!",
                JAPANESE: "TODO",
            },
            ANSWER: {
                ENGLISH: "That's not a question! But thank you, we know!!",
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