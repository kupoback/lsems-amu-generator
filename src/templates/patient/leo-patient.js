import {calculateBmi, formatTemperature} from '@util/mixins'

export const generatePatientFile = (
    {fullName, phoneNumber, profession, height, weight, bloodType, allergies, ecgBand, oximetry, temperature, bloodPressure, auscultation, coverTest, audioMeterTest, ecg, urinalysis},
    {internalRank, name, rank, signature},
    destination,
    newPage = false,
) => {
    if (!internalRank || !name || !rank || !signature) {
        alert('You need to make sure everything in Settings is filled out')
    } else {
        const template = `[img]https://i.ibb.co/XZ8kBN7h/image.png[/img]
[lsemssubtitle]PATIENT INFORMATION[/lsemssubtitle]
[divbox=white]
[b]Full name:[/b] ${fullName}
[hr]
[b]Phone number:[/b] ${phoneNumber}
[hr]
[b]Profession:[/b] ${profession}
[hr]
[b]Height:[/b] ${height && `${height}cm`}
[hr]
[b]Weight:[/b] ${weight && `${weight}kg`}
[hr]
[b]Blood Type:[/b] ${bloodType}
[hr]
[b]Allergies:[/b] ${allergies}
[hr]
[/divbox]
[lsemssubtitle]PHYSICAL EXAMINATION[/lsemssubtitle]
[divbox=white]
[b]ECG Band:[/b] ${ecgBand && `${ecgBand} BPM`}
[hr]
[b]Oximeter:[/b] ${oximetry && `${oximetry}%`}
[hr]
[b]Temperature:[/b] ${temperature && `${formatTemperature(temperature)}C`}
[hr]
[b]Blood Pressure:[/b] ${bloodPressure && `${bloodPressure} mmHg`}
[hr]
[b]Auscultation:[/b]
${auscultation}
[hr]
[b]BMI:[/b] ${(height && weight && calculateBmi(height, weight)) || ''}
[hr]
[b]Cover Test:[/b]
${coverTest}
[hr]
[b]Audio-meter Test:[/b]
${audioMeterTest}
[hr]
[b]ECG:[/b]
${ecg}
[hr]
[b]Urinalysis:[/b]
${urinalysis}
[/divbox]
[divbox=white]

[img]${signature}[/img]
[i]${name}[/i]
[b]${internalRank} / ${rank}[/b]
[b]Los Santos Emergency Medical Services[/b]
[/divbox][img]https://i.ibb.co/cXJ38RPM/image.png[/img]`

        navigator.clipboard.writeText(template).then(
            () => {},
            e => console.error(e),
        )
        newPage && window.open(destination, '_blank')
    }
}
