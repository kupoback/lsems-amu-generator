import {dateToUtc} from '@util/mixins'

export const generateAmuEmail = ({subject, to, body, addDate, addPhone}, {internalRank, name, rank, signature, monday, tuesday, wednesday, thursday, friday, saturday, sunday, phone}, destination, newPage = false) => {
    if (!internalRank || !name || !rank || !signature) {
        alert('You need to make sure everything in Settings is filled out')
    } else {
        let bodyTemplate = `${body}`

        if (addDate) {
            const unavailable = () => 'Unavailable'

            const mondaySchedule = () => (monday.length && monday ? monday + ' [ooc]UTC[/ooc]' : unavailable())
            const tuesdaySchedule = () => (tuesday.length && tuesday ? tuesday + ' [ooc]UTC[/ooc]' : unavailable())
            const wednesdaySchedule = () => (wednesday.length && wednesday ? wednesday + ' [ooc]UTC[/ooc]' : unavailable())
            const thursdaySchedule = () => (thursday.length && thursday ? thursday + ' [ooc]UTC[/ooc]' : unavailable())
            const fridaySchedule = () => (friday.length && friday ? friday + ' [ooc]UTC[/ooc]' : unavailable())
            const saturdaySchedule = () => (saturday.length && saturday ? saturday + ' [ooc]UTC[/ooc]' : unavailable())
            const sundaySchedule = () => (sunday.length && sunday ? sunday + ' [ooc]UTC[/ooc]' : unavailable())

            bodyTemplate += `

Below you will find my dates of availability:
Monday: ${mondaySchedule()}
Tuesday: ${tuesdaySchedule()}
Wednesday: ${wednesdaySchedule()}
Thursday: ${thursdaySchedule()}
Friday: ${fridaySchedule()}
Saturday: ${saturdaySchedule()}
Sunday: ${sundaySchedule()}`
        }

        if (addPhone) {
            bodyTemplate += `

My cellphone number: ${phone}`
        }
        const subjectText = subject ? `${subject} | ` : ''

        const template = `[mdheader2
title="${subjectText + dateToUtc()}"
location="Advanced Medicine Unit"
date=""
logo="https://i.ibb.co/qMTNbNL6/image.png"
department="One Team, One Mission, Saving Lives"][/mdheader2]
[divbox4=eeeeee]
${to && `[b]${to}[/b],`}

${bodyTemplate}

Be well,

[img]${signature}[/img]
[i]${name}[/i]
[/divbox4]
[divbox=#8d1717][color=transparent]spacer[/color][/divbox]
[divbox4=eeeeee]
[mdsig name="${name}" role="${internalRank} / ${rank}" img="${signature}" height=38]
[/divbox4]`

        navigator.clipboard.writeText(template).then(
            () => {},
            e => console.error(e),
        )

        newPage && window.open(destination, '_blank')
    }
}
