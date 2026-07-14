import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function useTweaks(defaults) {
  const [values, setValues] = useState(defaults);
  const setTweak = (key, val) => setValues((prev) => ({ ...prev, [key]: val }));
  return [values, setTweak];
}

export function TweaksPanel({ title = 'Tweaks', children }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="twk-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="twk-hd">
            <b>{title}</b>
            <button
              className="twk-x"
              aria-label="Close tweaks"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="twk-body">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function TweakSection({ title, children }) {
  return (
    <>
      <div className="twk-sect">{title}</div>
      {children}
    </>
  );
}

function TweakRow({ label, children }) {
  return (
    <div className="twk-row">
      <div className="twk-lbl">
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}

export function TweakRadio({ label, value, options, onChange }) {
  const trackRef = useRef(null);
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;

  return (
    <TweakRow label={label}>
      <div ref={trackRef} className="twk-seg" role="radiogroup">
        <div
          className="twk-seg-thumb"
          style={{
            left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
            width: `calc((100% - 4px) / ${n})`,
          }}
        />
        {opts.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={o.value === value}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

export function TweakToggle({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl">
        <span>{label}</span>
      </div>
      <button
        type="button"
        className="twk-toggle"
        data-on={value ? '1' : '0'}
        role="switch"
        aria-checked={!!value}
        onClick={() => onChange(!value)}
      >
        <i />
      </button>
    </div>
  );
}
