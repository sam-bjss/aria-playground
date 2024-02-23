# Aria Playground Project

A space to experiment with assistive technologies and accessible web development

## Assistive Technologies for Web Development

* Multiple browsers to test consistent behaviour
    * Chrome
    * Firefox
    * Edge
* Browser extensions
    * [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) - Free
    * [WAVE](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) - Free
    * [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) - freemium; paid license gives access to additional tooling
* [Colour contrast analyser (CCA)](https://www.tpgi.com/color-contrast-checker/)
    * Allows colour picking of screen elements for foreground-background colour, displays the contrast ratio and gives advice on which WCAG standards are met
* Screen readers
    * [NVDA](https://www.nvaccess.org/download/) - Windows; free, GNU licence
    * [JAWS](https://www.freedomscientific.com/products/software/jaws/) - Windows; per-user licence
    * VoiceOver - MacOS; built-in
    * NVDA should theoretically be enough, but behaviour (including HTML/ARIA tag interpretation) is not fully consistent between different screen readers so it may be advisable to purchase at least one JAWS licence
* [Pa11y](https://pa11y.org/)
    * This is an NPM package, so should be installable by the engineer once Node.js is installed
    * Can also be set up to run tests as part of CI (if a pipeline exists/is available)

For development purposes using Vue/JS/TS
* VSCode
    * Volar extension
    * Prettier extension
* Node.js