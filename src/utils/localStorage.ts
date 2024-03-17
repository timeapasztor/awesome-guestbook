import { Visitors } from "../types/visitor";

const LOCAL_STORAGE_TABLE_KEY = "table-data";

export const tableLocalStorageMethods = {
  get: () => {
    const data = localStorage.getItem(LOCAL_STORAGE_TABLE_KEY);
    return data ? (JSON.parse(data) as Visitors) : null;
  },

  set: ({
    id,
    key,
    value,
  }: { id: number } & (
    | { key: "checkbox"; value: boolean }
    | { key: "notes"; value: string }
  )) => {
    const data = localStorage.getItem(LOCAL_STORAGE_TABLE_KEY);
    const parsedData = data ? (JSON.parse(data) as Visitors) : null;
  },

  find: ({ id }: { id: number }) => {
    const data = localStorage.getItem(LOCAL_STORAGE_TABLE_KEY);

    if (data) {
      const parsedData = JSON.parse(data) as Visitors;
      return parsedData.find((item) => item.id === id);
    }
  },
};
