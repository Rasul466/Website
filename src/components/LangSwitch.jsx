import { useLang } from '../hooks/useLang.jsx';

export default function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-switch">
      <button
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <button
        className={lang === 'ru' ? 'active' : ''}
        onClick={() => setLang('ru')}
      >
        RU
      </button>
    </div>
  );
}
