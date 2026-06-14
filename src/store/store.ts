import { create } from "zustand";

import type { SectionKey } from "./static";

type ActiveSectionStore = {
  activeSection: SectionKey;
  setActiveSection: (section: SectionKey) => void;
};

export const useActiveSectionStore = create<ActiveSectionStore>((set) => ({
  activeSection: "About",
  setActiveSection: (section: ActiveSectionStore["activeSection"]) =>
    set({ activeSection: section }),
}));

useActiveSectionStore.subscribe((state) =>
  console.log("Active Section:", state.activeSection),
);
