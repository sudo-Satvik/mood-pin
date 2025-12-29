import type { ITabContent } from "@/types/interfaces";
import { Image, FileVideoCamera, ImagePlay } from "lucide-react";

export const TAB_CONTENT: ITabContent[] = [
  {
    id: 1,
    tabKey: "photo",
    tabDisplay: "Photos",
    tabIcon: <Image />,
  },
  {
    id: 2,
    tabKey: "video",
    tabDisplay: "Videos",
    tabIcon: <FileVideoCamera />,
  },
  {
    id: 3,
    tabKey: "gif",
    tabDisplay: "GIFs",
    tabIcon: <ImagePlay />,
  },
];
