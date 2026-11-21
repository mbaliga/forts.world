/* Runtime adapter for the supplied R22 explorer. No catalogue entry implies playability. */
(function (root) {
  function installLoader(app) {
    if (app.__fortNavigationInstalled) return app;
    app.__fortNavigationInstalled = true;
    const original = app.load.bind(app);
    const frame = app._frame.bind(app);
    let queue = Promise.resolve();
    app._frame = function () {
      if (app.sceneTransition) { app.clock?.getDelta(); return; }
      return frame();
    };
    app.load = function (id, requestedEra, options) {
      const pending = app.state?.campaignPending;
      if (pending && (pending.phase !== 'loading' || pending.level !== id || pending.era !== requestedEra)) {
        return Promise.reject(new Error('Finish the campaign battle, or cancel its briefing, before changing scenes.'));
      }
      const level = app.levels.find(l => l.id === id);
      const era = requestedEra ?? level?.defaultEra ?? level?.eras?.[0]?.id;
      if (!level || !level.eras.some(e => e.id === era)) {
        return Promise.reject(new Error('No playable scene exists for this fort and period.'));
      }
      const task = queue.then(async () => {
        app.sceneTransition = true;
        try {
          await original(id, era, options);
          if (app.levelDef?.id !== id || app.era !== era) throw new Error('The fort did not finish loading.');
        } catch (error) {
          // Uncover the old scene or selector so the player can recover.
          if (app.ui?.el?.veil) app.ui.el.veil.hidden = true;
          throw error;
        } finally { app.sceneTransition = false; }
      });
      queue = task.catch(() => {});
      return task;
    };
    return app;
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { installLoader };
  else root.FortNavigation = { installLoader };
})(globalThis);
