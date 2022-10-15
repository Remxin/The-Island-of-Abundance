import { createServer } from "http";
import { Server } from "socket.io";
import queueResolvers from "./resolvers/queue"
import { findRandomGameProps } from "./types";

const SOCKETPORT = process.env.SOCKET_PORT || 3000

export async function initSocket () {
    const httpServer = createServer();
    const io = new Server(httpServer, {
      // ...
    });
    
    // -------- routes ---------
    io.on("connection", (socket) => {
      socket.on("find-random-game", (data: findRandomGameProps) => queueResolvers.findRandomGame(socket, data))
    });
    
     // -------- ----- ---------
    httpServer.listen(SOCKETPORT);

    console.log(`Socket estabilished on port ${SOCKETPORT}`);
    
}