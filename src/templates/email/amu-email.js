import {dateToUtc} from '@util/mixins'

export const generateAmuEmail = ({subject, to, body, addDate, addPhone}, {internalRank, name, rank, signature, monday, tuesday, wednesday, thursday, friday, saturday, sunday, phone}, destination, newPage = false) => {
    if (!internalRank || !name || !rank || !signature) {
        alert('You need to make sure everything in Settings is filled out')
    } else {
        let bodyTemplate = `${body}`

        if (addDate) {
            const unavailable = () => 'Unavailable'

            const mondaySchedule = () => (monday.length ? monday + ' [ooc]UTC[/ooc]' : unavailable())
            const tuesdaySchedule = () => (tuesday.length ? tuesday + ' [ooc]UTC[/ooc]' : unavailable())
            const wednesdaySchedule = () => (wednesday.length ? wednesday + ' [ooc]UTC[/ooc]' : unavailable())
            const thursdaySchedule = () => (thursday.length ? thursday + ' [ooc]UTC[/ooc]' : unavailable())
            const fridaySchedule = () => (friday.length ? friday + ' [ooc]UTC[/ooc]' : unavailable())
            const saturdaySchedule = () => (saturday.length ? saturday + ' [ooc]UTC[/ooc]' : unavailable())
            const sundaySchedule = () => (sunday.length ? sunday + ' [ooc]UTC[/ooc]' : unavailable())

            bodyTemplate += `

Below you will find my dates of availability:
Monday: ${mondaySchedule()}
Tueday: ${tuesdaySchedule()}
Wednesday: ${wednesdaySchedule()}
Thursday: ${thursdaySchedule()}
Friday: ${fridaySchedule()}
Saturday: ${saturdaySchedule()}
Sunday: ${sundaySchedule()}`
        }

        if (addPhone) {
            bodyTemplate += `

Please text or call me at: ${phone}`
        }

        const template = `[LSEMSfooter][/LSEMSfooter]
[divbox=white]
[fimg=140,140]https://i.imgur.com/QYXPM0p.png[/fimg][aligntable=right,0,0,0,0,0,0][right][font=Arial][b]
[size=150]Los Santos Advanced Medicine Division[/size][/b]
[size=95]"One Team, One Mission, Saving Lives"[/size]
[size=115]${subject}[/size]
[size=95]${dateToUtc()}[/size]
[/right][/aligntable]
[hr]
[list=none]
${to && `[b]${to}[/b],`}

${bodyTemplate}

[/list]
[hr][/hr]

Kind regards,

[img]${signature}[/img]
[i]${name}[/i]
[b]${internalRank} / ${rank}[/b]
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
