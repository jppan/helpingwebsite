export function ThemeScript() {
  const script = `
    (() => {
      try {
        const storageKey = "rico-theme";
        const stored = localStorage.getItem(storageKey);
        const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        const theme = stored === "light" || stored === "dark" ? stored : (systemPrefersLight ? "light" : "dark");
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
      } catch (error) {
        document.documentElement.dataset.theme = "dark";
        document.documentElement.style.colorScheme = "dark";
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
