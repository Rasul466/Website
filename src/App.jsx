import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

const BASE_PATH = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL;

function getViewFromLocation() {
  const slug = window.location.hash.replace(/^#\/?/, '').replace(/^\/+|\/+$/g, '');
  return !slug || slug === 'home' ? { view: 'home' } : { view: 'project', slug };
}

function getPathForView(next) {
  const leaf = next.view === 'project' && next.slug ? next.slug : 'home';
  return `${BASE_PATH || ''}#/${leaf}`;
}

export default function App() {
  const [view, setView] = useState(() => getViewFromLocation());
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const nextView = getViewFromLocation();
    const canonicalPath = getPathForView(nextView);
    const currentPath = `${window.location.pathname}${window.location.hash}`;
    if (currentPath !== canonicalPath) {
      window.history.replaceState(nextView, '', canonicalPath);
    }

    const handleRouteChange = () => {
      const nextView = getViewFromLocation();
      const nextPath = getPathForView(nextView);
      const currentPath = `${window.location.pathname}${window.location.hash}`;
      if (currentPath !== nextPath) {
        window.history.replaceState(nextView, '', nextPath);
      }
      setView(nextView);
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      });
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  function nav(next) {
    const nextView = { view: next.view, slug: next.slug };
    const nextPath = getPathForView(nextView);
    const currentPath = getPathForView(view);

    if (nextPath !== currentPath) {
      window.history.pushState(nextView, '', nextPath);
      if (window.ym) {
        window.ym(110754437, 'hit', window.location.href);
      }
    }

    setView(nextView);
    requestAnimationFrame(() => {
      if (next.anchor === 'about') {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (next.anchor === 'contact') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (next.anchor === 'projects') {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
       } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    });
  }

  return (
    <>
      <div className="container">
        <Header onNav={nav} current={view.view} />
        <AnimatePresence mode="wait">
          {view.view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <Home onNav={nav} t={tweaks} />
            </motion.div>
          ) : (
            <motion.div
              key={`project-${view.slug}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <ProjectPage slug={view.slug} onNav={nav} t={tweaks} />
            </motion.div>
          )}
        </AnimatePresence>
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
