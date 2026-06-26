// fosscell-patches.js — Apply FOSSCELL wiki.fosscell.org patches to wikifeeds.
//
// This script adds wiki.fosscell.org as a supported domain for all feed
// endpoints (featured content, on-this-day, did-you-know, etc.).
//
// Maintenance: when syncing with upstream, run this script again to
// re-apply the patches after pulling upstream changes.
const fs = require('fs');
const path = require('path');
const BASE = path.resolve(__dirname, '..');

let ok = true;

function edit(file, search, replacement, marker, desc) {
  const fn = path.join(BASE, file);
  let content = fs.readFileSync(fn, 'utf8');
  if (!content.includes(search)) {
    console.log(`  ✗ Search string not found in ${file}`);
    ok = false;
    return;
  }
  if (content.includes(marker)) {
    console.log(`  ✓ Already patched: ${file}`);
    return;
  }
  content = content.replace(search, replacement);
  fs.writeFileSync(fn, content, 'utf8');
  console.log(`  ✓ ${desc}: ${file}`);
}

// 1. Add "wiki" language entry to on-this-day.languages.js
edit('lib/on-this-day.languages.js',
  '    en: {',
  `    wiki: {
        monthNames: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        dayPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => \`\${ monthName }_\${ dayNumber }\`,
            headingIds: {
                births: [ "Births" ],
                deaths: [ "Deaths" ],
                events: [ "Events" ],
                holidays: [ "Holidays_and_observances" ]
            }
        },
        selectedPage: {
            nameFormatter: (monthName, monthNumber, dayNumber) => \`Wikipedia:Selected_anniversaries/\${ monthName }_\${ dayNumber }\`,
            listElementSelector: "body > ul li,section > ul li"
        },
        yearListElementRegEx:
          new RegExp(String.raw\`^\\\\s*(?:ad\\\\s+)?(\\\\d+)\\\\s*(?:(bce?)|ad|ce)?\\\\s*[\\\\u002D\\\\u2013\\\\u2014\\\\u2212]\\\\s*(.*\\\\S.*)\`, "i"),
        yearPrefixRegEx:
          new RegExp(String.raw\`^\\\\s*(\\\\d+)\\\\s*[:\\\\u002D\\\\u2013\\\\u2014\\\\u2212]*\\\\s*$\`, "i"),
        selectedRegEx:
          new RegExp(String.raw\`^\\\\s*(?:ad\\\\s+)?(\\\\d+)\\\\s*(?:(bce?)|ad|ce)?\\\\s*[\\\\u002D\\\\u2013\\\\u2014\\\\u2212]\\\\s*(.*\\\\S.*)\`, "i")
    },
    en: {`,
  'wiki: {',
  'Add wiki language entry'
);

// 2. Add wiki.fosscell.org to featured.js supported domains
edit('lib/featured.js',
  'const isSupported = (domain) => supportedDomains.includes(domain);',
  "const isSupported = (domain) => supportedDomains.includes(domain) || domain === 'wiki.fosscell.org';",
  "wiki.fosscell.org",
  'Add wiki.fosscell.org to supported domains'
);

// 3. Add wiki.fosscell.org to did-you-know.js supported domains
edit('lib/did-you-know.js',
  'const isSupported = (domain) => supportedDomains.includes(domain);',
  "const isSupported = (domain) => supportedDomains.includes(domain) || domain === 'wiki.fosscell.org';",
  "wiki.fosscell.org",
  'Add wiki.fosscell.org to supported domains'
);

if (ok) {
  console.log('\nAll patches applied successfully.');
} else {
  console.log('\nSome patches FAILED. Check the lines above.');
  process.exit(1);
}
