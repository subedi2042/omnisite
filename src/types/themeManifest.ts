import { ThemePresetID, FontStack } from './platform';

export interface ThemeManifest {
  id: ThemePresetID;
  name: string;
  industry: string;
  personality: string[];
  primaryGoal: string;
  secondaryGoals: string[];
  typography: FontStack;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    text: string;
    mutedText: string;
    border: string;
  };
  avoid: string;
  heroDirection: string;
}
