import ModelManager from "../../ModelManager";
import getFactory from "../actions/getFactory";

export default userId => modelManager => () => getFactory(ModelManager.MODEL.USER, modelManager)(userId);
