import dayjs from 'dayjs'

export const generateSaaaPilotsCert = ({fullName}, {internalRank, name, rank, signature}, destination, newPage = false) => {
    if (!internalRank || !name || !rank || !signature) {
        alert('You need to make sure everything in Settings is filled out')
    } else {
        const date = dayjs().format('DD/MMM/YYYY')
        const template = `[img]https://i.imgur.com/hM4TXWD.png[/img]
[align=center]
[img]https://i.imgur.com/HNP4ksW.png[/img]
[divbox=white]
[fimg=120,120]https://i.imgur.com/QYXPM0p.png[/fimg]
[center][img]https://i.imgur.com/7x0vy1x.png[/img][/center]
[center][size=140]${fullName}
was examined by AMU staff on ${date.toUpperCase()} and found medically fit to operate an aircraft.[/size]
[center][img]https://i.imgur.com/7x0vy1x.png[/img][/center]
[/align]
[divbox=white]

[img]${signature}[/img]
[i]${name}[/i]
[b][i]${internalRank} / ${rank}[/i]
[b]Los Santos Emergency Medical Services[/b]
[/divbox][img]https://i.imgur.com/HNP4ksW.png[/img]`

        navigator.clipboard.writeText(template).then(
            () => {},
            e => console.error(e),
        )
        newPage && window.open(destination, '_blank')
    }
}
