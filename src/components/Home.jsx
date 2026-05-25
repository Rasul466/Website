import { Fragment } from 'react';
import { useLang } from '../hooks/useLang.jsx';
import { PROJECTS, ASSETS } from '../data/projects.js';
import { getProject } from '../data/translations.js';
import ProjectCard from './ProjectCard.jsx';

function Particulars({ rows }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: 24,
        rowGap: 14,
        fontSize: 13,
        lineHeight: 1.5,
      }}
    >
      {rows.map(([k, v]) => (
        <Fragment key={k}>
          <span style={{ opacity: 0.5, letterSpacing: '0.04em' }}>{k}</span>
          <span>{v}</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function Home({ onNav, t }) {
  const { lang, S } = useLang();
  const projects = PROJECTS.map((p) => getProject(PROJECTS, p.slug, lang));

  const body = t.bodySize === 'small' ? 13 : t.bodySize === 'large' ? 15 : 14;

  const italicMode = t.italicMode || 'subtle';
  const italicWord = italicMode !== 'none';
  const italicHeads = italicMode === 'generous';

  const heroAlign = t.heroAlign || 'asymmetric';
  let heroColumn = '3 / 7';
  let heroTextAlign = 'left';
  if (heroAlign === 'left') heroColumn = '1 / 8';
  else if (heroAlign === 'centered') {
    heroColumn = '2 / 6';
    heroTextAlign = 'left';
  }

  return (
    <div data-screen-label="01 Home">
      {/* Hero */}
      <div
        className="rp"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 0,
          padding: '96px 0 96px',
        }}
      >
        <div style={{ gridColumn: heroColumn, textAlign: heroTextAlign }}>
          <h1
            style={{
              fontSize: 30,
              lineHeight: 1.3,
              fontWeight: 400,
              margin: '0 0 28px',
              letterSpacing: '-0.005em',
              textWrap: 'pretty',
            }}
          >
            {S.hero.pre}
            <br />
            <span
              style={{
                fontStyle: italicWord ? 'italic' : 'normal',
                opacity: 0.7,
                marginRight: '0.32em',
              }}
            >
              {S.hero.italic}
            </span>
            {S.hero.post}
          </h1>
          <p
            style={{
              fontSize: body,
              lineHeight: 1.75,
              margin: 0,
              maxWidth: 460,
              opacity: 0.78,
            }}
          >
            {S.hero.sub}
          </p>
        </div>
      </div>

      {/* About */}
      <div
        id="about"
        className="rp"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 24,
          padding: '16px 0 88px',
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
            {S.aboutLabel}
          </p>
        </div>

        <div style={{ gridColumn: '3 / 7' }}>
          <div
            style={{
              aspectRatio: '4/5',
              background: '#D9D2C2',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src='../../public/portrait.png'
              alt="Rasul"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 30%',
                display: 'block',
                filter: 'saturate(0.92) contrast(1.02)',
              }}
            />
          </div>
        </div>

        <div style={{ gridColumn: '8 / 13', paddingTop: 24 }}>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              margin: '0 0 22px',
              fontStyle: 'italic',
              fontWeight: 400,
            }}
          >
            {S.about.pull}
          </p>
          <p style={{ fontSize: body, lineHeight: 1.85, margin: 0, opacity: 0.82 }}>
            {S.about.p2}
          </p>
          <p
            style={{
              fontSize: body,
              lineHeight: 1.85,
              margin: '16px 0 0',
              opacity: 0.82,
            }}
          >
            {S.about.p3}
          </p>

          <div style={{ marginTop: 40 }}>
            <Particulars
              rows={S.particularsLabels.map((k, i) => [k, S.particulars[i]])}
            />
          </div>
        </div>
      </div>

      {/* Hiring & Mentorship */}
      <div
        className="rp"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 24,
          padding: '96px 0 48px',
          marginTop: 64,
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
            {S.hiring.label}
          </p>
        </div>
        <div style={{ gridColumn: '3 / 8', paddingTop: 24 }}>
          <p style={{ fontSize: body, lineHeight: 1.85, margin: 0, opacity: 0.82 }}>
            {S.hiring.body}
          </p>
        </div>
        <div style={{ gridColumn: '9 / 13', paddingTop: 24 }}>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              margin: '0 0 18px',
              fontStyle: 'italic',
              fontWeight: 400,
              opacity: 0.92,
            }}
          >
            “{S.hiring.quote}”
          </p>
          <p
            style={{
              fontSize: 12,
              letterSpacing: '0.06em',
              margin: 0,
              opacity: 0.72,
            }}
          >
            {S.hiring.author} —{' '}
            <span style={{ fontStyle: 'italic' }}>{S.hiring.role}</span>
          </p>
        </div>
      </div>

      {/* Selected work header */}
      <div
        id="projects"
        className="rp"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          padding: '16px 0 40px',
          scrollMarginTop: 24,
        }}
      >
        <h2
          style={{
            fontSize: 28,
            fontWeight: 400,
            margin: 0,
            letterSpacing: '-0.01em',
            fontStyle: 'italic',
          }}
        >
          {S.selectedWork}
        </h2>
      </div>

      {/* Row 1 — wide + tall */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '5fr 4fr',
          gap: t.gridDensity === 'tight' ? 18 : t.gridDensity === 'roomy' ? 40 : 28,
          marginBottom: t.gridDensity === 'tight' ? 44 : t.gridDensity === 'roomy' ? 96 : 72,
        }}
      >
        <ProjectCard p={projects[0]} onNav={onNav} italicHeads={italicHeads} />
        <ProjectCard p={projects[1]} onNav={onNav} italicHeads={italicHeads} />
      </div>

      {/* Row 2 — three squares */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '3fr 3fr 4fr',
          gap: t.gridDensity === 'tight' ? 18 : t.gridDensity === 'roomy' ? 40 : 28,
          marginBottom: t.gridDensity === 'tight' ? 44 : t.gridDensity === 'roomy' ? 96 : 72,
        }}
      >
        <ProjectCard p={projects[2]} onNav={onNav} italicHeads={italicHeads} small />
        <ProjectCard p={projects[3]} onNav={onNav} italicHeads={italicHeads} small />
        <ProjectCard p={projects[4]} onNav={onNav} italicHeads={italicHeads} small />
      </div>

      {/* Row 3 — featured offset */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 5fr', gap: 28 }}>
        <div></div>
        <div>
          <div
            onClick={() => onNav({ view: 'project', slug: projects[5].slug })}
            style={{
              aspectRatio: '21/9',
              background: projects[5].swatch,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#444',
              fontSize: 10,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'ui-monospace, Menlo, monospace',
              overflow: 'hidden',
            }}
            className="rp project-thumb"
          >
            {projects[5].thumb && (
              <img
               
                alt={projects[5].name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            )}
          </div>
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
              onClick={() => onNav({ view: 'project', slug: projects[5].slug })}
              style={{
                fontSize: 24,
                fontWeight: 400,
                margin: 0,
                letterSpacing: '-0.005em',
                cursor: 'pointer',
              }}
            >
              {projects[5].name}
            </h3>
          </div>
          <p
            className="rp"
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              margin: '8px 0 0',
              opacity: 0.72,
            }}
          >
            {projects[5].cardCopy}
          </p>
        </div>
      </div>

      {/* Contact */}
      <div
        id="contact"
        className="rp"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: 40,
          padding: '96px 0 16px',
        }}
      >
        <div>
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              margin: 0,
              opacity: 0.5,
            }}
          >
            {S.contactLabel}
          </p>
        </div>
        <div>
          <p
            style={{
              fontSize: 24,
              fontWeight: 400,
              margin: '0 0 10px',
              letterSpacing: '-0.005em',
              fontStyle: 'italic',
            }}
          >
            <a
              href="mailto:rustamovsyonki@gmail.com"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              rustamovsyonki@gmail.com
            </a>
          </p>
          <p
            style={{
              fontSize: 16,
              fontWeight: 400,
              margin: '0 0 28px',
              letterSpacing: '0.01em',
              opacity: 0.78,
            }}
          >
            <a
              href="tel:+998995761256"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              +998 99 576 12 56
            </a>
          </p>

          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              margin: '0 0 14px',
              opacity: 0.5,
            }}
          >
            {S.elsewhere}
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              columnGap: 32,
              rowGap: 10,
              fontSize: 14,
              maxWidth: 420,
            }}
          >
            {[
              ['Telegram', 'https://t.me/rslrustamov'],
              [
                'Instagram',
                'https://www.instagram.com/rasul6r?igsh=ejVpaTRsczY0eGZ1&utm_source=qr',
              ],
              [
                'LinkedIn',
                'https://www.linkedin.com/in/rasulrustamov?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
              ],
              [
                'CV',
                'https://drive.google.com/file/d/1diyPayzpyxSnUhp90L5AbqFP0Cssb6wk/view',
              ],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    color: 'inherit',
                    textDecoration: 'none',
                    padding: '6px 0',
                    opacity: 0.82,
                  }}
                >
                  <span>{label}</span>
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
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
