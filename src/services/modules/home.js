import dannyRequest from ".."

export function getHomeGoodPriceData() {
  return dannyRequest.get({
    url: "/home/goodprice"
  })
}