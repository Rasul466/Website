import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../hooks/useLang.jsx';

const EASE = [0.22, 0.61, 0.36, 1];

export default function NotFound({ onNav }) {
  const { S } = useLang();
  const nf = S.notFound;

  useEffect(() => {
    if (window.location.pathname !== '/404') {
      window.history.replaceState(null, '', '/404');
    }
  }, []);

  return (
    <div data-screen-label="04 Not found">
      <motion.div
        className="rp"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 0,
          padding: '140px 0 160px',
        }}
      >
        <div style={{ gridColumn: '3 / 7' }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              margin: '0 0 20px',
              opacity: 0.5,
            }}
          >
            {nf.eyebrow}
          </p>
          <h1
            style={{
              fontSize: 30,
              lineHeight: 1.3,
              fontWeight: 400,
              margin: '0 0 24px',
              letterSpacing: '-0.005em',
              textWrap: 'pretty',
            }}
          >
            {nf.pre}
            <span style={{ fontStyle: 'italic', opacity: 0.7 }}>{nf.italic}</span>
            <br />
            {nf.post}
          </h1>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.75,
              margin: '0 0 40px',
              maxWidth: 440,
              opacity: 0.78,
            }}
          >
            {nf.description}
          </p>
          <motion.a
            onClick={() => onNav({ view: 'home' })}
            whileHover={{ x: 6 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 420, damping: 18 }}
            style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: 10,
              cursor: 'pointer',
              fontSize: 14,
              color: 'inherit',
            }}
          >
            <span>{nf.button}</span>
            <span
              style={{
                fontSize: 11,
                letterSpacing: '0.1em',
                opacity: 0.45,
                fontFamily: 'ui-monospace, Menlo, monospace',
              }}
            >
              →
            </span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
