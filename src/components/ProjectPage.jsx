import { motion } from 'framer-motion';
import { useLang } from '../hooks/useLang.jsx';
import { PROJECTS } from '../data/projects.js';
import { getProject } from '../data/translations.js';
import NotFound from './NotFound.jsx';

const EASE = [0.22, 0.61, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 64, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE } },
};

// ── Color helpers ──────────────────────────────
function deepen(hex) {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, Math.min(0.5, s + 0.05), Math.max(0.2, l - 0.42));
}
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h, s, l };
}
function hslToHex(h, s, l) {
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = (x) => Math.round(x * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// ── Sub-components ──────────────────────────────
function Meta({ k, v }) {
  return (
    <>
      <span style={{ opacity: 0.5, letterSpacing: '0.04em' }}>{k}</span>
      <span>{v}</span>
    </>
  );
}

function Section({ label, children }) {
  return (
    <motion.div
      className="rp"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 24,
        margin: '0 0 64px',
      }}
    >
      <div style={{ gridColumn: '1 / 3' }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          {label}
        </p>
      </div>
      <div style={{ gridColumn: '4 / 11' }}>{children}</div>
    </motion.div>
  );
}

// ── ProjectPage ──────────────────────────────
export default function ProjectPage({ slug, onNav, t }) {
  const { lang, S } = useLang();
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const p = getProject(PROJECTS, slug, lang);
  const nextBase = PROJECTS[(idx + 1) % PROJECTS.length];
  const nextP = nextBase ? getProject(PROJECTS, nextBase.slug, lang) : null;

  if (!p) {
    return <NotFound onNav={onNav} />;
  }

  const body = t.bodySize === 'small' ? 15 : t.bodySize === 'large' ? 19 : 17;
  const italicMode = t.italicMode || 'subtle';
  const italicWord = italicMode !== 'none';
  const accentTint = t.accentTint !== false;
  const accent = accentTint ? deepen(p.swatch) : '#1a1a1a';

  const isStack = !!(p.images && p.images.stack);

  return (
    <div data-screen-label={`02 Project — ${p.name}`}>
      {/* Header */}
      <div
        className="rp"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 24,
          padding: '64px 0 80px',
        }}
      >
        <div style={{ gridColumn: '1 / 8' }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              margin: '0 0 28px',
              opacity: 0.55,
            }}
          >
            {S.caseStudy} · {String(idx + 1).padStart(2, '0')} / 06
          </p>
          <h1
            style={{
              fontSize: 38,
              lineHeight: 1.25,
              fontWeight: 400,
              margin: '0 0 24px',
              letterSpacing: '-0.01em',
              textWrap: 'pretty',
            }}
          >
            {p.title.pre}{' '}
            <span
              style={{
                fontStyle: italicWord ? 'italic' : 'normal',
                marginLeft: '0.18em',
                marginRight: '0.32em',
              }}
            >
              {p.title.italic}
            </span>{' '}
            {p.title.post}
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.75,
              margin: 0,
              maxWidth: 520,
              opacity: 0.78,
            }}
          >
            {p.lede}
          </p>
        </div>

        <div style={{ gridColumn: '9 / 13', paddingTop: 38 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              columnGap: 20,
              rowGap: 14,
              fontSize: 13,
              lineHeight: 1.5,
            }}
          >
            <Meta k={S.meta.role} v={p.role} />
            <Meta k={S.meta.team} v={p.team} />
            <Meta k={S.meta.year} v={p.year} />
            <Meta
              k={S.meta.outcome}
              v={
                <span style={{ fontStyle: 'italic', color: accent }}>
                  {p.headline}
                </span>
              }
            />
          </div>
        </div>
      </div>

      {/* Hero image (or stack[0]) */}
      <div style={{ margin: '0 0 96px' }}>
        <div
          style={{
            aspectRatio: isStack ? 'auto' : '16/9',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
          className="rp"
        >
          {isStack ? (
            <img
              src={p.images.stack[0]}
              alt={`${p.name} — 1`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          ) : p.images && p.images.hero ? (
            <img
              src={p.images.hero}
              alt={`${p.name} — hero`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : null}
        </div>
      </div>

      {/* Context */}
      <Section label={S.sectionContext}>
        <p
          style={{
            fontSize: 22,
            lineHeight: 1.5,
            margin: '0 0 26px',
            fontStyle: 'italic',
            wordSpacing: '0.08em',
            color: '#5a5650',
          }}
        >
          {p.context.pull}
        </p>
        {p.context.paragraphs.map((para, i) => (
          <p
            key={i}
            style={{
              fontSize: body,
              lineHeight: 1.85,
              margin:
                i < p.context.paragraphs.length - 1 ? '0 0 16px' : 0,
              opacity: 0.82,
            }}
          >
            {para}
          </p>
        ))}
      </Section>

      {/* Stack part 1 — middle photos between Context and Approach */}
      {isStack && p.images.stack.length > 2 && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            margin: '64px 0 96px',
          }}
        >
          {p.images.stack.slice(1, -1).map((src, i) => (
            <img
              src={src}
              key={i}
              alt={`${p.name} — ${i + 2}`}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          ))}
        </motion.div>
      )}

      {/* Mid grid (before/after) — only when no stack */}
      {p.images && p.images.mid && p.images.mid.length > 0 && (
        <>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            style={{
              display: 'grid',
              gridTemplateColumns:
                p.images.mid.length === 1 ? '1fr' : '1fr 1fr',
              gap: 24,
              margin: '88px 0 32px',
            }}
          >
            {p.images.mid.map((src, i) => (
              <div
                key={i}
                className="rp"
                style={{
                  aspectRatio: p.images.mid.length === 1 ? '21/9' : '4/3',
                  background: 'transparent',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={src}
                  alt={`${p.name} — detail ${i + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </motion.div>
          <p
            className="rp"
            style={{
              fontSize: 11,
              margin: '0 0 96px',
              opacity: 0.55,
              fontStyle: 'italic',
            }}
          >
            {S.beforeAfter(p.name.toLowerCase())}
          </p>
        </>
      )}

      {/* Approach */}
      <Section label={S.sectionApproach}>
        {p.approach.map((para, i) => (
          <p
            key={i}
            style={{
              fontSize: body,
              lineHeight: 1.85,
              margin: i < p.approach.length - 1 ? '0 0 16px' : 0,
              opacity: 0.82,
            }}
          >
            {para}
          </p>
        ))}
      </Section>

      {/* Full-bleed diagram — only when no stack */}
      {p.images && p.images.full && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          style={{ margin: '64px 0 96px' }}
        >
          <div
            className="rp"
            style={{
              aspectRatio: '21/9',
              background: 'transparent',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={p.images.full}
              alt={`${p.name} — full`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </motion.div>
      )}

      {/* Stack part 2 — last photo between Approach and Outcome */}
      {isStack && p.images.stack.length > 1 && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          style={{ margin: '64px 0 96px' }}
        >
          <img
            src ={p.images.stack[p.images.stack.length - 1]}
            alt={`${p.name} — ${p.images.stack.length}`}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </motion.div>
      )}

      {/* Outcome */}
      <Section label={S.sectionOutcome}>
        <p
          style={{
            fontSize: 22,
            lineHeight: 1.5,
            margin: '0 0 30px',
            fontStyle: 'italic',
            wordSpacing: '0.08em',
            color: '#5a5650',
          }}
        >
          {p.outcome.pull}
        </p>
        {p.outcome.stats && p.outcome.stats.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${Math.min(p.outcome.stats.length, 3)}, minmax(0, 1fr))`,
              gap: 32,
              margin: '0 0 24px',
              maxWidth:
                p.outcome.stats.length === 1
                  ? 380
                  : p.outcome.stats.length === 2
                  ? 560
                  : 'none',
            }}
          >
            {p.outcome.stats.map((s, i) => (
              <div key={i}>
                <p
                  style={{
                    fontSize: 32,
                    fontWeight: 400,
                    margin: 0,
                    letterSpacing: '-0.01em',
                    fontStyle: s.italic ? 'italic' : 'normal',
                    color: accent,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    margin: '4px 0 0',
                    opacity: 0.55,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}
        <p
          style={{
            fontSize: body,
            lineHeight: 1.85,
            margin: 0,
            opacity: 0.82,
          }}
        >
          {p.outcome.tail}
        </p>
      </Section>

      {/* Next project */}
      {nextP && (
        <motion.div
          className="rp"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 40,
            padding: '120px 0 16px',
            alignItems: 'end',
          }}
        >
          <div
            onClick={() => onNav({ view: 'project', slug: nextP.slug })}
            style={{ cursor: 'pointer' }}
          >
            <p
              style={{
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                margin: '0 0 12px',
                opacity: 0.55,
              }}
            >
              {S.nextProject} —{' '}
              {String(((idx + 1) % PROJECTS.length) + 1).padStart(2, '0')}
            </p>
            <p
              style={{
                fontSize: 30,
                fontWeight: 400,
                margin: '0 0 6px',
                letterSpacing: '-0.005em',
                lineHeight: 1.25,
              }}
            >
              <span style={{ fontStyle: italicWord ? 'italic' : 'normal' }}>
                {nextP.name}
              </span>{' '}
              →
            </p>
            <p
              style={{
                fontSize: 13,
                margin: 0,
                opacity: 0.6,
                maxWidth: 420,
                lineHeight: 1.7,
              }}
            >
              {nextP.cardCopy}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
