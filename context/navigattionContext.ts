import { createContext } from "react";

export const NavContext = createContext({
    index: 0,
    setIndex: (number: number) => {},
});
