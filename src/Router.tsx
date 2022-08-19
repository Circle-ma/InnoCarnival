import { useRoutes } from "react-router-dom";
import App from "./App";
import bugQ, { bugTopic } from "./mcq/bug/Questions";
import dnaQ, { dnaTopic } from "./mcq/dna/Questions";
import herbChainQ, { herbChainTopic } from "./mcq/herbchain/Questions";
import parkinsonQ, { parkinsonTopic } from "./mcq/parkinson/Questions";
import solidLightQ, { solidLightTopic } from "./mcq/solidLight/Questions";
import Questions, { ProjectName } from "./Questions";

const projectList = [
  // { Name: ProjectName, path: "/", questionsList: Questions, navigate: "../" },
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

const linkList = projectList.map((project) => {
  return { navigate: project.navigate, projectName: project.Name };
});

const routerConfig = projectList.map((project) => {
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

const Router: React.FC = () => {
  const element = useRoutes(routerConfig);
  return <>{element}</>;
};

export default Router;
