export type QuestionsProps = {
  questionNumber: number;
  topic: string;
  description: string;
  option: [string, string, string, string];
  Answer: string;
};

export const riskManTopic: string = "用於交易和風險管理的深度學習";

const Questions: QuestionsProps[] = [
  {
    questionNumber: 1,
    topic: "第一題",
    description:
      "以下哪一項正確排序了過深度學習和GPU技術的系統於即日交易市場獲利的過程？\n（1）系統生成交易信號\n（2）系統根據交易信號即時建立投資模型\n（3）系統優化信號的使用\n（4）在真實交易環境下根據信號執行訂單只有",
    option: [
      "A: （1），（2），（4）",
      "B: （1），（3），（4）",
      "C:	（2），（3），（4）",
      "D:	（3），（4），（2）",
    ],
    Answer: "B",
  },
  {
    questionNumber: 2,
    topic: "第二題",
    description: "於日間交易中，深度學習的模型如何有助構建獲利更高的投資組合？",
    option: [
      "A:	更準確預測交易信號",
      "B:	生成更多交易信號",
      "C:	挖掘更多因子",
      "D:	以上皆否",
    ],
    Answer: "A",
  },
  {
    questionNumber: 3,
    topic: "第三題",
    description: "以下哪一個模型能夠檢測更多的多空信號？",
    option: ["A:	VaR控制", "B:	focal損失函數", "C:	GPU技術", "D:	LOB交易系統"],
    Answer: "B",
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
