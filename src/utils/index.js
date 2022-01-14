import React from "react";

const userContextValue = {
  name: "Default",
  setName(name) {
    console.log("setName", name);
    this.name = name;
  },
};

export const UserContext = React.createContext(userContextValue);
