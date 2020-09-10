# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]
## [v3.0]

## [v2.9]
### Fixed
- Various dead search engines
- Packaging issues against current UXP trunk (20200506)

### Removed
- Speech Recognition (UXP #1538)
- Presentation Service (UXP #1390)

## [v2.8] 2020-01-12
### Added
- Wikimedia Commons Search

### Fixed
- Various dead search engines

### Removed
- TwemojiMozilla Font. This is in UXP and no longer required in our bundle.

## [v2.7] 2019-10-03
### Fixed
- Missing dom_bindings.xpt in package-manifest.in

### Changed
- SearX search engine instance to a working one

### Removed
- Unused Dev Edition code

## [v2.6] 2019-08-26
### Added
- Hyperbola Project websites to default bookmarks
- Invidious Search Plugin

### Changed
- Profile Directory (Now ~/.hyperbola/iceweasel-uxp instead of ~/.mozilla/firefox)
- Default search engine changed to a working SearX instance
- Cookie Lifetime Policy: Now deletes all cookies on browser shutdown by default.

### Fixed
- Add a null check to aBrowser in tabbrowser.xml
- Prompt to be shown when new add-ons are installed (UXP #937)
- Broken all tabs menu listing (UXP #1158)

### Removed
- WebIDE (UXP #1177)
- Dead Mozilla HotFix code (Code Cleanup)
- Uneeded DLL in package-manifest.in (Code Cleanup)
- MediaGoblin instance search plugin

## [v2.5] - 2019-06-14
### Added
- TweMoji v11.4.0 (font update)
- Make MOZ_SERVICES_SYNC optional (disabled in our binaries by default SaaSS)

### Changed
- Set Strict Pinning Enforcement Level
- Limit DOM web workers to 2 cores (resists fingerprinting)

### Fixed
- Backported various UXP fixes 
- Fallout from upstream UXP refactor of search service.
- New Tab thumbnails not cleared immediately upon clearing cache

### Removed
- Social API Leftovers
- Telemtry Docs
- Security UI Telemetry
- Contextual Identity Preferences unused in toolkit

## [v2.4] - 2019-03-18
### Fixed
- Backported various UXP fixes 

### Removed
- Unused Webextensions conditional code

### Security
- HTTP Auth DoS protection.

## [v2.3] - 2018-12-17
### Added
- Enabled by default Opportunistic encryption preference

### Fixed
- Backported various UXP fixes for Weave
- Don't show the stop button for local url loads

### Removed
- GMPInstallManager from browser.js
- DRM/EME references

## [v2.2] - 2018-09-18
### Fixed
- Backported various UXP fixes
 
### Removed
- More Contextual Identity remnants
- Microsoft Translator remnants

## [v2.1] - 2018-09-18
### Removed
- More Contextual Identity remnants
- Web Service Feed Readers (SaaSS)
- Telemtry from nsBrowserGlue and nsBrowserContentHandler

## [v2.0] - 2018-07-30
### Removed
- Telemtry Stop Watch
- BrowserUageTelemetry
- FxA migrator
- Unused Contextual Identity / Containers

## [v1.9] - 2018-07-30

### Fixed
- Various minor branding and CSS changes
- Backported UXP #336 - Fix F11 on New Tab and blank pages

### Removed
- Deprecated HTML5 context-menu

## [v1.8] - 2018-07-02
### Added
- Missing menuPanel-small.svg

### Fixed
- Various Toolkit UI improvements for MOZ_AUSTRALIS (UXP #560)

### Removed
- SSL Error Reporting telemetry
- EME references
- LearnMore Link on aboutNetError
- Unused Java and Flash preferences


## [v1.7] - 2018-06-25
### Fixed
- FindBar CSS not properly displaying on GNU/Linux (FS#1021)

### Changed
- User Agent string


## [v1.6] - 2018-06-24
### Fixed
- "Remove Selected" Cookies button should not be active if there are no cookies.

### Removed
- Compact View CSS
- Unused Social CSS

## [v1.5] - 2018-06-21
### Changed
- Branding of javascript files
- About dialog wording

### Removed
- Browser UI Telemetry

## [v1.4] - 2018-06-19
### Changed
- New Tab Page CSS

### Fixed
- Minor Branding issues

## [v1.3] - 2018-06-18
### Fixed
- Branding in Private Browsing
- Save Link As loading principle

### Removed
- Sync Promos

## [v1.2] - 2018-06-17
### Fixed
- Broken Help Links

## [v1.1] - 2018-06-16
### Fixed
- Locale change / Code cleanup

## [v1.0] - 2018-06-16
### Added
- Initial Import of Firefox 52ESR
- Icedove Branding
- Our Search Plugins

### Fixed
- Multiple Path Fixes for alignment with UXP
- Multiple locale and link changes

### Removed
- PDF.js
- Social API
- Sponsored Tiles
- EME
- UITour
- Microsoft Translator
- Some Telemetry code


[Unreleased]: https://git.hyperbola.info:50100/software/icedove-uxp.git/log/
[v1.0]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v1.0
[v1.1]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v1.1
[v1.2]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v1.2
[v1.3]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v1.3
[v1.4]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v1.4
[v1.5]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v1.5
[v1.6]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v1.6
[v1.7]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v1.7
[v1.8]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v1.8
[v1.9]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v1.9
[v2.0]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v2.0
[v2.1]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v2.1
[v2.2]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v2.2
[v2.3]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v2.3
[v2.4]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v2.4
[v2.5]: https://git.hyperbola.info:50100/software/iceweasel-uxp.git/tag/?h=v2.5
