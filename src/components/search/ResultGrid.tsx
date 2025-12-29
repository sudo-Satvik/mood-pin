import React, { useEffect } from "react";
import MediaCard from "../common/MediaCard";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import type {
  IPhotoResponse,
  IVideoResponse,
  IGifResponse,
  IMediaItem,
} from "@/types/interfaces";
import { fetchVideos, fetchImages, fetchGif } from "@/api/media";
import { setError, setLoading, setResults } from "@/store/slices/search.slice";
import { addCollection, addedToast } from "@/store/slices/collection.slice";
import {
  EmptySearchState,
  ErrorSearchState,
  LoadingState,
} from "./SearchStates";

const ResultGrid: React.FC = () => {
  const { query, resultsByTab, activeTab, loading } = useSelector(
    (store: RootState) => store.search
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getData = async () => {
      if (!query.trim()) return;

      if (resultsByTab[activeTab]?.length) return;

      try {
        dispatch(setLoading());
        let data: IMediaItem[] = [];

        if (activeTab === "photo") {
          let res = await fetchImages(query);
          data = res.map((item: IPhotoResponse) => ({
            id: item?.id,
            type: "photo",
            desc: item?.alt_description,
            src: item?.urls?.small,
            thumbnail: item?.urls?.small,
            url: item?.url,
          }));
        }

        if (activeTab === "video") {
          let res = await fetchVideos(query);
          data = res.map((item: IVideoResponse) => ({
            id: item?.id,
            type: "video",
            title: item?.user?.name || "Title",
            thumbnail: item?.image,
            src: Array.isArray(item?.video_files)
              ? item?.video_files[0]?.link
              : undefined,
            url: item?.url,
          }));
        }

        if (activeTab === "gif") {
          let res = await fetchGif(query);
          data = res.map((item: IGifResponse) => ({
            id: item?.id,
            type: "gif",
            title: item?.title || "GIF",
            thumbnail: item?.media_formats?.tinygif?.url,
            src: item?.media_formats?.gif?.url,
            url: item?.url,
          }));
        }
        dispatch(setResults({ tab: activeTab, data }));
      } catch (error) {
        dispatch(setError("Something went wrong"));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  const results = resultsByTab[activeTab];

  if (!query) {
    return <EmptySearchState />;
  }

  if (query && results.length === 0 && !loading) {
    return <ErrorSearchState title={`No Results found of "${query}"`} />;
  }

  if (loading) return <LoadingState />;

  const handleAddToCollection = (item: IMediaItem) => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 px-3 gap-5">
      {results.map((item) => (
        <a href={item?.url} target="_blank">
          <MediaCard
            key={item.id}
            mediaType={item.type}
            src={item.src}
            mediaName={item.title || item.desc}
            addToCollection={handleAddToCollection}
            data={item}
          />
        </a>
      ))}
    </div>
  );
};

export default ResultGrid;
