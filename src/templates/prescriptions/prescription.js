import {dateTimeToUtc} from '@util/mixins'

export const generatePrescription = ({fullName, phoneNumber, diagnosis, prescription, startDate, endDate}, {internalRank, name, rank, signature}, destination, newPage = false) => {
    if (!internalRank || !name || !rank || !signature) {
        alert('You need to make sure everything in Settings is filled out')
    } else {
        const template = `[img]https://i.ibb.co/fYPZNNK0/image.png[/img]
[lsemssubtitle]INFORMATION[/lsemssubtitle]
[divbox=white][b]Patient's Name:[/b] ${fullName}
[hr][/hr]
[b]Patient's Phone Number:[/b] ${phoneNumber}
[hr][/hr]
[b]Reason For Prescription:[/b] ${diagnosis}
[hr][/hr]
[b]What Is Prescribed:[/b] ${prescription}
[hr][/hr]
[b]Starting on:[/b] ${dateTimeToUtc(startDate)}
[hr][/hr]
[b]Expiring on:[/b] ${dateTimeToUtc(endDate)}
[hr][/hr]
[center][color=blue][b]

[ooc]Use UTC timezone (/time) to keep it universal[/ooc]

[/b][/color][/center]

[/divbox]
[divbox=white]
[img]${signature}[/img]
[i]${name}[/i]
[b]${internalRank} / ${rank}[/b]
Los Santos Advanced Medicine Division
[/divbox][img]https://i.ibb.co/cXJ38RPM/image.png[/img]`

        navigator.clipboard.writeText(template).then(
            () => {},
            e => console.error(e),
        )
        newPage && window.open(destination, '_blank')
    }
}
