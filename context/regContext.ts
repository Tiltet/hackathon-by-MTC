import { createContext } from "react";

export const RegContext = createContext({
    reg: 0,
    setReg: (number: number) => {},
});
