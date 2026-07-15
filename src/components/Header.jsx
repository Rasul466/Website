import { useLang } from '../hooks/useLang.jsx';
import { ASSETS } from '../data/projects.js';

export default function Header({ onNav, current }) {
  const { S } = useLang();

  const linkStyle = (active) => ({
    cursor: 'pointer',
    opacity: active ? 1 : 0.78,
    fontWeight: active ? 500 : 400,
    fontStyle: 'normal',
    transition: 'opacity 120ms ease',
  });

  return (
    <div
      className="rp"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 18,
        fontSize: 13,
      }}
    >
      <span
        style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
        onClick={() => onNav({ view: 'home' })}
      >
        <img
          src={ASSETS.logo}
          alt="Rasul Rustamov"
          style={{ height: 28, width: 'auto', display: 'block' }}
        />
      </span>
      <span style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        <span
          style={linkStyle(false)}
          onClick={() => onNav({ view: 'home', anchor: 'about' })}
        >
          {S.nav.about}
        </span>
        <span
          style={linkStyle(current === 'home')}
          onClick={() => onNav({ view: 'home', anchor: 'projects' })}
        >
          {S.nav.projects}
        </span>
        <span
          style={linkStyle(false)}
          onClick={() => onNav({ view: 'home', anchor: 'contact' })}
        >
          {S.nav.contact}
        </span>
      </span>
    </div>
  );
}
