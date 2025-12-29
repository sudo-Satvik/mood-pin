import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import CollectionCard from "@/components/collection/CollectionCard";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/store";
import { Layers, HeartOff, CircleX } from "lucide-react";
import {
  removeCollection,
  clearCollection,
} from "@/store/slices/collection.slice";
import { Link } from "react-router-dom";
import { ROUTES_LINKS } from "@/routes/route-links";

const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collectionData = useSelector(
    (state: RootState) => state.collection.items
  );

  const handleRemove = (id: number | string) => {
    dispatch(removeCollection(id));
  };

  const handleClear = () => {
    dispatch(clearCollection());
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="grow w-full">
        <div className="relative w-full bg-white pb-8 border-b border-slate-200">
          <div className="h-48 md:h-72 w-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500"></div>
            <img
              src={BANNER_IMAGE}
              alt="Collection Cover"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative -mt-10 sm:-mt-14 z-10">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-7.5">
              <div className="flex items-end gap-4">
                <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-red-300 to-primary rounded-xl flex items-center justify-center text-white">
                    <Layers className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                </div>
                <div className="mb-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    My Aesthetic World
                  </h1>
                  <p className="text-slate-500 text-sm font-medium">
                    {collectionData.length} visuals pinned
                  </p>
                </div>
              </div>

              {collectionData.length !== 0 && (
                <div className="flex items-center gap-3 mb-2 w-full md:w-auto">
                  <Button
                    variant="outline"
                    onClick={handleClear}
                    className="flex-1 md:flex-none rounded-full border-slate-300 hover:bg-slate-100 text-slate-700 cursor-pointer"
                  >
                    <CircleX className="w-4 h-4 mr-2" /> Clear Your Collection
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto px-6 py-10 md:py-14">
          {collectionData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {collectionData.map((item, index) => (
                <div
                  key={item.id || index}
                  className="animate-in fade-in zoom-in duration-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CollectionCard {...item} onRemove={handleRemove} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
              <div className="bg-slate-100 p-6 rounded-full mb-4">
                <HeartOff className="w-12 h-12 text-slate-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-700">
                Your collection is empty
              </h2>
              <p className="text-slate-500 mt-2 max-w-xs mx-auto">
                Start{" "}
                <Link
                  className="text-primary hover:underline"
                  to={ROUTES_LINKS.SEARCH_PAGE}
                >
                  exploring
                </Link>{" "}
                and pin visuals that match your vibe.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionPage;
