export type QuestionsProps = {
  questionNumber: number;
  topic: string;
  description: string;
  option: [string, string, string, string];
  Answer: string;
};

export const dnaTopic: string = "基於單細胞測序的疾病診斷";

const Questions: QuestionsProps[] = [
  {
    questionNumber: 1,
    topic: "第一題",
    description:
      "新的分析單細胞測序數據的統計學方法可以準確地分析什麽單細胞測序數據？",
    option: [
      "A:	細胞聚類為不同的細胞類",
      "B:	估計各細胞類的比例",
      "C:	及識別患者和健康人群之間比例不同的細胞類",
      "D:	以上皆是",
    ],
    Answer: "D",
  },
  {
    questionNumber: 2,
    topic: "第二題",
    description:
      "對真實數據的分析顯示新的分析單細胞測序數據的統計學方法在細胞聚類的準確度上比現有的方法高出多少%？",
    option: ["A:	1%", "B:	5%", "C:	10%", "D:	21%"],
    Answer: "D",
  },
  {
    questionNumber: 3,
    topic: "第三題",
    description: "以下哪一項是新的分析單細胞測序數據的統計學方法的好處？",
    option: [
      "A:	對檢測稀有的細胞類型具有高精度",
      "B:	對檢測患者和健康人群之間細胞組成比例的變化不敏感",
      "C:	不能整合採自不同實驗室的數據進行分析",
      "D:	可對5個的細胞進行快速計算",
    ],
    Answer: "A",
  },
  {
    questionNumber: 4,
    topic: "第四題",
    description: "新的分析單細胞測序數據的統計學方法能夠引用於以下哪些檢測？",
    option: ["A:	血液檢測", "B:	尿液檢測", "C:	病理化驗", "D:	以上皆是"],
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
