export const generatePrescription = ({
    fullName,
    phoneNumber,
    diagnosis,
    prescription,
    startDate,
    duration,
}, {internalRank, name, rank, signature}) => {
    if (!internalRank || !name || !rank || !signature) {
        alert('You need to make sure everything in Settings is filled out')
    } else {

        const createEndDate = () => {
            // Generate the End Date based on the duration

            return '';
        }

        const template = `[img]https://i.imgur.com/9iRWEvN.png[/img]
[lsemssubtitle]INFORMATION[/lsemssubtitle]
[divbox=white][b]Patient's Name:[/b] ${fullName}
[hr][/hr]
[b]Patient's Phone Number:[/b] ${phoneNumber}
[hr][/hr]
[b]Reason For Prescription:[/b] ${diagnosis}
[hr][/hr]
[b]What Is Prescribed:[/b] ${prescription}
[hr][/hr]
[b]Starting on:[/b] ${startDate}
[hr][/hr]
[b]Expiring on:[/b] ${createEndDate}
[hr][/hr]
[center][color=blue][b]

[ooc]Use UTC timezone (/time) to keep it universal[/ooc][/b][/color][/center]

[/divbox]
[divbox=white]
[img]${signature}[/img]
[i]${name}[/i]
[b][i]${internalRank} / ${rank}[/i]
Los Santos Advanced Medicine Division[/b]
[/divbox][img]https://i.imgur.com/HNP4ksW.png[/img]
        `;

        navigator.clipboard.writeText(template).then(
            () => {},
            e => console.error(e),
        )
    }
}
