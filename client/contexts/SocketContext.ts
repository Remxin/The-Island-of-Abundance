import { createContext } from "react";
import useSocket from "../hooks/useSocket";
import { useSocketType } from "../hooks/useSocket";
export const SocketContext = createContext<null | useSocketType>(null)