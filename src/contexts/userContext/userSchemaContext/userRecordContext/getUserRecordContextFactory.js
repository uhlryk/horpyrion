import ModelManager from "../../../../ModelManager";
import getFactory from "../../../actions/getFactory";

export default userRecordId => modelManager => () => getFactory(ModelManager.MODEL.USER, modelManager)(userRecordId);
