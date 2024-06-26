# Aria Playground Project

A space to experiment with assistive technologies and accessible web development

## Assistive Technologies for Web Development

-   Multiple browsers to test consistent behaviour
    -   Chrome
    -   Firefox
    -   Edge
    -   Safari if possible MacOS
-   Browser extensions

    -   [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) - Free
    -   [WAVE](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh) - Free
    -   [axe DevTools](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) - freemium; paid license gives access to additional tooling
    -   [ChromeLens](https://chromewebstore.google.com/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd) – simulates colour-blindness on a web page
    -   [Let’s get color blind](https://chromewebstore.google.com/detail/lets-get-color-blind/bkdgdianpkfahpkmphgehigalpighjck) - simulates colour-blindness on a web page

-   [Colour contrast analyser (CCA)](https://www.tpgi.com/color-contrast-checker/)
    -   Allows colour picking of screen elements for foreground-background colour, displays the contrast ratio and gives advice on which WCAG standards are met
-   Screen readers
    -   For desktop/laptop devices:
        -   [NVDA](https://www.nvaccess.org/download/) - Windows; free, GNU licence
        -   [JAWS](https://www.freedomscientific.com/products/software/jaws/) - Windows; per-user licence
        -   VoiceOver - MacOS; built-in
        -   NVDA should theoretically be enough, but behaviour (including HTML/ARIA tag interpretation) is not fully consistent between different screen readers so it may be advisable to purchase at least one JAWS licence
    -   For mobile devices (dependent on what can be provided):
        -   VoiceOver iOS - may differ in some ways to MacOS version
        -   Talkback - Android device screen reader (pre-installed on Android devices)
-   [Pa11y](https://pa11y.org/)
    -   An npm package
    -   Can also be set up to run tests as part of CI (if a pipeline exists/is available)
        For development purposes using Vue/JS/TS
-   VSCode
    -   Volar extension
    -   Prettier extension
-   Node.js
