import { useRoutes } from "react-router-dom";
import App from "./App";
import bugQ, { bugTopic } from "./mcq/bug/Questions";
import dnaQ, { dnaTopic } from "./mcq/dna/Questions";
import herbChainQ, { herbChainTopic } from "./mcq/herbchain/Questions";
import parkinsonQ, { parkinsonTopic } from "./mcq/parkinson/Questions";
import solidLightQ, { solidLightTopic } from "./mcq/solidLight/Questions";
// import Questions, { ProjectName } from "./Questions";

const projectList = [
  // { Name: ProjectName, path: "/", questionsList: Questions, navigate: "../" },
  {
    Name: bugTopic,
    path: "/bug",
    questionsList: bugQ,
    navigate: "../bug",
    apps_id: "app02",
  },
  {
    Name: dnaTopic,
    path: "/dna",
    questionsList: dnaQ,
    navigate: "../dna",
    apps_id: "app01",
  },
  {
    Name: herbChainTopic,
    path: "/herbchain",
    questionsList: herbChainQ,
    navigate: "../herbchain",
    apps_id: "app03",
  },
  {
    path: "/parkinson",
    questionsList: parkinsonQ,
    navigate: "../parkinson",
    Name: parkinsonTopic,
    apps_id: "app04",
  },
  {
    Name: solidLightTopic,
    path: "/solidLight",
    questionsList: solidLightQ,
    navigate: "../solidLight",
    apps_id: "app05",
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
        apps_id={project.apps_id}
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
