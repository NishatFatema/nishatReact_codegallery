export const addEmp=(Name,desc,img)=>({
    type="ADD_Emp",
    empData:{
        Name,
        desc,
        img,
    }
});