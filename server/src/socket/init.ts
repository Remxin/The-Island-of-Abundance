import { createServer } from "http";
import { Server } from "socket.io";
import { verifySocketUser } from "./auth";
import lobbyResolvers from "./resolvers/lobbyResolvers"
import menuResolvers from "./resolvers/menuResolvers";
import { findRandomGameProps } from "./types";

const SOCKETPORT = process.env.SOCKET_PORT || 3000

export async function initSocket () {
    const httpServer = createServer();
    const io = new Server(httpServer, {
      cors: {
        origin: true,
        methods: ["GET", "POST"],
        credentials: true
      },
      pingTimeout: 30000,
      allowRequest: async (req, callback) => verifySocketUser(req, callback)
    });
    
    // -------- routes ---------
    io.on("connection", (socket) => {
      // --- menu routes ---
      socket.on("get buildings", (_, callback) => menuResolvers.getBuildings(callback))

      socket.on("find-random-game", (data: findRandomGameProps) => lobbyResolvers.findRandomGame(socket, data))
    });
    
     // -------- ----- ---------
    httpServer.listen(SOCKETPORT);

    console.log(`Socket estabilished on port ${SOCKETPORT}`);
    
}