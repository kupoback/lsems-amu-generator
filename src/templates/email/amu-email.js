import {dateToUtc} from "@/util/mixins";

export const generateAmuEmail = (
    {
        subject,
        to,
        body
    },
    {
        internalRank,
        name,
        rank,
        signature
    },
    destination,
    newPage = false
) => {
    if (!internalRank || !name || !rank || !signature) {
        alert('You need to make sure everything in Settings is filled out')
    } else {
        const template = `[LSEMSfooter][/LSEMSfooter]
[divbox=white]
[fimg=140,140]https://i.imgur.com/QYXPM0p.png[/fimg][aligntable=right,0,0,0,0,0,0][right][font=Arial][b]
[size=150]Los Santos Advanced Medicine Division[/size][/b]
[size=95]"One Team, One Mission, Saving Lives"[/size]
[size=115]${subject}[/size]
[size=95]${dateToUtc('now')}[/size]
[/right][/aligntable]
[hr]
[list=none]
${to && `[b]${to}[/b],`}

${body}

[/list]
[hr][/hr]

Kind regards,

[img]${signature}[/img]
[i]${name}[/i]
[b][i]${internalRank} / ${rank}[/i]
[b]Los Santos Advanced Medicine Division[/b]
[/divbox]
[LSEMSfooter][/LSEMSfooter]`

        navigator.clipboard.writeText(template).then(
            () => {},
            e => console.error(e),
        )

        newPage && window.open(destination, '_blank')
    }
}
