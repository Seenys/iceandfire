export const getDataFromUri = async (uri: string): Promise<any> => {
  try {
    const response: Response = await fetch(uri);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
