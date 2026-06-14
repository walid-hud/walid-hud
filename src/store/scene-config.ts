import type { SectionKey } from "./static";

export type SceneConfigItem = {
  position: [number, number, number];
  rotation: [number, number, number];
};

export const sceneConfig: Record<SectionKey, SceneConfigItem> = {
  About: {
    position: [0, 0, 5],
    rotation: [0, 0, 0],
  },
  Skills: {
    position: [2, 0, 5],

    rotation: [0, 0, 0],
  },
  Projects: {
    position: [14, -1, 6],

    rotation: [0, 0, 0],
  },
  Contact: {
    position: [21, 0, 4],
    rotation: [0, 0, 0],
  },
};
