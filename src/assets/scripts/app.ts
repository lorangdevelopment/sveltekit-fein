import { Scroll } from './core/Scroll';
import Splitting from 'splitting';
import { setViewportSize } from './utils/setViewportSize';
import { scrollbarWidth } from './utils/scrollbarWidth';
import * as CookieConsent from 'vanilla-cookieconsent';

export default function app() {
	Scroll.init();
	Splitting();
	setViewportSize();
	scrollbarWidth();

	/**
	 * All config. options available here:
	 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
	 */
    CookieConsent.run({
        language: {
            autoDetect: 'document',
            default: 'en',
            translations: {
                en: {
                    consentModal: {
                        title: 'We use cookies!',
                        description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. {{revisionMessage}} <button class="cc__link" data-cc="show-preferencesModal">Let me choose</button>',
                        revisionMessage: '<br><br>Our <a href="en/privacy-policy?hide-cookie-consent" target="_self" rel="">privacy policy</a> has changed since your last visit.',
                        footer: '<a href="en/privacy-policy?hide-cookie-consent" target="_self" rel="">privacy policy</a>',
                        acceptAllBtn: 'Accept All',
                        acceptNecessaryBtn: 'Accept Necessary'
                    },
                    preferencesModal: {
                        title: 'Cookie preferences',
                        acceptAllBtn: 'Accept All',
                        acceptNecessaryBtn: 'Accept Necessary',
                        savePreferencesBtn: 'Save Preferences',
                        closeIconLabel: 'Accept Necessary',
                        sections: [
                            {
                                description: 'We use cookies to personalize content and improve your digital experience. Some cookies are essential in order for the Web site to function correctly and for security purposes. These essential cookies cannot be deactivated.<br><br>You can activate or deactivate your permission for cookies to collect your browsing data at any time. If you deactivate certain cookies, your browsing experience may be affected.<br><br>You can find out more in our <a href="en/privacy-policy?hide-cookie-consent" target="_self" rel="">privacy policy</a>.'
                            },
                            {
                                title: 'Strictly necessary cookies<span class="pm__badge">Required</span>',
                                description: 'These cookies are set to ensure that our Web site works correctly. They cannot be disabled.',
                                linkedCategory: 'necessary',
                                cookieTable: {
                                    headers: {
                                        name: 'Name',
                                        service: 'Service',
                                        duration: 'Duration',
                                        purpose: 'Purpose'
                                    },
                                    body: [
                                        {
                                            name: 'PHPSESSID',
                                            service: 'Locomotive',
                                            duration: 'Session',
                                            purpose: 'Used to share functional data across pages of the Web site such as the current language.'
                                        },
                                        {
                                            name: 'locomotive.quickpreload',
                                            service: 'Locomotive',
                                            duration: 'Session',
                                            purpose: 'Used to shorten duration of preloading screen on subsequent page navigation.'
                                        },
                                        {
                                            name: 'cc_cookie',
                                            service: 'Locomotive',
                                            duration: '6 months',
                                            purpose: 'Used to remember your cookie consent preferences.'
                                        },
                                        {
                                            name: '_grecaptcha',
                                            service: 'Google reCAPTCHA',
                                            duration: '6 months',
                                            purpose: 'Used to store the assessment if the visit, interaction, or form submission, is legitimate or malicious.'
                                        },
                                        {
                                            name: '__cf_bm',
                                            service: 'Cloudflare',
                                            duration: '30 minutes',
                                            purpose: 'Used to store the assessment if the visit is legitimate or malicious.'
                                        }
                                    ]
                                }
                            },
                            {
                                title: 'Performance cookies',
                                description: 'These cookies are used to analyze site browsing to improve how well it works.',
                                linkedCategory: 'analytics',
                                cookieTable: {
                                    headers: {
                                        name: 'Name',
                                        service: 'Service',
                                        duration: 'Duration',
                                        purpose: 'Purpose'
                                    },
                                    body: [
                                        {
                                            name: '_ga',
                                            service: 'Google Analytics',
                                            duration: '2 years',
                                            purpose: 'Used to distinguish unique users and count page views.'
                                        },
                                        {
                                            name: '_gat',
                                            service: 'Google Analytics',
                                            duration: '1 minute',
                                            purpose: 'Used to limit the frequency of data collection.'
                                        },
                                        {
                                            name: '_gid',
                                            service: 'Google Analytics',
                                            duration: '1 day',
                                            purpose: 'Used to distinguish unique users and count page views.'
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            }
        },
        guiOptions: {
            consentModal: {
                layout: 'box inline',
                position: 'bottom right',
                equalWeightButtons: false,
                flipButtons: false
            },
            preferencesModal: {
                layout: 'box',
                position: 'right',
                equalWeightButtons: false,
                flipButtons: false
            }
        },
        revision: 1,
        categories: {
            necessary: {
                enabled: true,
                readOnly: true
            },
            analytics: {
                autoClear: {
                    cookies: [
                        { name: '_ga' },
                        { name: '_gat' },
                        { name: '_gid' },
                        { name: '/^_gat?_/' }
                    ]
                }
            }
        }
    });
}
