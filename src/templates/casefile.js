export const setupFile = ({additionalPersons, assignedPeople, assignedUnit, caseLogs, caseCrimeLogs, narrative, overseeingPerson, startingDate}, {department, name, rank, signature}) => {
    if (!name || !rank || !signature) {
        alert('You need to make sure everything in Settings is filled out')
    } else {
        const assignedArray = (assignedPeople.length && assignedPeople) || additionalPersons
        const crimeLogsArray = (caseLogs.length && caseLogs) || caseCrimeLogs

        const assignedUnitName = assignedUnit?.name || ''

        const extraPeople = [...assignedArray].map(content => `[*] ${content}`).join('\r')

        const crimeLogs = [...crimeLogsArray].map(({title, link}) => `[*] [url=${link}]${title}[/url]`).join('\r')

        let imgHash = 'iqcYTGc'
        if (department === 'gnd') imgHash = 'OzIT2SZ'

        const template = `[img]https://i.imgur.com/${imgHash}.png[/img]

[lspdsubtitle]1. INFORMATION[/lspdsubtitle]
[divbox=white]
[list=none]
[b]Starting Date:[/b] ${startingDate}
[b]Assigned Unit:[/b] ${assignedUnitName}
[b]Case File Number: [/b] #000000

[hr]------------------CASE DETAILS------------------[/hr]

[b]Overseeing Detective / Officer[/b]: ${overseeingPerson}
[b]Detective(s) / Officer(s) - Assigned / Involved:[/b]

[list]
${extraPeople}
[/list]
[b]Case, Crime Report or Logs involved:[/b]

[list]
${crimeLogs}
[/list]
[/divbox]

[lspdsubtitle]2. NARRATIVE[/lspdsubtitle]
[divbox=white]
[list=none]
${narrative}

[hr]

[img]${signature}[/img]
${rank} ${name}
Los Santos Police Department
[/divbox]

[lspdsubtitle]3. EVIDENCE[/lspdsubtitle]
[divbox=white]

[hr]--------- ADD THE REQUIRED EVIDENCE MODULES FROM THE POST BELOW THIS ONE ------[/hr]

[/divbox]

[lspdfooter][/lspdfooter]`

        navigator.clipboard.writeText(template).then(
            () => {},
            e => console.error(e),
        )
    }
}
