import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const CM_PER_INCH = 2.54
const KG_PER_POUND = 0.45359237

/**
 * Converts the temperature to Celsius if set in F
 *
 * @param temperature
 * @returns {*|string}
 */
export const formatTemperature = temperature => {
    if (temperature >= 50) {
        return (((temperature - 32) * 5) / 9).toFixed(1)
    }
    return temperature
}

/**
 * Converts a height value to cm if it's Imperial units (e.g. 6'3")
 *
 * @param {String} height The height value
 * @returns {string} Whole centimetres, or the input untouched if it isn't a number
 */
export const convertHeightToCm = height => {
    const value = String(height ?? '').trim()
    const match = /^(\d+)'(\d+)(?:''|")$/.exec(value)
    if (match) {
        const inches = Number(match[1]) * 12 + Number(match[2])
        return (inches * CM_PER_INCH).toFixed(0)
    }

    return value !== '' && Number.isFinite(Number(value)) ? Number(value).toFixed(0) : value
}

/**
 * Converts the weight into kg if it's in Imperial units (e.g. "180 lbs")
 *
 * @param {String} weight The weight value
 * @returns {*|string}
 */
export const convertWeightToKg = weight => {
    const match = /^(\d+(?:\.\d+)?)\s*(lbs?|pounds?)$/i.exec(String(weight ?? '').trim())
    if (match) {
        return (Number(match[1]) * KG_PER_POUND).toFixed(0)
    }

    return weight
}

/**
 * Calculates the BMI for a patient ignoring age
 * @param {Number} height The patients height in cm
 * @param {Number} weight The patients weight in kg
 * @returns {*}
 */
export const calculateBmi = (height, weight) => {
    return (weight / ((height * height) / 10000)).toFixed(2)
}

/**
 * Converts the date to UTC
 *
 * @param {string} date The date
 * @returns
 */
export const dateToUtc = date => dayjs.utc(date).format('DD/MMM/YYYY').toUpperCase()

/**
 * Converts the date and time to UTC
 *
 * @param {string} date The date
 * @returns
 */
export const dateTimeToUtc = date => dayjs.utc(date).format('DD/MMM/YYYY HH:mm').toUpperCase()

/**
 * Converts the time to UTC
 *
 * @param {string} time The time
 * @returns
 */
export const timeToUtc = time => dayjs.utc(time, 'HH:mm').format('HH:mm').toUpperCase()
