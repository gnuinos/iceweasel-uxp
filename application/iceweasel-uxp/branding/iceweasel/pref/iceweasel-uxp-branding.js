/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

pref("startup.homepage_override_url", "");
pref("startup.homepage_welcome_url", "");
pref("startup.homepage_welcome_url.additional", "");
pref("app.releaseNotesURL", "https://wiki.hyperbola.info/doku.php?id=en:project:iceweasel-uxp");
// The time interval between checks for a new version (in seconds)
pref("app.update.interval", 86400); // 24 hours
// The time interval between the downloading of mar file chunks in the
// background (in seconds)
pref("app.update.download.backgroundInterval", 60);
// Give the user x seconds to react before showing the big UI. default=24 hours
pref("app.update.promptWaitTime", 0);
// URL user can browse to manually if for some reason all update installation
// attempts fail.
pref("app.update.url.manual", "");
// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard.
pref("app.update.url.details", "");

// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 0);

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=immediately
pref("app.update.badgeWaitTime", 0);

// Number of usages of the web console or scratchpad.
// If this is less than 5, then pasting code into the web console or scratchpad is disabled
pref("devtools.selfxss.count", 0);

// Use LANG environment variable to choose locale
pref("intl.locale.matchOS", true);

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Don't disable our bundled extensions in the application directory
pref("extensions.autoDisableScopes", 11);
pref("extensions.shownSelectionUI", true);

// Disable "alt" as a shortcut key to open full menu bar. Conflicts with "alt" as a modifier
pref("ui.key.menuAccessKeyFocuses", false);

// Disable the GeoLocation API for content
pref("geo.enabled", false);

// Make sure that the request URL of the GeoLocation backend is empty
pref("geo.wifi.uri", "");

// Disable Freedom Violating DRM Feature
pref("browser.eme.ui.enabled", false);
// EME
pref("media.eme.enabled", false);
pref("media.eme.apiVisible", false);

// Google Widevine DRM
// https://blog.mozilla.org/futurereleases/2016/04/08/mozilla-to-test-widevine-cdm-in-firefox-nightly/
// https://wiki.mozilla.org/QA/Widevine_CDM
// https://bugzilla.mozilla.org/show_bug.cgi?id=1288580
pref("media.gmp-widevinecdm.visible", false);
pref("media.gmp-widevinecdm.enabled", false);
pref("media.gmp-widevinecdm.autoupdate", false);

// Default to classic view for about:newtab
pref("browser.newtabpage.enhanced", false);

// Don't call home for blacklisting
pref("extensions.blocklist.enabled", false);

// Disable plugin installer
pref("plugins.hide_infobar_for_missing_plugin", true);
pref("plugins.hide_infobar_for_outdated_plugin", true);
pref("plugins.notifyMissingFlash", false);

// Cookie Behaviour
// 0: All cookies are allowed.
// 1: Only cookies from the originating server are allowed. (Default)
// 2: No cookies are allowed.
// 3: Third-party cookies are allowed only if that site has stored cookies already from a previous visit.
pref("network.cookie.cookieBehavior", 1);

// Cookie Lifetime Policy
// 0: The cookie's lifetime is supplied by the server.
// 1: The user is prompted for the cookie's lifetime.
// 2: The cookie expires at the end of the session (when the browser closes). (Default)
// 3: The cookie lasts for the number of days specified by network.cookie.lifetime.days.
pref("network.cookie.lifetimePolicy", 2);

// Spoof the useragent to a generic one
//pref("general.useragent.compatMode.firefox", false);
// Spoof the useragent to a generic one for user experience and privacy
pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:60.0) Gecko/20100101 Firefox/60.0");
pref("general.appname.override", "Netscape");
pref("general.appversion.override", "5.0 (Windows)");
pref("general.buildID.override", "Gecko/20100101");
pref("general.oscpu.override", "Windows NT 10.0");
pref("general.platform.override", "Win64");

// Speeding it up
pref("network.http.pipelining", true);
pref("network.http.proxy.pipelining", true);
pref("network.http.pipelining.maxrequests", 10);
pref("nglayout.initialpaint.delay", 0);

// Privacy & Freedom Issues
pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

// Limit max CPU for web workers to 2 cores
// https://trac.torproject.org/projects/tor/ticket/21675
// https://bugzilla.mozilla.org/show_bug.cgi?id=1360039
pref("dom.maxHardwareConcurrency", 2);

// CIS 2.1.1 Disable Auto Update / Balrog
pref("app.update.auto", false);
pref("app.update.checkInstallTime", false);
pref("app.update.enabled", false);
pref("app.update.staging.enabled", false);
pref("app.update.url", "about:blank");
pref("media.gmp-manager.certs.1.commonName", "");
pref("media.gmp-manager.certs.2.commonName", "");
// Disable Gecko media plugins: https://wiki.mozilla.org/GeckoMediaPlugins
pref("media.gmp-manager.url", "http://127.0.0.1/");
pref("media.gmp-manager.url.override", "data:text/plain,");
pref("media.gmp-provider.enabled", false);
// Don't install openh264 codec
pref("media.gmp-gmpopenh264.enabled", false);
pref("media.gmp-eme-adobe.enabled", false);
pref("media.peerconnection.video.h264_enabled", false);

// CIS 2.3.4 Block Reported Web Forgeries
// http://kb.mozillazine.org/Browser.safebrowsing.enabled
// http://kb.mozillazine.org/Safe_browsing
// https://support.mozilla.org/en-US/kb/how-does-phishing-and-malware-protection-work
// http://forums.mozillazine.org/viewtopic.php?f=39&t=2711237&p=12896849#p12896849
pref("browser.safebrowsing.enabled", false);

// CIS 2.3.5 Block Reported Attack Sites
// http://kb.mozillazine.org/Browser.safebrowsing.malware.enabled
pref("browser.safebrowsing.malware.enabled", false);

// Disable safe browsing remote lookups for downloaded files.
// This leaks information to google.
// https://www.mozilla.org/en-US/firefox/39.0/releasenotes/
// https://wiki.mozilla.org/Security/Application_Reputation
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.appRepURL", "about:blank");
pref("browser.safebrowsing.provider.mozilla.gethashURL", "about:blank");
pref("browser.safebrowsing.provider.mozilla.updateURL", "about:blank");
pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.url", "about:blank");
pref("browser.safebrowsing.provider.google.pver", "about:blank");
pref("browser.safebrowsing.provider.google.reportURL", "about:blank");
pref("browser.safebrowsing.provider.google.gethashURL", "about:blank");
pref("browser.safebrowsing.provider.google.updateURL", "about:blank");
pref("browser.safebrowsing.provider.google.lists", "about:blank");

// https://bugzilla.mozilla.org/show_bug.cgi?id=1025965
pref("browser.safebrowsing.phishing.enabled", false);
pref("browser.safebrowsing.provider.google4.lists", "about:blank");
pref("browser.safebrowsing.provider.google4.updateURL", "about:blank");
pref("browser.safebrowsing.provider.google4.gethashURL", "about:blank");
pref("browser.safebrowsing.provider.google4.pver", "about:blank");
pref("browser.safebrowsing.provider.google4.reportURL", "about:blank");
pref("browser.safebrowsing.provider.mozilla.lists", "about:blank");

// Disable Microsoft Family Safety MiTM support
// https://bugzilla.mozilla.org/show_bug.cgi?id=1239166
// https://wiki.mozilla.org/SecurityEngineering/Untrusted_Certificates_in_Windows_Child_Mode
// https://hg.mozilla.org/releases/mozilla-release/file/ddb37c386bb2ffa180117b4d30ca3b41a8af233c/security/manager/ssl/nsNSSComponent.cpp#l782
pref("security.family_safety.mode", 0);
// https://bugzilla.mozilla.org/show_bug.cgi?id=1265113
// https://hg.mozilla.org/releases/mozilla-release/rev/d9659c22b3c5
// https://bugzilla.mozilla.org/show_bug.cgi?id=1298883
pref("security.enterprise_roots.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.healthreport.about.reportUrl", "127.0.0.1");
pref("datareporting.healthreport.documentServerURI", "127.0.0.1");
pref("healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.healthreport.service.enabled", false);
pref("browser.slowStartup.notificationDisabled", true);
pref("network.http.sendRefererHeader", 2);
pref("dom.event.clipboardevents.enabled",false);
pref("network.prefetch-next", false);
pref("network.dns.disablePrefetch", true);
pref("network.http.sendSecureXSiteReferrer", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.unified", false);
// Do not tell what plugins do we have enabled: https://mail.mozilla.org/pipermail/firefox-dev/2013-November/001186.html
pref("plugins.enumerable_names", "");
pref("plugin.state.flash", 0);
// Do not autoupdate search engines
pref("browser.search.update", false);
// Warn when the page tries to redirect or refresh
//pref("accessibility.blockautorefresh", true);
pref("dom.battery.enabled", false);
pref("device.sensors.enabled", false);
pref("camera.control.face_detection.enabled", false);
pref("camera.control.autofocus_moving_callback.enabled", false);
pref("network.http.speculative-parallel-limit", 0);
// No search suggestions
pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
pref("browser.search.suggest.enabled", false);

// WebRTC
pref("media.peerconnection.enabled", false);
pref("media.peerconnection.ice.default_address_only", true);

pref("font.default.x-western", "sans-serif");

// Disable Captive Portal
pref("network.captive-portal-service.enabled", false);

// Disable Media Capture and Streams API (Media Streams)
pref("media.navigator.enabled", false);
