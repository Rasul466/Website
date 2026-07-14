import { motion } from 'framer-motion';
import { useLang } from '../hooks/useLang.jsx';

export default function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <motion.div
      className="lang-switch"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
    >
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
    </motion.div>
  );
}
