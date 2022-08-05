import { RouteObject, useRoutes } from "react-router-dom";
import App from "./App";
import bugQ, { bugTopic } from "./mcq/bug/Questions";
import dnaQ, { dnaTopic } from "./mcq/dna/Questions";
import herbChainQ, { herbChainTopic } from "./mcq/herbchain/Questions";
import parkinsonQ, { parkinsonTopic } from "./mcq/parkinson/Questions";
import solidLightQ, { solidLightTopic } from "./mcq/solidLight/Questions";
import Questions, { Topic } from "./Questions";

const routerConfig: RouteObject[] = [
  {
    path: "/",
    element: <App questionsList={Questions} topic={Topic} />,
  },
  {
    path: "/bug",
    element: <App questionsList={bugQ} topic={bugTopic} />,
  },
  {
    path: "/dna",
    element: <App questionsList={dnaQ} topic={dnaTopic} />,
  },
  {
    path: "/herbchain",
    element: <App questionsList={herbChainQ} topic={herbChainTopic} />,
  },
  {
    path: "/parkinson",
    element: <App questionsList={parkinsonQ} topic={parkinsonTopic} />,
  },
  {
    path: "/solidLight",
    element: <App questionsList={solidLightQ} topic={solidLightTopic} />,
  },
];

const Router: React.FC = () => {
  const element = useRoutes(routerConfig);
  return <>{element}</>;
};

export default Router;
