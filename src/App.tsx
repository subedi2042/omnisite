import { useState } from 'react';
import { MarketingHome } from './components/MarketingHome';
import { PlatformWorkspace } from './components/PlatformWorkspace';

export function App() {
  const [showPlatform, setShowPlatform] = useState(false);

  return showPlatform
    ? <PlatformWorkspace onBackToMarketing={() => setShowPlatform(false)} />
    : <MarketingHome onStartBuilding={() => setShowPlatform(true)} />;
}

export default App;
