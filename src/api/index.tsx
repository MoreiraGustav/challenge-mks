import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export async function getProducts(page = 1, rows = 5, sortBy = 'name', orderBy = 'DESC') {
  try {
    const response = await axios.get(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products`, {
      params: {
        page,
        rows,
        sortBy,
        orderBy
      }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
    return null;
  }
}

export default function useProducts() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    refetchOnWindowFocus: false,
  });

  return { isLoading, error, data: products };
}
