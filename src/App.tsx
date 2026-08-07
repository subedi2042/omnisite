import { useState } from 'react';
import { MarketingHome } from './components/MarketingHome';
import { PlatformWorkspace } from './components/PlatformWorkspace';
import { ThemePresetID } from './types/platform';

export function App() {
  const [showPlatform, setShowPlatform] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ThemePresetID>('local_authority');

  const startBuilding = (themeId: ThemePresetID = selectedTheme) => {
    setSelectedTheme(themeId);
    setShowPlatform(true);
  };

  return showPlatform
    ? <PlatformWorkspace initialThemeId={selectedTheme} onBackToMarketing={() => setShowPlatform(false)} />
    : <MarketingHome onStartBuilding={startBuilding} />;
}

export default App;
