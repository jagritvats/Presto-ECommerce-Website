import cartBlack from "../images/nav/cartblack.svg"
import locationblack from "../images/nav/locationblack.svg"
import phoneblack from "../images/nav/phoneblack.svg"
// import listblack from "../images/listblack.svg"

export const menuData =[
    {
        id:0,
        label:"Home",
        url:"/",
        img:cartBlack

    },
    {
        id:1,
        label:"Location",
        url:"",
        img:locationblack

    },
    {
        id:2,
        label:"Contact Us",
        url:"",
        img:phoneblack

    },
    {
        id:3,
        label:"My Items",
        url:"/cart",
        img:cartBlack

    },
    {
        id:4,
        label:"Privacy Policy",
        url:"",
        img:cartBlack

    },
    {
        id:5,
        label:"Today Deals",
        url:"",
        img:cartBlack
    },
];
export default menuData;