(function () {
  const timer = setInterval(() => {
    const app = window.__app;
    // Wait for the initial scene before installing the transition guard.
    if (!app?.world || !app?.view || !document.getElementById('veil')?.hidden) return;
    clearInterval(timer);
    FortNavigation.installLoader(app);
    const button = document.createElement('button');
    button.id = 'world-forts'; button.textContent = `Explore ${app.levels.length} forts`;
    const dialog = document.createElement('dialog'); dialog.id = 'world-chooser';
    dialog.setAttribute('aria-labelledby', 'world-chooser-title');
    dialog.innerHTML = '<form method="dialog"><button class="close" aria-label="Close fort chooser">Close</button></form><h2 id="world-chooser-title">Choose a playable fort</h2><p>These scenes can be explored now. Reconstructions vary in detail; consult each period’s evidence notes.</p><label>Find a fort <input id="world-search" type="search" placeholder="Name or region"></label><div id="world-results"></div><p id="world-message" role="status" aria-live="polite"></p>';
    document.body.append(button, dialog);
    const input = dialog.querySelector('input'), results = dialog.querySelector('#world-results'), message = dialog.querySelector('#world-message');
    button.onclick = () => { render(); dialog.showModal(); input.focus(); };
    input.oninput = render;
    function render() {
      results.replaceChildren();
      const levels = app.levels.filter(l => `${l.name} ${l.region}`.toLowerCase().includes(input.value.trim().toLowerCase()));
      for (const level of levels) {
        const row = document.createElement('div'); row.className = 'world-fort-row';
        const name = document.createElement('strong'); name.textContent = level.name;
        const region = document.createElement('small'); region.textContent = level.region;
        const select = document.createElement('select'); select.setAttribute('aria-label', `Period at ${level.name}`);
        for (const era of level.eras) { const option = new Option(`${era.year} · ${era.label}`, era.id); select.add(option); }
        select.value = level.id === app.levelDef.id ? app.era : (level.defaultEra || level.eras[0].id);
        const go = document.createElement('button'); go.textContent = 'Explore';
        go.onclick = async () => {
          for (const control of dialog.querySelectorAll('button,input,select')) control.disabled = true;
          message.textContent = `Loading ${level.name}…`;
          try { app.ui.closeAll(); await app.load(level.id, select.value); message.textContent = ''; dialog.close(); }
          catch (error) { message.textContent = `Could not open ${level.name}: ${error.message}. Try another fort.`; document.getElementById('veil').hidden = true; }
          finally { for (const control of dialog.querySelectorAll('button,input,select')) control.disabled = false; }
        };
        row.append(name, region, select, go); results.append(row);
      }
      if (!levels.length) results.textContent = 'No playable forts match this search.';
    }
  }, 200);
})();
