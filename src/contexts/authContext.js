import { createContext } from "react";

export default createContext({
    user: null,
    setUser: (auth) => {},
});
