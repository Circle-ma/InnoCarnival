export type QuestionsProps = {
  questionNumber: number;
  topic: string;
  description: string;
  option: [string, string, string, string];
  Answer: string;
};

export const solidLightTopic: string = "用於傳感應用的周期性納米結構";

const Questions: QuestionsProps[] = [
  {
    questionNumber: 1,
    topic: "第一題",
    description:
      "開發不同類型的光學傳感器，將納米結構的光學特性應用於什麽的傳感？",
    option: ["A: 氣體", "B:	病毒", "C:	顆粒物 (PM)", "D:	以上皆是"],
    Answer: "D",
  },
  {
    questionNumber: 2,
    topic: "第二題",
    description: "在中紅外頻譜中，我們實現了什麽水平的揮發性有機化合物傳感？",
    option: ["A:	一百分之一", "B:	一萬分之一", "C:	一億分之一", "D:	十億分之一"],
    Answer: "D",
  },
  {
    questionNumber: 3,
    topic: "第三題",
    description: "傳感器現在可用於檢測什麽？",
    option: [
      "A:	低濃度的PM 0.1 和 PM 0.3",
      "B:	pH值",
      "C:	空氣污染指數",
      "D:	COVID-19 和流感病毒",
    ],
    Answer: "A",
  },
  {
    questionNumber: 4,
    topic: "第四題",
    description: "如何應用納米級週期性納米結構光學傳感器？",
    option: [
      "A:	氣體傳感器或電子鼻，用於環境監測和呼出氣活檢",
      "B:	用於環境和污染監測的 PM 傳感器",
      "C:	用於醫學診斷和環境監測的病毒傳感器。",
      "D:	以上皆是",
    ],
    Answer: "D",
  },
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
