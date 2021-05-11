import cartBlack from "../images/nav/cartblack.svg"
import homeIcon from "../images/others/home.svg"
import orderIcon from "../images/nav/orders.svg"
export const menuData =[
    {
        id:0,
        label:"Home",
        url:"/",
        img:homeIcon

    },
    {
        id:1,
        label:"My Cart",
        url:"/cart",
        img:cartBlack
    },{
        id:2,
        label:"My Orders",
        url:"/orders",
        img:orderIcon
    }
];
export default menuData;