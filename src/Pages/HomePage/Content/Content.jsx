import { useParams } from "react-router-dom";

import Editor from "./Editor";
import Page from "./Page";
import Quiz from "./Quiz";
import Video from "./Video";

function Content() {
  const { contentType } = useParams();

  switch (contentType) {
    case "editor":
      return <Editor />;
    case "page":
      return <Page />;
    case "quiz":
      return <Quiz />;
    case "videos":
      return <Video />;

    default:
      return null;
  }
}

export default Content;
