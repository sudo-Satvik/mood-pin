export const getInitialCollection = () => {
  try {
    const data = localStorage.getItem("collection_mp");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};
