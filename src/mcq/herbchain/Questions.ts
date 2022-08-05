export type QuestionsProps = {
  questionNumber: number;
  topic: string;
  description: string;
  option: [string, string, string, string];
  Answer: string;
};

export const Topic:string = "HerBChain草藥鏈 - 一個由區塊鏈系統操作的資訊平台以提升中草藥產品的質量"

const Questions: QuestionsProps[] = [
  {
    questionNumber: 1,
    topic: "第一題",
    description:
      "為了促進中藥業界的發展，我們建立了一個透過什麽技術記錄中草藥產品由生長到產品銷售的一站式服務平台？",
    option: ["A:	區塊鏈技術", "B:	數碼存根技術 (Cookies)", "C:	記錄檔案技術 (Log Files)", "D:	網站信號技術 (Web Beacons)"],
    Answer: "A",
  },
  {
    questionNumber: 2,
    topic: "第二題",
    description:
      "「草藥鏈」包含不同的「節點」，其中包括哪些「節點」？",
    option: ["A:	種植管理", "B:	加工管理", "C:	生產管理", "D:	以上皆是"],
    Answer: "D",
  },
  {
    questionNumber: 3,
    topic: "第三題",
    description:
      "以下哪項不是「草藥鏈」的好處？",
    option: ["A:	提供品質更好的中草藥", "B:	減低市場上中藥材魚目混珠的情況", "C:	提高產品質量的透明度", "D:	加強業界的國際貿易"],
    Answer: "A",
  },
  {
    questionNumber: 4,
    topic: "第四題",
    description:
      "如何保證中藥貿易產品的真確性？",
    option: ["A:	電話查詢", "B:	透過電子真偽認證標籤及連結商品線上交易平台", "C:	電子郵件確認", "D:	查詢中醫院"],
    Answer: "B",
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
