export default class InitDataManager {
    constructor(horpyrion) {
        this._horpyrion = horpyrion;
    }
    createSchemaIfNotExist(schemaId) {
        return this._horpyrion
            .setRootUser()
            .getSchema(schemaId)
            .then(schema => {
                if (!schema) {
                    return this._horpyrion.setRootUser().insertSchema(schemaId);
                }
            });
    }
}
