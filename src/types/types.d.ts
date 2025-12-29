import type { IMediaItem } from "./interfaces";

type TSearchInitialState = {
  query: string;
  activeTab: "photo" | "video" | "gif";
  resultsByTab: {
    photo: IMediaItem[];
    video: IMediaItem[];
    gif: IMediaItem[];
  };
  loading: boolean;
  error: string | null;
};

type TMediaType = "video" | "image";
