
// const basicReducer = (
//         storedata = {
//             name: "vishal",
//         }, 
//         action
//     ) => {
//     return storedata;
// }

var initialData = {
    name: "vishal",
};

const basicReducer = (storedata = initialData, action) => {
    return storedata;
};

export default basicReducer;