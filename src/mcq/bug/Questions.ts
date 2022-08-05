export type QuestionsProps = {
  questionNumber: number;
  topic: string;
  description: string;
  option: [string, string, string, string];
  Answer: string;
};

export const Topic:string = "為新農民提供互動及可持續的平台(第一階段)：香港農業常見的害蟲"

const Questions: QuestionsProps[] = [
  {
    questionNumber: 1,
    topic: "第一題",
    description:
      "本地主要的作物生產為？",
    option: ["A:	小麥和稻米", "B:	蔬菜和花卉", "C:	水果", "D:	甘蔗和粟米"],
    Answer: "B",
  },
  {
    questionNumber: 2,
    topic: "第二題",
    description:
      "此項目將建立一個集中討論什麽的平台，希望透過大衆市民不斷更新的資料，令此平台可持續的發展？",
    option: ["A:	氣候", "B:	農作物生產方法", "C:	農業害蟲", "D:	溫室搭建方法"],
    Answer: "C",
  },
  {
    questionNumber: 3,
    topic: "第三題",
    description:
      "透過流動應用程式，用戶可以透過什麽上載圖片到網站上？",
    option: ["A:	手機拍照", "B:	郵寄", "C:	信息", "D:	電子郵件"],
    Answer: "A",
  },
  // {
  //   questionNumber: 4,
  //   topic: "第四題",
  //   description:
  //     "新的分析單細胞測序數據的統計學方法能夠引用於以下哪些檢測？",
  //   option: ["A:	血液檢測", "B:	尿液檢測", "C:	病理化驗", "D:	以上皆是"],
  //   Answer: "D",
  // },
  // {
  //   questionNumber: 5,
  //   topic: "5.What do you want to be?",
  //   description:
  //     "She reached her goal, exhausteD: Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
  //   option: ["A", "B", "C", "D"],
  //   Answer: "B",
  // },
  // {
  //   questionNumber: 6,
  //   topic: "6.What do you want to be?",
  //   description:
  //     "She reached her goal, exhausteD: Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
  //   option: ["A", "B", "C", "D"],
  //   Answer: "B",
  // },
  // {
  //   questionNumber: 7,
  //   topic: "7.What do you want to be?",
  //   description:
  //     "She reached her goal, exhausteD: Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
  //   option: ["A", "B", "C", "D"],
  //   Answer: "B",
  // },
  // {
  //   questionNumber: 8,
  //   topic: "8.What do you want to be?",
  //   description:
  //     "She reached her goal, exhausteD: Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
  //   option: ["A", "B", "C", "D"],
  //   Answer: "B",
  // },
  // {
  //   questionNumber: 9,
  //   topic: "9.What do you want to be?",
  //   description:
  //     "She reached her goal, exhausteD: Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
  //   option: ["A", "B", "C", "D"],
  //   Answer: "B",
  // },
  // {
  //   questionNumber: 10,
  //   topic: "10.What do you want to be?",
  //   description:
  //     "She reached her goal, exhausteD: Even more chilling to her was that the euphoria that she thought she'd feel upon reaching it wasn't there. Something wasn't right. Was this the only feeling she'd have for over five years of hard work?",
  //   option: ["A", "B", "C", "D"],
  //   Answer: "B",
  // },
];

export default Questions;
