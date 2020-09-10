# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

installer:
	@$(MAKE) -C application/iceweasel-uxp/installer installer

package:
	@$(MAKE) -C application/iceweasel-uxp/installer

package-compare:
	@$(MAKE) -C application/iceweasel-uxp/installer package-compare

stage-package:
	@$(MAKE) -C application/iceweasel-uxp/installer stage-package

sdk:
	@$(MAKE) -C application/iceweasel-uxp/installer make-sdk

install::
	@$(MAKE) -C application/iceweasel-uxp/installer install

clean::
	@$(MAKE) -C application/iceweasel-uxp/installer clean

distclean::
	@$(MAKE) -C application/iceweasel-uxp/installer distclean

source-package::
	@$(MAKE) -C application/iceweasel-uxp/installer source-package

upload::
	@$(MAKE) -C application/iceweasel-uxp/installer upload

source-upload::
	@$(MAKE) -C application/iceweasel-uxp/installer source-upload

hg-bundle::
	@$(MAKE) -C application/iceweasel-uxp/installer hg-bundle

l10n-check::
	@$(MAKE) -C application/iceweasel-uxp/locales l10n-check

ifdef ENABLE_TESTS
# Implemented in testing/testsuite-targets.mk

mochitest-browser-chrome:
	$(RUN_MOCHITEST) --flavor=browser
	$(CHECK_TEST_ERROR)

mochitest:: mochitest-browser-chrome

.PHONY: mochitest-browser-chrome

endif
