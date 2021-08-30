
// Author
db.authors.insertMany([{
  _id: ObjectId("5b6ee1e42ff9834cce648000"),
  name: "芥川 龍之介",
  dob: ISODate("1892-03-01T00:00:00+09:00"),
  gender: "male"
}, {
  _id: ObjectId("5b6ee1e72ff9834cce648001"),
  name: "江戸川 乱歩",
  dob: ISODate("1894-10-21T00:00:00+09:00"),
  gender: "male"
}, {
  _id: ObjectId("5b6ee1ec2ff9834cce648002"),
  name: "菊池 寛",
  dob: ISODate("1888-12-26T00:00:00+09:00"),
  gender: "male"
}, {
  _id: ObjectId("5b6ee1ed2ff9834cce648003"),
  name: "夏目 漱石",
  dob: ISODate("1867-02-09T00:00:00+09:00"),
  gender: "male"
}, {
  _id: ObjectId("5b6ee1ed2ff9834cce648004"),
  name: "樋口 一葉",
  dob: ISODate("1872-05-02T00:00:00+09:00"),
  gender: "female"
}, {
  _id: ObjectId("5b6ee1ee2ff9834cce648005"),
  name: "正岡 子規",
  gender: "male"
}, {
  _id: ObjectId("5b6ee1ef2ff9834cce648006"),
  name: "与謝野 晶子",
  dob: "1878-12-07T00:00:00+09:00",
  gender: "female"
}]);

// Publisher
db.publishers.insertMany([{
  _id: ObjectId("5b6ee7c86c25c37f77e69169"),
  name: "ぱるぷ出版",
  zip: "101-0051",
  location: "東京都千代田区神田神保町",
  foundation: ISODate("1969-01-01T00:00:00+09:00")
}, {
  _id: ObjectId("5b6ee7cc6c25c37f77e6916a"),
  name: "平坦社",
  zip: "101-0051",
  location: "東京都千代田区神田神保町",
  foundation: ISODate("1914-01-01T00:00:00+09:00")
}, {
  _id: ObjectId("5b6ee7ce6c25c37f77e6916b"),
  name: "文藝夏冬",
  zip: "102-8008",
  location: "東京都千代田区紀尾井町",
  foundation: ISODate("1946-06-01T00:00:00+09:00")
}, {
  _id: ObjectId("5b6ee7cf6c25c37f77e6916c"),
  name: "新朝社",
  zip: "162-8711",
  location: "東京都新宿区矢来町",
  foundation: ISODate("1896-01-01T00:00:00+09:00")
}, {
  _id: ObjectId("5b6ee7cf6c25c37f77e6916d"),
  name: "和文社",
  zip: "162-8680",
  location: "東京都新宿区横寺町",
  foundation: ISODate("1931-10-01T00:00:00+09:00")
}, {
  _id: ObjectId("5b6ee7d06c25c37f77e6916e"),
  name: "大阪紳士社",
  zip: "",
  location: "",
  foundation: ISODate("1899-11-11T00:00:00+09:00")
}, {
  _id: ObjectId("5b6ee7d06c25c37f77e6916f"),
  name: "筑紫書房",
  zip: "111-8755",
  location: "東京都台東区蔵前",
  foundation: ISODate("1940-06-18T00:00:00+09:00")
}, {
  _id: ObjectId("5b6ee7d16c25c37f77e69170"),
  name: "角河書店",
  zip: "102-8177",
  location: "東京都千代田区富士見",
  foundation: ISODate("1945-11-10T00:00:00+09:00")
}, {
  _id: ObjectId("5b6ee7d26c25c37f77e69171"),
  name: "講話社",
  zip: "112-8001",
  location: "東京都文京区音羽",
  foundation: ISODate("1938-12-01T00:00:00+09:00")
}])

// Book
db.books.insertMany([{
  _id: ObjectId("5b6f03356c25c37f77e69172"),
  title: "羅生門",
  authors: [
    "芥川 龍之介"
  ],
  type: "文庫",
  categories: [
    "文芸作品",
    "日本文学"
  ],
  price: 400,
  pages: 301,
  publisher: "新朝社",
  launch: (ISODate("2005-10-01T00:00:00+09:00")),
  reviews: [
    ObjectId("5b6a9a742ff9834cce647ffc")
  ]
}, {
  _id: ObjectId("5b6f03356c25c37f77e69173"),
  title: "蜘蛛の糸",
  authors: [
    "芥川 龍之介"
  ],
  type: "文庫",
  categories: [
    "文芸作品",
    "日本文学"
  ],
  price: 346,
  pages: 128,
  publisher: "新朝社",
  launch: (ISODate("1968-11-19T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f03366c25c37f77e69174"),
  title: "或阿呆の一生",
  authors: [
    "芥川 龍之介"
  ],
  type: "文庫",
  categories: [
    "文芸作品",
    "日本文学"
  ],
  price: 432,
  pages: 249,
  publisher: "新朝社",
  launch: (ISODate("1968-12-15T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f03366c25c37f77e69175"),
  title: "河童",
  authors: [
    "芥川 龍之介"
  ],
  type: "文庫",
  categories: [
    "文芸作品",
    "日本文学"
  ],
  price: 432,
  pages: 249,
  publisher: "新朝社",
  launch: (ISODate("1968-12-15T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f03376c25c37f77e69176"),
  title: "歯車",
  authors: [
    "芥川 龍之介"
  ],
  type: "文庫",
  categories: [
    "文芸作品",
    "日本文学"
  ],
  price: 454,
  pages: 127,
  publisher: "筑紫書房",
  launch: (ISODate("1979-08-14T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f03376c25c37f77e69177"),
  title: "D坂の殺人事件",
  authors: [
    "江戸川 乱歩"
  ],
  type: "文庫",
  categories: [
    "文学・評論",
    "ミステリー・サスペンス・ハードボイルド"
  ],
  price: 648,
  pages: 349,
  publisher: "角河書店",
  launch: (ISODate("2016-03-25T00:00:00+09:00")),
  reviews: [
    ObjectId("5b6a9a732ff9834cce647ffb"),
    ObjectId("5b6f7ba86c25c37f77e69186")
  ]
}, {
  _id: ObjectId("5b6f03386c25c37f77e69178"),
  title: "怪人二十面相",
  authors: [
    "江戸川 乱歩"
  ],
  type: "文庫",
  categories: [
    "推理小説",
    "文学・評論"
  ],
  price: 702,
  pages: 256,
  publisher: "講話社",
  launch: (ISODate("2013-05-10T00:00:00+09:00")),
  reviews: [
    ObjectId("5b6f7ba96c25c37f77e69187")
  ]
}, {
  _id: ObjectId("5b6f03386c25c37f77e69179"),
  title: "少年探偵団",
  authors: [
    "江戸川 乱歩"
  ],
  type: "文庫",
  categories: [
    "推理小説",
    "文学・評論"
  ],
  price: 670,
  pages: 224,
  publisher: "講話社",
  launch: (ISODate("2016-01-14T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f03396c25c37f77e6917a"),
  title: "父帰る",
  authors: [
    "菊池 寛"
  ],
  type: "文庫",
  categories: [
    "文学・評論",
    "戯曲・シナリオ",
    "演劇・舞台"
  ],
  price: 799,
  pages: 336,
  publisher: "筑紫書房",
  launch: (ISODate("2016-10-19T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f03396c25c37f77e6917b"),
  title: "忠直卿行状記",
  authors: [
    "菊池 寛"
  ],
  type: "文庫",
  categories: [
    "文学・評論",
    "文芸作品",
    "日本文学"
  ],
  price: 605,
  pages: 223,
  publisher: "筑紫書房",
  launch: (ISODate("1970-12-01T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f033a6c25c37f77e6917c"),
  title: "吾輩は猫である",
  authors: [
    "夏目 漱石"
  ],
  type: "文庫",
  categories: [
    "文学・評論",
    "文芸作品",
    "日本文学"
  ],
  price: 680,
  pages: 610,
  publisher: "新朝社",
  launch: (ISODate("2003-06-01T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f033a6c25c37f77e6917d"),
  title: "坊っちゃん",
  authors: [
    "夏目 漱石"
  ],
  type: "文庫",
  categories: [
    "文学・評論",
    "文芸作品",
    "日本文学"
  ],
  price: 309,
  pages: 216,
  publisher: "新朝社",
  launch: (ISODate("2003-04-01T00:00:00+09:00")),
  reviews: [
    ObjectId("5b6a9a732ff9834cce647ffa")
  ]
}, {
  _id: ObjectId("5b6f033a6c25c37f77e6917e"),
  title: "三四郎",
  authors: [
    "夏目 漱石"
  ],
  type: "文庫",
  categories: [
    "文学・評論",
    "文芸作品",
    "日本文学"
  ],
  price: 367,
  pages: 354,
  publisher: "新朝社",
  launch: (ISODate("1948-10-27T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f033b6c25c37f77e6917f"),
  title: "門",
  authors: [
    "夏目 漱石"
  ],
  type: "文庫",
  categories: [
    "文学・評論",
    "文芸作品",
    "日本文学"
  ],
  price: 400,
  pages: 231,
  publisher: "新朝社",
  launch: (ISODate("1986-11-29T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f033b6c25c37f77e69180"),
  title: "にごりえ",
  authors: [
    "樋口 一葉"
  ],
  type: "文庫",
  categories: [
    "文学・評論",
    "文芸作品",
    "日本文学"
  ],
  price: 400,
  pages: 287,
  publisher: "新朝社",
  launch: (ISODate("2003-01-01T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f033c6c25c37f77e69181"),
  title: "たけくらべ",
  authors: [
    "樋口 一葉"
  ],
  type: "文庫",
  categories: [
    "文学・評論",
    "文芸作品",
    "日本文学"
  ],
  price: 400,
  pages: 287,
  publisher: "新朝社",
  launch: (ISODate("2003-01-01T00:00:00+09:00")),
  reviews: [
  ]

}, {
  _id: ObjectId("5b6f033c6c25c37f77e69182"),
  title: "十三夜",
  authors: [
    "樋口 一葉"
  ],
  type: "文庫",
  categories: [
    "文学・評論",
    "文芸作品",
    "日本文学"
  ],
  price: 562,
  pages: 180,
  publisher: "筑紫書房",
  launch: (ISODate("1979-02-01T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f033d6c25c37f77e69183"),
  title: "わかれ道",
  authors: [
    "樋口 一葉"
  ],
  type: "電子",
  categories: [
    "文学・評論",
    "文芸作品",
    "日本文学"
  ],
  price: 0,
  pages: 8,
  publisher: "新朝社",
  launch: (ISODate("1962-11-19T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f033d6c25c37f77e69184"),
  title: "歌よみに与ふる書",
  authors: [
    "正岡 子規"
  ],
  type: "文庫",
  categories: [
    "文学・評論",
    "評論・文学研究",
    "詩集"
  ],
  price: 562,
  pages: 180,
  publisher: "筑紫書房",
  launch: (ISODate("1983-03-16T00:00:00+09:00")),
  reviews: [
  ]
}, {
  _id: ObjectId("5b6f033e6c25c37f77e69185"),
  title: "みだれ髪",
  authors: [
    "与謝野 晶子"
  ],
  type: "文庫",
  categories: [
    "文学・評論",
    "歌集"
  ],
  price: 432,
  pages: 208,
  publisher: "角河書店",
  launch: (ISODate("2017-06-17T00:00:00+09:00")),
  reviews: [
  ]
}]);

// User
db.users.insertMany([{
  _id: ObjectId("5b6a7aab2ff9834cce647fd4"),
  email: "tsuyoshi.tanaka@sample.co.jp",
  password: "P@ssw0rd",
  name: "田中 剛",
  sex: "male",
  bookshelf: [{
    book: ObjectId("5b6f033a6c25c37f77e6917d"),
    status: "読了",
    registered: ISODate("2017-12-15T12:00:00+09:00"),
    readed: ISODate("2018-01-10T12:00:00+09:00"),
    review: ObjectId("5b6a9a732ff9834cce647ffa")
  }, {
    book: ObjectId("5b6f03376c25c37f77e69177"),
    status: "読了",
    registered: ISODate("2018-01-11T12:00:00+09:00"),
    readed: ISODate("2018-02-08T12:00:00+09:00"),
    review: ObjectId("5b6a9a732ff9834cce647ffb")
  }, {
    book: ObjectId("5b6f03356c25c37f77e69172"),
    status: "読了",
    registered: ISODate("2018-01-11T12:00:00+09:00"),
    readed: ISODate("2018-03-06T12:00:00+09:00"),
    review: ObjectId("5b6a9a742ff9834cce647ffc")
  }, {
    book: ObjectId("5b6f033a6c25c37f77e6917e"),
    status: "読書中",
    registered: ISODate("2018-01-11T12:00:00+09:00"),
    readed: null,
    review: null
  }, {
    book: ObjectId("5b6f033e6c25c37f77e69185"),
    status: "",
    registered: ISODate("2018-01-11T12:00:00+09:00"),
    readed: null,
    review: null
  }]
}, {
  _id: ObjectId("5b6a7d992ff9834cce647fd5"),
  email: "yusuke.suzuki@sample.co.jp",
  password: "P@ssw0rd",
  name: "鈴木 祐介",
  sex: "male",
  bookshelf: [{
    book: ObjectId("5b6f03376c25c37f77e69177"),
    status: "読了",
    registered: ISODate("2018-04-12T12:00:00+09:00"),
    readed: ISODate("2018-05-10T12:00:00+09:00"),
    review: ObjectId("5b6f7ba86c25c37f77e69186")
  }, {
    book: ObjectId("5b6f03386c25c37f77e69178"),
    status: "読了",
    registered: ISODate("2018-04-12T12:00:00+09:00"),
    readed: ISODate("2018-05-28T12:00:00+09:00"),
    review: ObjectId("5b6f7ba96c25c37f77e69187")
  }, {
    book: ObjectId("5b6f03386c25c37f77e69179"),
    status: "",
    registered: ISODate("2018-04-12T12:00:00+09:00"),
    readed: null,
    review: null
  }]
}]);

// Review
db.reviews.insertMany([{
  _id: ObjectId("5b6a9a732ff9834cce647ffa"),
  user: ObjectId("5b6a7aab2ff9834cce647fd4"),
  book: ObjectId("5b6f033a6c25c37f77e6917d"),
  post: ISODate("2018-01-12T12:00:00+09:00"),
  score: 3.0,
  comment: "「坊っちゃん」の「田中」の感想。"
}, {
  _id: ObjectId("5b6a9a732ff9834cce647ffb"),
  user: ObjectId("5b6a7aab2ff9834cce647fd4"),
  book: ObjectId("5b6f03376c25c37f77e69177"),
  post: ISODate("2018-02-10T12:00:00+09:00"),
  score: 4.0,
  comment: "「D坂の殺人事件」の「田中」の感想。"
}, {
  _id: ObjectId("5b6a9a742ff9834cce647ffc"),
  user: ObjectId("5b6a7aab2ff9834cce647fd4"),
  book: ObjectId("5b6f03356c25c37f77e69172"),
  post: ISODate("2018-03-08T12:00:00+09:00"),
  score: 3.5,
  comment: "「羅生門」の「田中」の感想。"
}, {
  _id: ObjectId("5b6f7ba86c25c37f77e69186"),
  user: ObjectId("5b6a7d992ff9834cce647fd5"),
  book: ObjectId("5b6f03376c25c37f77e69177"),
  post: ISODate("2018-05-12T12:00:00+09:00"),
  score: 3.2,
  comment: "「D坂の殺人事件」の「鈴木」の感想。"
}, {
  _id: ObjectId("5b6f7ba96c25c37f77e69187"),
  user: ObjectId("5b6a7d992ff9834cce647fd5"),
  book: ObjectId("5b6f03386c25c37f77e69178"),
  post: ISODate("2018-06-01T12:00:00+09:00"),
  score: 4.2,
  comment: "「怪人二十面相」の「鈴木」の感想。"
}]);