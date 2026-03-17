// Simple hash-based SPA router
export class Router {
  constructor() {
    this.routes = [];
    this.currentCleanup = null;
    window.addEventListener('hashchange', () => this.resolve());
  }

  on(pattern, handler) {
    // Convert pattern like '/story/:id' to regex
    const paramNames = [];
    const regexStr = pattern.replace(/:(\w+)/g, (_, name) => {
      paramNames.push(name);
      return '([^/]+)';
    });
    this.routes.push({
      pattern,
      regex: new RegExp('^' + regexStr + '$'),
      paramNames,
      handler
    });
    return this;
  }

  resolve() {
    const hash = window.location.hash.slice(1) || '/';

    // Cleanup previous screen
    if (this.currentCleanup) {
      this.currentCleanup();
      this.currentCleanup = null;
    }

    for (const route of this.routes) {
      const match = hash.match(route.regex);
      if (match) {
        const params = {};
        route.paramNames.forEach((name, i) => {
          params[name] = decodeURIComponent(match[i + 1]);
        });
        const cleanup = route.handler(params);
        if (typeof cleanup === 'function') {
          this.currentCleanup = cleanup;
        }
        return;
      }
    }

    // Fallback to home
    window.location.hash = '#/';
  }

  navigate(path) {
    window.location.hash = '#' + path;
  }

  start() {
    this.resolve();
  }
}
