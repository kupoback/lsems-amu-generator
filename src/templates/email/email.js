import {dateToUtc} from '@util/mixins'

export const generateEmail = ({subject, to, body}, {internalRank, name, rank, signature}, destination, newPage = false) => {
    if (!name || !rank || !signature) {
        alert('You need to make sure everything in Settings is filled out')
    } else {
        const subjectText = subject ? `[b][size=110]${subject}[/size][/b]` : ''

        const template = `[mdheader
title="${subject}"
location="Pillbox Hill Medical Center"
date=" | Paleto Bay Medical Center"
department="One Team, One Mission, Saving Lives"][/mdheader]
[divbox4=eeeeee][float=right]${subjectText.toString()}[b][size=95]${dateToUtc()}[/size][/float][/b]

${to && `[b]${to}[/b],`}

${body}

Be well,

[img]${signature}[/img]
[i]${name}[/i]
[/divbox4]
[divbox=#8d1717][color=transparent]spacer[/color][/divbox]
[divbox4=eeeeee]
[mdsig name="${name}" role="${rank}" img="${signature}" height=38]
[/divbox4]`

        navigator.clipboard.writeText(template).then(
            () => {},
            e => console.error(e),
        )

        newPage && window.open(destination, '_blank')
    }
}
