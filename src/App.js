import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import HomePage from "./Pages/HomePage/HomePage";
import Content from "./Pages/HomePage/Content/Content";
import Page2 from "./Pages/Page2/Page2";
import Page4 from "./Pages/Page4/Page4";
import Page3 from "./Pages/Page3/Page3";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/wysiwyg-editor" />} />
        <Route path="/wysiwyg-editor" element={<HomePage />}>
          <Route exact path=":contentType" element={<Content />} />
        </Route>
        <Route path="/page-2" element={<Page2 />} />
        <Route path="/page-3" element={<Page3 />} />
        <Route path="/page-4" element={<Page4 />} />
      </Routes>
    </Layout>
  );
}

export default App;
