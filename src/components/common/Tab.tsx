import { TAB_CONTENT as tabs } from "@/constants";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "@/store/slices/search.slice";
import type { RootState, AppDispatch } from "@/store";

export default function MoodTabs() {
  const dispatch = useDispatch<AppDispatch>();
  const activeTab = useSelector((state: RootState) => state.search.activeTab);

  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center p-1.5 bg-slate-100/80 backdrop-blur-sm border border-slate-200/50 rounded-full shadow-inner gap-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.tabKey;
          return (
            <button
              key={tab.id}
              onClick={() => dispatch(setActiveTab(tab.tabKey))}
              className={`relative flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 z-10 cursor-pointer
                ${
                  isActive
                    ? "text-primary"
                    : "text-slate-500 hover:text-slate-700"
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/60 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab.tabIcon}
                <span>{tab.tabDisplay}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
