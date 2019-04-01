import ModelManager from "../../../../ModelManager";
import getFactory from "../../../actions/getFactory";

export default recordId => modelManager => () => getFactory(ModelManager.MODEL.RECORD, modelManager)(recordId);
