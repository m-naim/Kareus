module.exports = {
  getData: (pft) => ({
    name: pft.name,
    total_value: pft.allocation.map((a) => a.total_value).reduce((a, b) => a + b),
    assetsNbr: pft.allocation.length,
    perf1M: pft.perfs.cum_1M.slice(-1)[0] - 1,
    perf6m: pft.perfs.cum_6M.slice(-1)[0] - 1,
    perf1y: pft.perfs.cum_1Y.slice(-1)[0] - 1,
    perf: pft.perfs.cum_All.slice(-1)[0] - 1,
  }),
};
