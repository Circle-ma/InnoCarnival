import { useRoutes } from "react-router-dom";
import App from "./App";
import bugQ, { bugTopic } from "./mcq/bug/Questions";
import dnaQ, { dnaTopic } from "./mcq/dna/Questions";
import herbChainQ, { herbChainTopic } from "./mcq/herbchain/Questions";
import parkinsonQ, { parkinsonTopic } from "./mcq/parkinson/Questions";
import solidLightQ, { solidLightTopic } from "./mcq/solidLight/Questions";
import Questions, { Topic } from "./Questions";

const routerList = [
  { Name: Topic, path: "/", questionsList: Questions, navigate: "../" },
  { Name: bugTopic, path: "/bug", questionsList: bugQ, navigate: "../bug" },
  { Name: dnaTopic, path: "/dna", questionsList: dnaQ, navigate: "../dna" },
  {
    Name: herbChainTopic,
    path: "/herbchain",
    questionsList: herbChainQ,
    navigate: "../herbchain",
  },
  {
    path: "/parkinson",
    questionsList: parkinsonQ,
    navigate: "../parkinson",
    Name: parkinsonTopic,
  },
  {
    Name: solidLightTopic,
    path: "/solidLight",
    questionsList: solidLightQ,
    navigate: "../solidLight",
  },
];

const linkList = routerList.map((project) => {
  return { navigate: project.navigate, projectName: project.Name };
});

const routerConfig = routerList.map((project) => {
  return {
    path: project.path,
    element: (
      <App
        questionsList={project.questionsList}
        projectName={project.Name}
        linkList={linkList}
      />
    ),
  };
});

// const routerConfig: RouteObject[] = [
//   {
//     path: routerList[0].path,
//     element: <App questionsList={routerList[0].questionsList} topic={routerList[0].topic} />,
//   },
// {
//   path: "/bug",
//   element: <App questionsList={bugQ} topic={bugTopic} />,
// },
// {
//   path: "/dna",
//   element: <App questionsList={dnaQ} topic={dnaTopic} />,
// },
// {
//   path: "/herbchain",
//   element: <App questionsList={herbChainQ} topic={herbChainTopic} />,
// },
// {
//   path: "/parkinson",
//   element: <App questionsList={parkinsonQ} topic={parkinsonTopic} />,
// },
// {
//   path: "/solidLight",
//   element: <App questionsList={solidLightQ} topic={solidLightTopic} />,
// },
// ];

const Router: React.FC = () => {
  const element = useRoutes(routerConfig);
  return <>{element}</>;
};

export default Router;
