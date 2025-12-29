import AnimatedSearch from "@/components/search/SearchBar";
import MoodTabs from "@/components/common/Tab";
import { MPLogo } from "@/components/common/BrandLogo";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import ResultGrid from "@/components/search/ResultGrid";
import Footer from "@/components/common/Footer";
import { Link, useSearchParams } from "react-router-dom";
import { ROUTES_LINKS } from "@/routes/route-links";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "@/store/slices/search.slice";
import type { RootState } from "@/store";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const searchData = useSelector((state: RootState) => state.search.query);

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) {
      dispatch(setQuery(q));
    }
  }, [searchParams, dispatch]);
  return (
    <>
      <main className="w-full min-h-screen">
        <div className="bg-gray-200 md:py-3 py-2 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0 px-1 md:px-6 fixed w-full top-0 z-1000">
          <div className="flex justify-between w-full md:w-auto">
            <Link to={ROUTES_LINKS.HOME_PAGE} className="cursor-pointer">
              <MPLogo width={120} height={40} />
            </Link>
            <div className="flex-1 justify-end z-20 md:hidden flex mr-3">
              <Link
                to={ROUTES_LINKS.COLLECTION_PAGE}
                className="cursor-pointer"
              >
                <Button
                  variant="ghost"
                  className={`rounded-full h-10 gap-2 transition-all duration-300 bg-slate-100 text-slate-900 cursor-pointer`}
                >
                  <Heart className="w-4 h-4 text-rose-500 fill-current" />
                  <span className="font-medium text-sm">My Collection</span>
                </Button>
              </Link>
            </div>
          </div>
          <AnimatedSearch />
          <div className="flex-1 justify-end z-20 md:flex hidden">
            <Link to={ROUTES_LINKS.COLLECTION_PAGE} className="cursor-pointer">
              <Button
                variant="ghost"
                className={`rounded-full h-10 gap-2 transition-all duration-300 bg-slate-100 text-slate-900 cursor-pointer`}
              >
                <Heart className="w-4 h-4 text-rose-500 fill-current" />
                <span className="hidden sm:inline font-medium text-sm">
                  My Collection
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {searchData && (
          <div className="md:mt-22.5 mt-32.5">
            <MoodTabs />
          </div>
        )}

        <div className="md:max-w-330 w-full mx-auto mt-8 md:mt-15">
          <ResultGrid />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SearchPage;
