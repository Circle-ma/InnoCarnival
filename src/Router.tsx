import { useRoutes } from "react-router-dom";
import Mc from "./Mc";
import Face from "./Face";
import bugQ, { bugTopic } from "./mcq/bug/Questions";
import dnaQ, { dnaTopic } from "./mcq/dna/Questions";
import herbChainQ, { herbChainTopic } from "./mcq/herbchain/Questions";
import parkinsonQ, { parkinsonTopic } from "./mcq/parkinson/Questions";
import solidLightQ, { solidLightTopic } from "./mcq/solidLight/Questions";
import riskManQ, { riskManTopic } from "./mcq/riskman/Questions";
import Questions, { ProjectName } from "./Questions";

const projectList = [
  {
    Name: ProjectName,
    path: "/",
    questionsList: Questions,
    navigate: "../",
    apps_id: "app01",
  },
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
  {
    Name: riskManTopic,
    path: "/riskman",
    questionsList: riskManQ,
    navigate: "../riskman",
    apps_id: "app07",
  },
];

let linkList = projectList.map((project) => {
  return { navigate: project.navigate, projectName: project.Name };
});

const Facetolist = [{ navigate: "../facialmask", projectName: "改頭換面" }];
linkList = linkList.concat(Facetolist);

const MC = projectList.map((project) => {
  return {
    path: project.path,
    element: (
      <Mc
        questionsList={project.questionsList}
        projectName={project.Name}
        apps_id={project.apps_id}
        linkList={linkList}
      />
    ),
  };
});

const FACE = [{ path: "/facialmask", element: <Face /> }];

const routerConfig = MC.concat(FACE);

const Router: React.FC = () => {
  const element = useRoutes(routerConfig);
  return <>{element}</>;
};

export default Router;
