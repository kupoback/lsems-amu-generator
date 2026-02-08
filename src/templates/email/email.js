import {dateToUtc} from '@util/mixins'

export const generateEmail = ({subject, to, body}, {name, rank, signature}, destination, newPage = false) => {
    if (!name || !rank || !signature) {
        alert('You need to make sure everything in Settings is filled out')
    } else {
        const subjectText = subject ? `${subject} | ` : ''

        const template = `[mdheader
title="${subjectText + dateToUtc()}"
location="Pillbox Hill Medical Center"
date=" | Paleto Bay Medical Center"
department="One Team, One Mission, Saving Lives"][/mdheader]
[divbox4=eeeeee]
${to && `[b]${to}[/b],`}

${body}

Be well
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
