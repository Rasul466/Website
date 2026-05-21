export default function ProjectCard({ p, onNav, italicHeads, small }) {
  const titleSize = 24;
  const captionSize = 16;
  return (
    <div>
      <div
        onClick={() => onNav({ view: 'project', slug: p.slug })}
        className="rp project-thumb"
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
          <img
            src={p.thumb}
            alt={p.name}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          `project shot — ${p.name.toLowerCase()}`
        )}
      </div>
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
    </div>
  );
}
