const scrapeIt                      = require("scrape-it")
const { compact, pipe, map, range } = require("lodash/fp")

const url = "https://boersen.manager-magazin.de/mm/index.htn"
const selector = Object.assign({},
   map(i => `#pushtable > tbody > tr:nth-child(${i})`)(range(1, 11))
)

const sponMarket = async () => {
  const { data } = await scrapeIt(url, selector)
  return pipe(
    map(x => x.replace(/\r?\n|\r/g, " ").split("  ")),
    map(compact),
      map(x => ({
          symbol:     x[0],
          value:      x[1],
          change:     x[2],
          changePcnt: x[3],
      }))
  )(data)
}

module.exports = {
    sponMarket
}
