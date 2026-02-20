// ============================================================
//  SKEIN WEBSITE TEXT CONFIGURATION
//  Edit this file to update all text across the site.
// ============================================================

export const SITE_TEXT = {

  // ----------------------------------------------------------------
  //  LANDING PAGE  (src/pages/index.astro)
  // ----------------------------------------------------------------
  landing: {
    page_title:      'Skein | The Digital Sanctuary',
    meta_description:'A sovereign sanctuary for the modern seeker.',

    wordmark:   'SKEIN',
    tagline:    'A sovereign sanctuary for the modern seeker,',
    tagline2:   'woven securely into the cloud.',

    cta_primary:      'Join the Coven',
    cta_primary_url:  'https://discord.gg/bBKz4fBKUK',

    cta_secondary:     'Inner Circle Waitlist',
    cta_secondary_url: 'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAah_UNpUMlZDV09DWklGVU1WMlpMQ09FTlhOWTAyTy4u',

    features: [
      { title: 'Sovereign', subtitle: 'Encrypted. Private. Secure.' },
      { title: 'Tethered',  subtitle: 'Cross-device synchronization.' },
      { title: 'Aligned',   subtitle: 'Focused tools, zero tracking.' },
    ],

    footer_built_on:  'Built on AWS · Designed for the Seekers',
    footer_bug_url:   'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAah_UNpUMlZRRjlYTU1KRlVNNEw3S1ZPTU9CU0dHVS4u',
  },

  // ----------------------------------------------------------------
  //  APP — LOGIN SCREEN  (src/pages/app/index.astro)
  // ----------------------------------------------------------------
  app_login: {
    wordmark: 'SKEIN',
    tagline:  'Your personal grimoire',

    tab_enter:    'ENTER',
    tab_initiate: 'INITIATE',

    label_email:    'Email Address',
    placeholder_email: 'your@coven.com',

    label_password:    'Passphrase',
    placeholder_password: 'words of power',

    label_new_password:    'Craft a Passphrase',
    placeholder_new_password: '8+ chars, uppercase & symbol',

    label_confirm_password:    'Confirm Passphrase',
    placeholder_confirm_password: 'once more, with feeling',

    label_verify_code:    'Verification Code',
    placeholder_verify_code: '6-digit code',

    btn_login:    'OPEN THE TOME',
    btn_register: 'BEGIN THE RITE',
    btn_verify:   'CONSECRATE THE SEAL',
  },

  // ----------------------------------------------------------------
  //  APP — PRO / UPGRADE SCREEN  (src/pages/app/index.astro)
  // ----------------------------------------------------------------
  pro: {
    screen_title: 'SKEIN PRO',
    glyph:        '◈',
    headline:     'UNLOCK THE FULL GRIMOIRE',
    description:  'A single purchase unlocks Skein forever — across all your devices.',

    features: [
      'Unlimited grimoire entries',
      'Cloud sync across all devices',
      'Desktop + Android + iOS (PWA)',
      'All future updates included',
    ],

    btn_purchase: 'PURCHASE SKEIN PRO',

    // ★  Update this URL to your Gumroad product link  ★
    gumroad_url:  'https://skeinapp.gumroad.com/l/pro',

    already_purchased_label: 'ALREADY PURCHASED?',
    license_placeholder:     'SKEIN-XXXX-XXXX-XXXX',
    btn_activate_license:    'ACTIVATE LICENSE',
  },

  // ----------------------------------------------------------------
  //  APP — MODALS  (used on landing page)
  // ----------------------------------------------------------------
  modals: {
    privacy: {
      title: 'Privacy Covenant',
      body:  'Your rituals and notes are encrypted at rest and in transit. We do not sell your data, nor do we have a "backdoor" into your grimoire. What you weave in Skein stays within your thread.',
    },
    sovereignty: {
      title: 'Sovereignty Promise',
      body:  'You own your data. Skein supports open-format exports at any time. We promise never to implement "platform lock-in" : your knowledge belongs to you, regardless of where you choose to store it.',
    },
  },

};
