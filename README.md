# Voices of Country: Australia's First Languages

FIT3179 Data Visualisation 2 · Zubair Ahmed · 30 October 2026

A single-page data story about Aboriginal and Torres Strait Islander languages, built with Vega-Lite 5 and Vega 5.

## Structure

```
index.html            the page
css/style.css         layout and typography
js/main.js            embeds every chart with vega-embed
specs/                one readable JSON spec per chart (15 charts)
data/                 the data files the specs load
```

## Charts

| # | Spec | Idiom |
|---|------|-------|
| 1 | `01_waffle_languages.vl.json` | Waffle / unit chart |
| 2 | `02_dot_map_vitality.vl.json` | Dot map (with interactive legend filter) |
| 3 | `03_austlang_by_state.vl.json` | Bar chart |
| 4 | `04_bin_map_sleeping.vl.json` | Square bin map |
| 5 | `05_status_by_state.vl.json` | 100% stacked bar |
| 6 | `06_share_and_count.vl.json` | Line chart + bar chart |
| 7 | `07_choropleth_state_share.vl.json` | Choropleth small multiples (linked hover) |
| 8 | `08_prop_symbol_communities.vl.json` | Proportional symbol map |
| 9 | `09_treemap_languages.vg.json` | Treemap (Vega) |
| 10 | `10_heatmap_speaker_ranges.vl.json` | Heatmap |
| 11 | `11_age_profile.vl.json` | 100% stacked bar |
| 12 | `12_nils_slope.vl.json` | Slope chart |
| 13 | `13_radial_nils3.vl.json` | Radial (polar area) chart |
| 14 | `14_timeline_revival.vl.json` | Timeline |
| 15 | `15_tile_map_change.vl.json` | Tile-grid map |

All projected maps (dot, bin, choropleth, proportional symbol) use an Albers equal-area conic projection (parallels 18°S and 36°S). The bin map loads `data/au_states_albers.topo.json` and the `x`/`y` fields in `glottolog_au_languages.json`, which are pre-projected to Australian Albers (EPSG:3577) with mapshaper, and uses an identity projection so the bins are exact 200 km squares.

## Data sources

- ABS, *Language Statistics for Aboriginal and Torres Strait Islander Peoples, 2021*
- ABS, *Measuring What Matters: Aboriginal and Torres Strait Islander languages spoken*
- Glottolog CLDF (Hammarström et al.), CC BY 4.0: language coordinates and endangerment status
- AIATSIS AustLang: language varieties by state
- National Indigenous Languages Report (2020) and AIATSIS NILS pages: NILS1–3 results
- ABS state boundaries via github.com/rowanhogan/australian-states, simplified with mapshaper

## Publishing

Push this folder to a GitHub repository, then turn on **Settings → Pages → Deploy from branch → main / root**. The site will be served at `https://<username>.github.io/<repo>/`.
