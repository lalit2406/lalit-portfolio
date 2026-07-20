export const unoCodeSnippet = `// WebSocket Game Event Handler
io.on("connection", (socket) => {
  socket.on("playCard", ({ roomId, playerId, card }) => {
    try {
      const game = getGameInstance(roomId);
      game.playCard(playerId, card);
      
      // Sync verified game state back to socket room namespace
      io.to(roomId).emit("stateUpdate", game.getStatePayload());
    } catch (err) {
      socket.emit("gameError", { message: err.message });
    }
  });
});`;

export const unoModulesData = {
  Lobby: {
    desktop: 'home-desktop.webp',
    mobile: 'mobile.webp',
    title: 'Matchmaking Lobby',
    purpose: 'Enables players to search open game lobbies or initialize custom multiplayer rooms.',
    functionality: 'Lobby search inputs, room password validation inputs, player slot counts, and instant room listings.',
    implementation: 'Pipes lobby registry updates through Node Socket.io namespaces directly to connected clients.',
    techs: ['React', 'Socket.io', 'Tailwind CSS'],
    chips: ['Lobby Matchmaker', 'Socket Channels']
  },
  'Waiting Room': {
    desktop: 'gamelobby-desktop.webp',
    mobile: 'mobile.webp',
    title: 'Lobby Waiting Room',
    purpose: 'Acts as the pre-game staging room where players chat and vote ready.',
    functionality: 'Waiting slot indicators, active players listing cards, live text chat channel, and host launch control.',
    implementation: 'Listens for client ready events and updates server lobbies state objects before match initiation.',
    techs: ['React', 'Socket.io', 'Express'],
    chips: ['Staging Lobby', 'Real-Time Chat']
  },
  Gameplay: {
    desktop: 'gameplay-desktop.webp',
    mobile: 'mobile.webp',
    title: 'Live Card Table',
    purpose: 'The primary match deck arena validating moves, card plays, deck draws, and game conditions.',
    functionality: 'Interactive player card hands, discard pile color matching trackers, turn direction indicators, and color wheel selectors.',
    implementation: 'Invokes a centralized server-side state-machine that verifies card legality before state updates are broadcast.',
    techs: ['React', 'Socket.io', 'Framer Motion'],
    chips: ['State Machine', 'Action Cards']
  }
};
