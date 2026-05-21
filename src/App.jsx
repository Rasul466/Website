import { useState } from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import LangSwitch from './components/LangSwitch.jsx';
import {
  TweaksPanel,
  TweakSection,
  TweakRadio,
  TweakToggle,
  useTweaks,
} from './components/TweaksPanel.jsx';

const TWEAK_DEFAULTS = {
  italicMode: 'subtle',
  bodySize: 'medium',
  heroAlign: 'asymmetric',
  gridDensity: 'default',
  accentTint: true,
};

export default function App() {
  const [view, setView] = useState({ view: 'home' });
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  function nav(next) {
    setView({ view: next.view, slug: next.slug });
    requestAnimationFrame(() => {
      if (next.anchor === 'about') {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (next.anchor === 'contact') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (next.anchor === 'projects') {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  return (
    <>
      <div className="container">
        <Header onNav={nav} current={view.view} />
        {view.view === 'home' ? (
          <Home onNav={nav} t={tweaks} />
        ) : (
          <ProjectPage slug={view.slug} onNav={nav} t={tweaks} />
        )}
      </div>

      <LangSwitch />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Type & rhythm">
          <TweakRadio
            label="Italic accents"
            value={tweaks.italicMode}
            onChange={(v) => setTweak('italicMode', v)}
            options={[
              { value: 'none', label: 'None' },
              { value: 'subtle', label: 'Subtle' },
              { value: 'generous', label: 'Generous' },
            ]}
          />
          <TweakRadio
            label="Body size"
            value={tweaks.bodySize}
            onChange={(v) => setTweak('bodySize', v)}
            options={[
              { value: 'small', label: 'Small' },
              { value: 'medium', label: 'Medium' },
              { value: 'large', label: 'Large' },
            ]}
          />
        </TweakSection>

        <TweakSection title="Layout">
          <TweakRadio
            label="Hero column"
            value={tweaks.heroAlign}
            onChange={(v) => setTweak('heroAlign', v)}
            options={[
              { value: 'asymmetric', label: 'Asymmetric' },
              { value: 'left', label: 'Left' },
              { value: 'centered', label: 'Centered' },
            ]}
          />
          <TweakRadio
            label="Grid density"
            value={tweaks.gridDensity}
            onChange={(v) => setTweak('gridDensity', v)}
            options={[
              { value: 'tight', label: 'Tight' },
              { value: 'default', label: 'Default' },
              { value: 'roomy', label: 'Roomy' },
            ]}
          />
          <TweakToggle
            label="Per-project accent tint"
            value={tweaks.accentTint}
            onChange={(v) => setTweak('accentTint', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}
