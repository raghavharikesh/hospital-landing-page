import axios from "axios";

export const getReviews = async () => {
  const response = await axios.get(
    "https://admin.tomedes.com/api/v1/get-reviews?page=1"
  );

  return response.data.data;
};