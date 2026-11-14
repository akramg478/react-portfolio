import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Collection from "./pages/Collection";
import Home from "./pages/Home";
import Inquire from "./pages/Inquire";
import Projects from "./pages/Projects";
import Studio from "./pages/Studio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="projects" element={<Projects />} />
          <Route path="studio" element={<Studio />} />
          <Route path="inquire" element={<Inquire />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
