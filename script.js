// SECUND main scripts

(async function loadHyperloopStatus () {
  const box = document.getElementById('hyperloop-status');
  if (!box) return;
  const url = `/api/hyperloop_kit.json?t=${Date.now()}`;
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const ts = new Date(data.timestamp);
    const when = isNaN(ts) ? data.timestamp : ts.toLocaleString();
    box.innerHTML = `
      <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
        <div>
          <div style="font-weight:700;color:#fff">HyperLoop result</div>
          <div style="opacity:.85">Iterations: <b>${data.iterations || '-'}</b></div>
          <div style="opacity:.85">Status: <b>${data.status || '-'}</b></div>
          <div style="opacity:.7">Timestamp: ${when}</div>
        </div>
        <div style="align-self:center;font-weight:600;color:#f5d37a">${data.message || ''}</div>
      </div>`;
  } catch (err) {
    box.innerHTML = `<div style="color:#fca5a5">
      Could not load latest HyperLoop result (${err?.message || 'unknown error'}).
    </div>`;
  }
})();
