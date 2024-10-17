"use client";

export const useLocalStorage = () => {
  const removeData = (key: string) => {
    return localStorage.removeItem(key);
  };
  const serializer = (value: unknown) => {
    return JSON.stringify(value);
  };

  const deserializer = (value: string) => {
    if (value === "undefined") {
      return undefined as unknown;
    }

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  };
  const setData = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };
  const getData = (key: string) => {
    const value = localStorage.getItem(key);
    if (!value) {
      return undefined;
    }
    return deserializer(value);
  };
  return {
    setData,
    getData,
    removeData,
    serializer,
    deserializer,
  };
};
