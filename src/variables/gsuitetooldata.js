import gmail from "../assets/img/Icon Tiles/gmail-logo.png"
import calendar from "../assets/img/Icon Tiles/calendar-logo.png"
import drive from "../assets/img/Icon Tiles/drive-logo.png"
import docs from "../assets/img/Icon Tiles/docs-logo.png"
import sheets from "../assets/img/Icon Tiles/sheets-logo.png"
import slides from "../assets/img/Icon Tiles/slides-logo.png"

const gSuiteTools = {
    tiles: [
        {
            name: "Gmail",
            img: gmail,
            link: "https://mail.google.com/mail/u/0/#inbox"
        },
        {
            name: "Calendar",
            img: calendar,
            link: "https://calendar.google.com/calendar/u/0/r"
        },
        {
            name: "Drive",
            img: drive,
            link: "https://drive.google.com/drive/my-drive"
        },
        {
            name: "Docs",
            img: docs,
            link: "https://docs.google.com/document/u/0/?tgif=d"
        },
        {
            name: "Sheets",
            img: sheets,
            link: "https://docs.google.com/spreadsheets/u/0/?tgif=d"
        },
        {
            name: "Slides",
            img: slides,
            link: "https://docs.google.com/presentation/u/0/?tgif=d"
        },
    ]
}

export default gSuiteTools;