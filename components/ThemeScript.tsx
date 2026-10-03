// Runs before paint to set the theme from localStorage / system preference,
// mirroring Aji's original engine (data-theme attribute + `rw_theme` key).
// Prevents a flash of the wrong theme on first load.
export default function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('rw_theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
