SystemJS.config({
  browserConfig: {
    production: true,
    paths: {
      "npm:react@15.3.2": "jspm_packages/npm/react@15.3.2/dist/react.min.js",
      "npm:react-dom@15.3.2": "jspm_packages/npm/react-dom@15.3.2/dist/react-dom.min.js",
      "npm:": "/jspm_packages/npm/",
      "github:": "/jspm_packages/github/",
      "local:": "/jspm_packages/local/",
      "globalize-runtime": "/jspm_packages/npm/globalize@1.1.1/dist/globalize-runtime.js",
      "globalize-runtime/*": "/jspm_packages/npm/globalize@1.1.1/dist/globalize-runtime/*",
    }
  },
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "github:": "/jspm_packages/github/",
      "local:": "/jspm_packages/local/",
      "globalize-runtime": "/jspm_packages/npm/globalize@1.1.1/dist/globalize-runtime.js",
      "globalize-runtime/*": "/jspm_packages/npm/globalize@1.1.1/dist/globalize-runtime/*",
      }
  },
});

