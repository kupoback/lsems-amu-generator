import {toRaw, toRef} from 'vue'
import {globalStore} from '@stores/global'

/**
 * Shared wiring for every paperwork page.
 *
 * Inputs bind straight to `data.<field>` (v-model), which is persisted to
 * localStorage by the store, so there is no per-field ref/focusout bookkeeping.
 *
 * @param {object}   store       A Pinia store with `data` and `defaultData` state
 * @param {Function} generate    Template generator: (data, userData, destination, newPage)
 * @param {string}   destination Forum URL opened by "Copy to Gov"
 */
export const useFormPage = (store, generate, destination) => {
    const global = globalStore()

    const copyWith = (generator, target, newPage = false) => generator(store.data, global.userData, target, newPage)

    return {
        data: toRef(store, 'data'),
        copyWith,
        copyContents: () => copyWith(generate, destination),
        copyContentsForGov: () => copyWith(generate, destination, true),
        reset: () => {
            store.data = structuredClone(toRaw(store.defaultData))
            window.scrollTo({top: 0, behavior: 'smooth'})
        },
    }
}
