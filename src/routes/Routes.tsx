import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Landing = lazy(() => import("@/pages/Landing"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const CollectionPage = lazy(() => import("@/pages/CollectionPage"));

const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-white/80 backdrop-blur-sm">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<PageLoader />}>
            <Landing />
          </Suspense>
        }
      />
      <Route
        path="/search"
        element={
          <Suspense fallback={<PageLoader />}>
            <SearchPage />
          </Suspense>
        }
      />
      <Route
        path="/collection"
        element={
          <Suspense fallback={<PageLoader />}>
            <CollectionPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
