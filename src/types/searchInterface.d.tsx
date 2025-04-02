import React from "react";

export interface SearchFilter {
  id: number;
  value: string;
  label: string;
}

export interface SearchInputProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  filter: "name" | "code";
  setFilter: React.Dispatch<React.SetStateAction<"name" | "code">>;
  filterList: SearchFilter[];
}
