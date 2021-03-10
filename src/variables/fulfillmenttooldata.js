import shipstation from "../assets/img/Icon Tiles/shipstation-logo.png"
import stamps from "../assets/img/Icon Tiles/Stamps.com-logo.png"
import usps from "../assets/img/Icon Tiles/usps-logo.png"
import ups from "../assets/img/Icon Tiles/ups-logo.png"
import fedex from "../assets/img/Icon Tiles/fedex-logo.png"
import uline from "../assets/img/Icon Tiles/uline-logo.png"
import gsbarcode from "../assets/img/Icon Tiles/gs1-barcode-logo.png"
import wcp from "../assets/img/Icon Tiles/wcp-logo.png"

const fulfillmentTools = {
    tiles: [
        {
            name: "ShipStation",
            img: shipstation,
            link: "https://ship5.shipstation.com/orders/awaiting-shipment"
        },
        {
            name: "Stamps",
            img: stamps,
            link: "https://www.stamps.com/"
        },
        {
            name: "USPS",
            img: usps,
            link: "https://www.usps.com/"
        },
        {
            name: "UPS",
            img: ups,
            link: "https://www.ups.com/us/en/Home.page"
        },
        {
            name: "FedEx",
            img: fedex,
            link: "https://www.fedex.com/en-us/home.html"
        },
        {
            name: "ULine",
            img: uline,
            link: "https://www.uline.com/"
        },
        {
            name: "GS1 Barcode",
            img: gsbarcode,
            link: "https://www.gs1.org/standards/barcodes"
        },
        {
            name: "WCP Solution",
            img: wcp,
            link: "https://wcponline.wcpsolutions.com/login"
        },
    ]
}

export default fulfillmentTools;