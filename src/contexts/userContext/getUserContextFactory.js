import ModelManager from "../../ModelManager";
import getFactory from "../actions/getFactory";

export default userId => modelManager => () => getFactory(ModelManager.MODEL.USER, modelManager)(userId)

// export default userId => modelManager => () => {
//     return modelManager
//         .getModels()
//         [ModelManager.MODEL.USER].findOne({
//             where: {
//                 id: userId
//             },
//             raw: true
//         })
//         .then(user => {
//             if (!user) {
//             }
//             return user;
//         });
// };
