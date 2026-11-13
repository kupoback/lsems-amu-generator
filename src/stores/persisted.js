import {useStorage} from '@vueuse/core'

/**
 * localStorage-backed form data.
 *
 * - Clones the defaults so typing never mutates them (keeps "Clear" working).
 * - Merges defaults into saved data so fields added later still exist for
 *   people who already have older data saved.
 */
export const persisted = (key, defaults) =>
    useStorage(key, structuredClone(defaults), localStorage, {mergeDefaults: true})
