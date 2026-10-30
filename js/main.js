// Embeds every Vega-Lite / Vega spec in /specs into its placeholder on the page.
const charts = {
  "#vis-waffle": "specs/01_waffle_languages.vl.json",
  "#vis-dotmap": "specs/02_dot_map_vitality.vl.json",
  "#vis-austlang": "specs/03_austlang_by_state.vl.json",
  "#vis-binmap": "specs/04_bin_map_sleeping.vl.json",
  "#vis-status-state": "specs/05_status_by_state.vl.json",
  "#vis-share": "specs/06_share_and_count.vl.json",
  "#vis-choropleth": "specs/07_choropleth_state_share.vl.json",
  "#vis-communities": "specs/08_prop_symbol_communities.vl.json",
  "#vis-treemap": "specs/09_treemap_languages.vg.json",
  "#vis-heatmap": "specs/10_heatmap_speaker_ranges.vl.json",
  "#vis-age": "specs/11_age_profile.vl.json",
  "#vis-nils": "specs/12_nils_slope.vl.json",
  "#vis-radial": "specs/13_radial_nils3.vl.json",
  "#vis-timeline": "specs/14_timeline_revival.vl.json",
  "#vis-tiles": "specs/15_tile_map_change.vl.json"
};

// Shared look: same fonts and quiet axes across every chart.
const theme = {
  background: null,
  font: "Public Sans, Helvetica Neue, Arial, sans-serif",
  view: { stroke: null },
  axis: { labelColor: "#5b5148", titleColor: "#5b5148", gridColor: "#e6ddcf", domainColor: "#bfb2a0", tickColor: "#bfb2a0", labelFontSize: 12, titleFontSize: 12, titleFontWeight: 600 },
  legend: { labelColor: "#2b2420", titleColor: "#2b2420", labelLimit: 0, titleLimit: 0, labelFontSize: 12, titleFontSize: 12 },
  header: { labelColor: "#2b2420", labelFont: "Fraunces, Georgia, serif" },
  title: { color: "#2b2420", font: "Public Sans, Helvetica Neue, Arial, sans-serif", fontWeight: 700 }
};

for (const [el, spec] of Object.entries(charts)) {
  vegaEmbed(el, spec, { actions: false, renderer: "svg", config: theme })
    .catch((err) => {
      document.querySelector(el).innerHTML = `<p class="caption">This chart could not load (${err.message}).</p>`;
      console.error(spec, err);
    });
}
