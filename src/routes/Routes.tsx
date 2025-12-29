import CollectionPage from "@/pages/CollectionPage";
import Landing from "@/pages/Landing";
import SearchPage from "@/pages/SearchPage";
import { Route, Routes } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/collection" element={<CollectionPage />} />
    </Routes>
  );
};

export default AppRoutes;
