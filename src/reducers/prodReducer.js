import printerImg from '../images/products/CanonMG2522Printer.jpeg'
import samImg from '../images/products/SamsungGalaxyTabA.jpeg'
import pcImg from '../images/products/HPAIO_R3TouchDesktop.jpeg'
import projImg from '../images/products/VANKKYO470Projector.jpeg'
import appleWatch from '../images/products/appleWatch.jpeg'

// we can use delivery single object in cart , as all delivery times will be same
const products = [
    {
        prodId:1, /*Maybe change to id */
        model:'HTML1508/37',
        complexId:'ST102231',
        img:printerImg,
        imgs:[
            printerImg,

            // prod_one_img_one
        ],
        name:'Canon PIXMA MG2522 Wired All-in-One Color Inkjet Printer',
        description:'',  
        maxPrice:39.99,
        price:35.00,
        delivery: {
            date:new Date() //current date + 2
        },
        specifications:[
            ["Weight","1 lbs"],
            ["Count",1],
            ["Color Category","Black"]
        ],
        reviews:[
            {
                author:'Joshua',
                title:"Title",
                description:"Good Product!",
                date:new Date(2021,4,29), // maybe a string date ,non functional
                stars:4
            },
            {
                title:"Title2",
                description:"somee222e",
                stars:4
            }
        ],
        stars:4, // average from looping through
        numReviews:12, //uppper review array length
        category:"Electronics",/*for url category. */
        categoryId: 1,
        cartDetails:{
            inCart:false,
            qty:0
        }
    },
    {
        prodId:2,
        img:samImg,
        name:"SAMSUNG Galaxy Tab A 8.0'' 32 GB WiFi Android 9.0 Tablet Black - SM-T290NZKAXAR",
        stars:'5',
        numReviews:618,
        categoryId: 1,
        price:132,
        category:"Electronics",
        inCart:false
    },
    {
        prodId:3,
        img:pcImg,
        name:'HP 22 AIO R3 Touch 8GB/1TB Desktop All-In-One',
        stars:5,
        numReviews:402,
        price:499,
        categoryId: 1,
        inCart:false
    },
    {
        prodId:4,
        img:projImg,
        name:"VANKYO Leisure 470 Mini Wifi Projector, 250'' Large Screen and 1080P Supported LCD Home Theater Projecto",
        stars:5,
        numReviews:53,
        categoryId: 1,
        price:109,
        inCart:false
    },
    {
        prodId:5,
        img:appleWatch ,
        name:"Apple Watch Series 6 GPS, 40mm PRODUCT(RED) Aluminum Case with PRODUCT(RED) Sport Band - Regular",
        stars:5,
        numReviews:248,
        categoryId: 1,
        price:348,
        inCart:false
    },
    {
        prodId:6,
        img:printerImg,
        name:'Canon PIXMA MG2522 Wired All-in-One Color Inkjet Printer',
        stars:'4',
        numReviews:'3124',
        categoryId: 1,
        price:'35',
        inCart:false
    },
    {
        prodId:7,
        img:samImg,
        name:"SAMSUNG Galaxy Tab A 8.0'' 32 GB WiFi Android 9.0 Tablet Black - SM-T290NZKAXAR",
        stars:'5',
        numReviews:618,
        categoryId: 1,
        price:132,
        inCart:false
    }
]

const prodReducer = (state=products,action)=>{
    switch(action.type){
        case "ADD_TO_CART_NOTIFY":
            return state
        default:
            return state
    }
}


export default prodReducer ;

