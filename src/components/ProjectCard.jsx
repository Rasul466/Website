import { motion } from 'framer-motion';

const cardEntrance = {
  hidden: { opacity: 0, y: 56, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export default function ProjectCard({ p, onNav, italicHeads, small }) {
  const titleSize = 24;
  const captionSize = 16;
  return (
    <motion.div variants={cardEntrance}>
      <motion.div
        onClick={() => onNav({ view: 'project', slug: p.slug })}
        className="rp project-thumb"
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{ rest: { scale: 1 }, hover: { scale: 1.02 } }}
        transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        style={{
          aspectRatio: p.aspect,
          background: p.swatch,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#555',
          fontSize: 10,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          fontFamily: 'ui-monospace, Menlo, monospace',
          padding: p.thumb ? 0 : 12,
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {p.thumb ? (
          <motion.img
            src={p.thumb}
            alt={p.name}
            loading="lazy"
            variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          `project shot — ${p.name.toLowerCase()}`
        )}
      </motion.div>
      {small ? (
        <>
          <h3
            onClick={() => onNav({ view: 'project', slug: p.slug })}
            className="rp"
            style={{
              fontSize: titleSize,
              fontWeight: 400,
              margin: '22px 0 8px',
              letterSpacing: '-0.005em',
              cursor: 'pointer',
              fontStyle: p.italicTitle || italicHeads ? 'italic' : 'normal',
            }}
          >
            {p.name}
          </h3>
          <p
            className="rp"
            style={{
              fontSize: captionSize,
              lineHeight: 1.6,
              margin: '6px 0 0',
              opacity: 0.7,
            }}
          >
            {p.cardCopy}
          </p>
        </>
      ) : (
        <>
          <div
            className="rp"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 22,
              alignItems: 'baseline',
            }}
          >
            <h3
              onClick={() => onNav({ view: 'project', slug: p.slug })}
              style={{
                fontSize: titleSize,
                fontWeight: 400,
                margin: 0,
                letterSpacing: '-0.005em',
                fontStyle: p.italicTitle || italicHeads ? 'italic' : 'normal',
                cursor: 'pointer',
              }}
            >
              {p.name}
            </h3>
          </div>
          <p
            className="rp"
            style={{
              fontSize: captionSize,
              lineHeight: 1.6,
              margin: '8px 0 0',
              opacity: 0.72,
            }}
          >
            {p.cardCopy}
          </p>
        </>
      )}
    </motion.div>
  );
}
