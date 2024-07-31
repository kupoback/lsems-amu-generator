import {calculateBmi, formatTemperature} from '@/util/mixins'

export const generateSaaaPilots = (
    {
        fullName,
        phoneNumber,
        medications,
        height,
        weight,
        oximetry,
        temperature,
        bloodPressure,
        auscultation,
        coverTest,
        audioMeterTest,
        drugTest,
        historyOfDiabetes,
        historyOfEpilepsy,
        historyOfHeartAttack,
        historyOfBlackOuts,
        historyOfPsychosis,
    },
    {internalRank, name, rank, signature},
    destination,
    newPage = false,
) => {
    if (!internalRank || !name || !rank || !signature) {
        alert('You need to make sure everything in Settings is filled out')
    } else {
        const template = `[img]https://i.imgur.com/yrVPI6t.png[/img]
[lsemssubtitle]PATIENT INFORMATION[/lsemssubtitle]
[divbox=white]
[b]Full name:[/b] ${fullName}
[hr]
[b]Phone number:[/b] ${phoneNumber}
[hr]
[b]Medications *tranquilizers, antidepressants, opiates, and muscle relaxants are disqualifying*:[/b] ${medications}
[hr]
[/divbox]
[lsemssubtitle]PHYSICAL EXAMINATION[/lsemssubtitle]
[divbox=white]
[b]Height:[/b] ${height && `${height}cm`}
[hr]
[b]Weight:[/b] ${weight && `${weight}kg`}
[hr]
[b]BMI *must be below 35*:[/b] ${(height && weight && calculateBmi(height, weight)) || ''}
[hr]
[b]Oximeter:[/b] ${oximetry && `${oximetry}%`}
[hr]
[b]Temperature:[/b] ${temperature && `${formatTemperature(temperature)}C`}
[hr]
[b]Blood Pressure:[/b] ${bloodPressure && `${bloodPressure} mmHg`}
[hr]
[b]Auscultation:[/b] ${auscultation}
[hr]
[b]Cover Test *using corrective lenses if prescribed*:[/b]
${coverTest}
[hr]
[b]Audio-meter Test *using corrective equipment if prescribed*:[/b]
${audioMeterTest}
[hr]
[b]Drug Test:[/b] ${drugTest}
[hr]
[/divbox]
[lsemssubtitle]SURVEY[/lsemssubtitle]
[divbox=white]
[b]Have you had a diagnosis or symptoms of diabetes?[/b] ${historyOfDiabetes}
[hr]
[b]Have experienced any seizures or had symptoms or diagnosis of epilepsy in the last 12 months?[/b] ${historyOfEpilepsy}
[hr]
[b]Have you experienced a heart attack in the last 12 months?[/b] ${historyOfHeartAttack}
[hr]
[b]Have you had any disturbance or loss of consciousness in the last 12 months?[/b] ${historyOfBlackOuts}
[hr]
[b]Have you had a diagnosis or symptoms of psychosis, bipolar disorder, or other personality disorders?[/b] ${historyOfPsychosis}
[hr]
[/divbox]
[divbox=white]

[img]${signature}[/img]
[i]${name}[/i]
[b]${internalRank} / ${rank}[/b]
[b]Los Santos Emergency Medical Services[/b]
[/divbox][img]https://i.imgur.com/HNP4ksW.png[/img]`

        navigator.clipboard.writeText(template).then(
            () => {},
            e => console.error(e),
        )
        newPage && window.open(destination, '_blank')
    }
}
