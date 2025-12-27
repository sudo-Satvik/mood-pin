import axios from "axios";
import {
  UNSPLASH_BASE_URL,
  UNSPLASH_KEY,
  TENOR_API_KEY,
  TENOR_BASE_URL,
  PEXELS_BASE_URL,
  PEXELS_KEY,
} from "@/utils/envar";

export const fetchImages = async (query: string, page = 1, per_page = 20) => {
  const res = await axios.get(`${UNSPLASH_BASE_URL}/search/photos`, {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return res?.data?.results;
};

export const fetchVideos = async (query: string, per_page = 15) => {
  const res = await axios.get(`${PEXELS_BASE_URL}/search`, {
    params: { query, per_page },
    headers: { Authorization: PEXELS_KEY },
  });
  return res?.data?.videos;
};

export const fetchGif = async (query: string, limit = 20) => {
  const res = await axios.get(`${TENOR_BASE_URL}/search`, {
    params: { q: query, key: TENOR_API_KEY, limit },
  });
  return res?.data?.results;
};
