import { TData } from "../types/TData";

export const fetchData = async () => {
  try {
    const response = await fetch("https://logiclike.com/docs/courses.json", {
      method: "GET",
    });
    const data: TData[] = await response.json();
    return response.ok ? data : [];
  } catch (e) {
    console.log(e);
    return [];
  }
};
