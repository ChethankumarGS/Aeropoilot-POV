# Aeropoilot POV

An independently implemented aviation-inspired portfolio. Warm paper map, animated flight paths, aircraft-door entrance, boarding-pass profile, route timeline, project hover previews and passport stamps.

## Run locally

```sh
python3 -m http.server 8000
```

## Build

```sh
npm run build
```

Vercel settings: Framework Preset `Other`, Build Command `npm run build`, Output Directory `dist`. No environment variables required.

The interface was independently implemented from a visual reference at https://www.victor-jack.me/. It does not include that site's source code, photographs, CV or music. Portrait and project images belong to Chethan's existing portfolio projects. The optional ambient sound is generated in-browser and starts only after pressing Play.
