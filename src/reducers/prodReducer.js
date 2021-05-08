import printerImg from '../images/products/CanonMG2522Printer.jpeg'
import samImg from '../images/products/SamsungGalaxyTabA.jpeg'
import pcImg from '../images/products/HPAIO_R3TouchDesktop.jpeg'
import projImg from '../images/products/VANKKYO470Projector.jpeg'
import appleWatch from '../images/products/appleWatch.jpeg'

import product_1_img_1 from '../images/products/product_1_img_1.jpeg'

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
        prodId: 6,
        model: 'D3500',
        // complexId:'ST102231',
        img: product_1_img_1,
        imgs: [
            product_1_img_1,
        ],
        name: 'Nikon D3500 W/ AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR Black',
        description: "Compact, comfortable design That's great for travel and Special eventsImage sensor That's 15x larger than those Used in Typical smartphones for sharper, clearer pictures. Works with Nikon's snapbridge app for sharing photos with a compatible smartphone or tablet. 1080P full HD videos with monaural sound at the touch of a buttonCompact, easy to use, and versatile are all traits of the Nikon D3500, which is designed to be as flexible and intuitive as possible, while still offering the imaging capabilities you expect from a DSLR. Utilizing a DX-format 24.2MP CMOS sensor and EXPEED 4 image processor, the D3500 provides a native sensitivity range from ISO 100-25600 to suit working in a variety of lighting conditions, and the sensor and processor combination also provides a 5 fps continuous shooting rate as well as Full HD 1080p video recording at 60 fps. The sensor's design also omits an optical low-pass filter in order to achieve greater sharpness and resolution from both photos and videos. Complementing the imaging capabilities, the D3500 also features SnapBridge, which utilizes Bluetooth connectivity, for wireless sharing of images to your mobile device, including automatic sharing of 2MP images between the camera and your mobile device.",
        maxPrice: 790.99,
        price: 572.99,
        delivery: {
            date: new Date() //current date + 2
        },
        specifications: [

            ["Brand", "Nikon"],
            ["Model", "D3500"],
            ["Product Dimensions", "10.00 x 8.00 x 6.00 Inches"],
            ["Features", "Dust Resistant"],
        ],
        reviews: [
            {
                author: 'Alice',
                title: "Great camera",
                description: "This is a great beginner camera! I bought this for my son and he loves it. He uses it a lot for his school projects. Has lots of great features!",
                date: new Date(2021, 4, 21), // maybe a string date ,non functional
                stars: 5
            },
            {
                author: 'Haley',
                title: "Great beginner camera!",
                description: "Great beginner camera and it's helping me learn how to shoot in manual modes. takes clear photos and I take it everywhere with me for those moments you wish you had more than just your phone to capture the experience.",
                date: new Date(2020, 9, 6), // maybe a string date ,non functional
                stars: 4
            },
            {
                author: 'Kenneth',
                title: "Dont buy",
                description: "This is not a us product. This is a gray market product that included no warranty info nor user guide/manual. You will not have any company warranty on this purchase. I returned the product immediately and repurchased elsewhere.",
                date: new Date(2021, 4, 6), // maybe a string date ,non functional
                stars: 1
            }
        ],
        stars: 3.3,
        numReviews: 3,
        category: "Electronics",
        categoryId: 1,
        cartDetails: {
            inCart: false,
            qty: 0
        }
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

