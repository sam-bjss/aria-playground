# Introduction to web accessibility

## Overview

### Importance of Accessibile Design

-   Legal requirement in public sector
-   May also fall under discrimination laws
-   Perception of site provider
-   General usability
    -   Accessibility is for everyone
        -   Consistent UI behaviour
            -   Expected keyboard operation
            -   e.g. Escape or click on backdrop to close menus/modals
            -   semantic/clean structure of DOM
        -   ability to turn off annoying/distracting animations

### WCAG standard

-   Web Content Accessibility Guidelines
    -   Current version: 2.2
-   Outlines rules at three different standards: A, AA and AAA
    -   Can't be AA compliant without full A compliance
    -   And the graphic for 2.2
    -   Demonstrate explanation of a few criteria
-   Link to site: https://www.w3.org/TR/WCAG22/
    -   demo looking up explanations/examples for meeing criteria

## Developing for Accessibility

### The Accessibility Tree

#### What is it?

-   Built from the DOM
-   Contains information used by accessibility tools including screen readers and summary tools to interpret the page
-   Viewable in browser dev tools
-   Contains info on what each node in the tree's role is, how it's labelled and whether it is focusable
-   Generally defined from proper html semantics

#### WAI-ARIA

-   Attributes for HTML elements which help define elements of the accessibility tree
    -   (see example on site for aria-label and aria-labelledby)
    -   https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
    -   see role example on https://aria-playground.vercel.app/tabs
-   Concerns

    -   see also progress bar example on front page
    -   no ARIA is better than bad ARIA

-
-   Generally roles are implicitly defined from the HTML Semantics in the DOM
    -   e.g. buttons/textareas/paragraphs/spans etc

## General Tips and Principles

-   Accessibility should be baked in as a definition of done
-   Use the tools you develop to support
    -   and test your work with them
-   Remember: different tools may interpret and implement standards differently
-   Multiple browsers, multiple screenreaders
-   Join the #accessibility-design channel on Slack!

## Useful Tools

-   VoiceOver is already available on a Mac. Windows has Narrator, but NVDA is a free recommended tool
-   Bookmarklets
-   Automated testing tools
    -   pa11y and pa11y-ci: npm packages
    -   WAVE and axe DevTools: browser extensions
        -   ONLY 30% OF ACCESSIBILTIY ISSUES ARE PICKED UP THIS WAY
-

## Resources

-   WCAG 2.2 Graphic
-   https://www.youtube.com/watch?v=qdB8SRhqvFchttps://www.youtube.com/watch?v=qdB8SRhqvFc
-   https://www.w3.org/WAI/roles/developers/
-   https://www.w3.org/TR/WCAG22/
-   https://wcag.com/developers/
-   https://www.accessibility-developer-guide.com/
