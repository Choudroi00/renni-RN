import { LucideIcon } from 'lucide-react-native';
import { create, StateCreator } from 'zustand';

interface AppBarAction {
  onPress: (() => void) | undefined;
  icon: LucideIcon | null;
}

interface AppBarState {
  height: number;
  backgroundColor: string;
  isVisible: boolean;
  title: string;
  rightAction: AppBarAction | null;
  leftAction: AppBarAction | null;
  setHeight: (height: number) => void;
  setBackgroundColor: (backgroundColor: string) => void;
  setVisibility: (isVisible: boolean) => void;
  setTitle: (title: string) => void;
  setRightAction: (rightAction: AppBarAction | null) => void;
  setLeftAction: (leftAction: AppBarAction | null) => void;
  updateAppBar: (config: Partial<AppBarState>) => void;
  resetAppBar: () => void;
}

const appBarStore: StateCreator<AppBarState> = (set) => ({
  height: 60,
  backgroundColor: '#FFFFFF',
  isVisible: true,
  title: 'Home',
  rightAction: null,
  leftAction: null,
  setHeight: (height) => set({ height }),
  setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
  setVisibility: (isVisible) => set({ isVisible }),
  setTitle: (title) => set({ title }),
  setRightAction: (rightAction) => set({ rightAction }),
  setLeftAction: (leftAction) => set({ leftAction }),
  updateAppBar: (config) => set((state) => ({ ...state, ...config })),
  resetAppBar: () => set({
    height: 60,
    backgroundColor: '#FFFFFF',
    isVisible: true,
    title: 'Home',
    rightAction: null,
    leftAction: null,
  }),
});

export const useAppBarStore = create<AppBarState>(appBarStore);