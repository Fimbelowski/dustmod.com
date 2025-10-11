import characterLeaderboards from "./character_leaderboards.png";
import communityLobby from "./community_lobby.png";
import communityMapPacks from "./community_map_packs.png";
import dustkidDaily from "./dustkid_daily.png";
import extensiveConfiguration from "./extensive_configuration.png";
import inputDisplay from "./input_display.png";
import onlineMultiplayer from "./online_multiplayer.png";
import replayGhosts from "./replay_ghosts.png";
import saveRecoveryReset from "./save_recovery_reset.png";
import tasLeaderboards from "./tas_leaderboards.png";

export interface ImageConfig {
  caption: string;
  name: string;
  order: number;
  position?: string;
  src: string;
}

export const images: ImageConfig[] = [
  {
    caption: "Filter the in-game leaderboards by character",
    name: "character_leaderboards",
    order: 0,
    src: characterLeaderboards,
  },
  {
    caption: "In-game community lobby with new content added periodically",
    name: "community_lobby",
    order: 1,
    src: communityLobby,
  },
  {
    caption: "In-game map packs developed by members of the community",
    name: "community_map_packs",
    order: 2,
    src: communityMapPacks,
  },
  {
    caption: "Compete daily with others on a random custom map",
    name: "dustkid_daily",
    order: 3,
    src: dustkidDaily,
  },
  {
    caption: "Extensive configuration of in-game options",
    name: "extensive_configuration",
    order: 4,
    src: extensiveConfiguration,
  },
  {
    caption: "Built-in customizable input display",
    name: "input_display",
    order: 5,
    position: "right bottom",
    src: inputDisplay,
  },
  {
    caption: "Play online co-op with up to four players",
    name: "online_multiplayer",
    order: 6,
    position: "center bottom",
    src: onlineMultiplayer,
  },
  {
    caption: "Compare replays with other players to see how you stack up",
    name: "replay_ghosts",
    order: 7,
    position: "center bottom",
    src: replayGhosts,
  },
  {
    caption:
      "Recover your save file at any time, or reset to a blank slate for speedruns",
    name: "save_recovery_reset",
    order: 8,
    src: saveRecoveryReset,
  },
  {
    caption: "View TAS leaderboards and watch TAS runs in-game",
    name: "tas_leaderboards",
    order: 9,
    src: tasLeaderboards,
  },
];
