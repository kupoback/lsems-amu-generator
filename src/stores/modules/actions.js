const defaults = {

}

export default {
	defaults,
	addConclusion(payload) {
		return this.updateArray('conclusion', 'conclusions', payload);
	},
	addCharge(payload) {
		return this.updateArray('suspect', 'charges', payload);
	},
    addLogUpdate(payload) {
		return this.updateArray('logging', 'updates', payload);
	},
	/**
	 * Adds a new row to the end of the charges to Array
	 */
	addChargeLine() {
		return this.addToArray('suspect', 'charges');
	},
    addMediaItem(payload) {
        return this.updateArray('media', 'items', payload);
    },
	addMediaLine() {
		return this.media.items.push({})
	},
	addVehicle(payload) {
		return this.updateArray('suspect', 'vehicles', payload);
	},
	/**
	 * Adds a new row to the end of the vehicles to Array
	 */
    addLogUpdateLine() {
		return this.addToArray('logging', 'updates', '');
	},
    addConclusionLine() {
		return this.addToArray('conclusion', 'conclusions', '');
	},
	addVehicleLine() {
		return this.addToArray('suspect', 'vehicles');
	},
    removeMediaItem(itemIndex) {
        console.log(this.media.items[itemIndex])
        return this.removeFromArray('media', 'items', itemIndex);
    },
	removeMediaLine() {
		return this.removeLastItem('media', 'items');
	},
	removeCharge(itemIndex) {
		return this.removeFromArray('suspect', 'charges', itemIndex);
	},
    removeLogUpdate(itemIndex) {
		return this.removeFromArray('logging', 'updates', itemIndex);
	},
	/**
	 * Removes the last row at the end of the person
	 */
	removeChargeLine() {
		return this.removeLastItem('suspect', 'charges');
	},
    /**
     * Removes the last row at the end of the person
     */
    removeVehicleLine() {
        return this.removeLastItem('suspect', 'vehicles');
    },
    removeConclusionLine() {
        return this.removeLastItem('conclusion', 'conclusions');
    },
    removeLogUpdateLine() {
        return this.removeLastItem('logging', 'updates');
    },
	removeVehicle(itemIndex) {
		return this.removeFromArray('suspect', 'vehicles', itemIndex);
	},
	removeConclusion(itemIndex) {
		return this.removeFromArray('conclusion', 'conclusions', itemIndex);
	},
	removeFromArray(prefix, field, itemIndex) {
		if (this[prefix][field].length > 1) {
			return this[prefix][field] = this[prefix][field].filter((item, index) => index !== itemIndex);
		} else {
			alert("You cannot delete the last item");
		}
	},
	removeLastItem(prefix, field) {
		return (
			this[prefix][field].length > 1 &&
			this[prefix][field].pop()
		);
	},
	async resetState(field, defaultValues, elmId) {
		await this.clearInputs(elmId);
		return Object.assign(this[field], defaultValues)
	},
	addToArray(prefix, field, value = '') {
		return this[prefix][field].push(value)
	},
	updateMedia(field, value) {
		return this.media[field] = value
	},
	updateLogging(field, value) {
		return this.logging[field] = value
	},
	updateConclusion(field, value) {
		return this.conclusion[field] = value
	},
	updateSuspect(field, value) {
		return this.suspect[field] = value
	},
	updateVictimWitness(field, value) {
		return this.victimWitness[field] = value
	},
	updateArray(prefix, field, payload) {
		return (this[prefix][field][payload.index] = payload.value);
	},
	clearInputs(elmId) {
		// Reset Input fields
		const inputFields = document
			.getElementById(elmId)
			.getElementsByTagName('input');
		inputFields.length && [...inputFields].map(input => input.value = '');

		// Reset Textarea Fields
		const textareaFields = document
			.getElementById(elmId)
			.getElementsByTagName('textarea')
		textareaFields.length && [...textareaFields].map(input => input.value = '');

		// Reset Select fields
		const selectFields = document
			.getElementById(elmId)
			.getElementsByTagName('select')
		selectFields.length && (selectFields[0][0].selected = true)
	}
}
