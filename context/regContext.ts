import { createContext } from "react";

export const RegContext = createContext({
    profile: 0,
    setProfile: (number: number) => {},
});
