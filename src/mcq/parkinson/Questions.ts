export type QuestionsProps = {
  questionNumber: number;
  topic: string;
  description: string;
  option: [string, string, string, string];
  Answer: string;
};

export const parkinsonTopic: string =
  "帕金森神經退行性疾病的步態動力學與可穿戴健康監測方法";

const Questions: QuestionsProps[] = [
  {
    questionNumber: 1,
    topic: "第一題",
    description: "本項目透過什麽來形成帕金森病步態綜合量化評價指標？",
    option: ["A:	肌電信號", "B:	運動學參數", "C:	動力學參數", "D:	以上皆是"],
    Answer: "D",
  },
  {
    questionNumber: 2,
    topic: "第二題",
    description: "可穿戴健康監測與帕金森智能診斷系統能夠為帕金遜病人提供什麽？",
    option: [
      "A:	治愈帕金森病人",
      "B:	幫助帕金森病人穩定動作",
      "C:	便捷且準確的日常監測與早期診斷服務",
      "D:	防止帕金森神經退行性疾病",
    ],
    Answer: "C",
  },
  {
    questionNumber: 3,
    topic: "第三題",
    description: "以下哪一項不是可穿戴健康監測與帕金森智能診斷系統的優勢？",
    option: ["A:	針對性強", "B:	前瞻性強", "C:	輕便可靠", "D:	保護性強"],
    Answer: "D",
  },
  {
    questionNumber: 4,
    topic: "第四題",
    description: "如何應用可穿戴健康監測與帕金森智能診斷系統？",
    option: [
      "A:	老年人的健康狀態評估",
      "B:	帕金森病早期診斷和治療的精準健康護理",
      "C:	對帕金森患者的即時長期監測與突發事件報警",
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
