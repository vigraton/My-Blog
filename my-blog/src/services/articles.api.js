async function getArticles() {
  try {
    const response = await fetch("https://dev.to/api/articles?per_page=5", {
      headers: {
        "api-key": import.meta.env.DEV_TO_API_KEY,
      },
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const service = {
  get: getArticles,
};
