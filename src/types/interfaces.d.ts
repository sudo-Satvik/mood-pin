import type { ReactNode } from "react";

interface ITabContent {
  id: number;
  tabKey: string;
  tabDisplay: string;
  tabIcon: ReactNode;
}

interface ICardProps {
  mediaType?: TMediaType;
  src?: string;
  mediaName?: string;
  data?: IMediaItem;
  addToCollection?: (item: IMediaItem) => void;
}

interface IPhotoResponse {
  url: any;
  alt_description: any;
  id: string;
  urls: {
    small: string;
    full: string;
  };
}

interface IVideoResponse {
  url: any;
  user: any;
  id: string;
  item: {
    user: {
      name: string;
    };
  };
  image: string;
  video_files: {
    link: string;
  };
}

interface IGifResponse {
  url: any;
  id: string;
  title: string;
  media_formats: {
    tinygif: {
      url: string;
    };
    gif: {
      url: string;
    };
  };
}

interface IMediaItem {
  url: string | undefined;
  id: string;
  type: "photo" | "video" | "gif";
  title?: string;
  desc?: string;
  thumbnail?: string;
  src?: string;
}

interface ICollectionState {
  items: IMediaItem[];
}