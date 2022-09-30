import ListItem, { ButtonProps, LinkProps } from "./ListItem";
import React, { useContext } from "react";
import { SearchContext } from "../lib/context";

interface FreeSearchActionProps extends Omit<ButtonProps & LinkProps, "index"> {
  index?: number;
  label?: string;
  searchIcon: any;
}

export default function FreeSearchAction({
  label = "Search for",
  searchIcon,
  ...props
}: FreeSearchActionProps) {
  const { search } = useContext(SearchContext);

  return (
    <ListItem index={0} icon={searchIcon} showType={false} {...props}>
      <span className="max-w-md truncate dark:text-white">
        {label} <span className="font-semibold">"{search}"</span>
      </span>
    </ListItem>
  );
}
