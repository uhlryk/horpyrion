import ModelManager from "../../../ModelManager";
import getFactory from "../../actions/getFactory";

export default schemaId => modelManager => () => getFactory(ModelManager.MODEL.SCHEMA, modelManager)(schemaId);
