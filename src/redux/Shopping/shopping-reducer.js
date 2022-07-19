import * as actionTypes from './shopping-types'
import stickyRice from './dim-sum-dishes/sticky-rice-lotus-leaf.jpeg'
import eggTarts from './dim-sum-dishes/egg-tarts.jpeg'
import potStickers from './dim-sum-dishes/potstickers.jpeg'
import steamedPorkRibs from './dim-sum-dishes/steamed-pork-ribs.jpeg'
import soupDumplings from './dim-sum-dishes/soup-dumplings.jpeg'
import beefTripe from './dim-sum-dishes/beef-tripe.jpeg'
import porkRiceNoodles from './dim-sum-dishes/pork-rice-noodles.jpeg'
import scallionPancakes from './dim-sum-dishes/scallion-pancakes.jpeg'
import bakedPorkBuns from './dim-sum-dishes/baked-pork-buns.jpeg'
import plainRiceNoodles from './dim-sum-dishes/plain-rice-noodles.jpeg'
import turnipCakes from './dim-sum-dishes/turnip-cakes.jpeg'
import friedSesameBalls from './dim-sum-dishes/fried-sesame-balls.jpeg'
import shrimpDumplings from './dim-sum-dishes/shrimp-dumplings.jpg'
import porkDumplings from './dim-sum-dishes/pork-dumplings.png'
import chickenFeet from './dim-sum-dishes/chicken-feet.jpeg'
import spongeCake from './dim-sum-dishes/sponge-cake.jpeg'
import friedSpringRolls from './dim-sum-dishes/fried-spring-rolls.jpeg'
import steamedPorkBuns from './dim-sum-dishes/steamed-pork-buns.jpeg'
import sesamePrawnToast from './dim-sum-dishes/sesame-prawn-toasts.jpeg'
import pineappleCustardBuns from './dim-sum-dishes/pineapple-custard-buns.jpeg'

const INITIAL_STATE = {
    products: [
        {   "id": "1",
            "name": "Sticky Rice",
            "source": stickyRice,
            "price": "3.95"
        },
        {   "id": "2",
            "name": "Egg Tarts",
            "source": eggTarts,
            "price": "2.95"
        },
        {   "id": "3",
            "name": "Potstickers",
            "source": potStickers,
            "price": "3.95"
        },
        {   "id": "4",
            "name": "Steamed Pork Ribs",
            "source": steamedPorkRibs,
            "price": "4.95"
        },
        {   "id": "5",
            "name": "Soup Dumplings",
            "source": soupDumplings,
            "price": "4.95"
        },
        {   "id": "6",
            "name": "Beef Tripe",
            "source": beefTripe,
            "price": "3.95"
        },
        {   "id": "7",
            "name": "Pork Rice Noodles",
            "source": porkRiceNoodles,
            "price": "2.95"
        },
        {   "id": "8",
            "name": "Scallion Pancakes",
            "source": scallionPancakes,
            "price": "2.95"
        },
        {   "id": "9",
            "name": "Baked Pork Buns",
            "source": bakedPorkBuns,
            "price": "4.95"
        },
        {   "id": "10",
            "name": "Plain Rice Noodles",
            "source": plainRiceNoodles,
            "price": "2.95"
        },
        {   "id": "11",
            "name": "Turnip Cakes",
            "source": turnipCakes,
            "price": "3.95"
        },
        {   "id": "12",
            "name": "Fried Sesame Balls",
            "source": friedSesameBalls,
            "price": "2.95"
        },
        {   "id": "13",
            "name": "Shrimp Dumplings",
            "source": shrimpDumplings,
            "price": "2.95"
    
        },
        {   "id": "14",
            "name": "Pork Dumplings",
            "source": porkDumplings,
            "price": "3.95"
        },
        {   "id": "15",
            "name": "Chicken Feet",
            "source": chickenFeet,
            "price": "3.95"
        },
        // {
        //     "name": "Sponge Cake",
        //     "source": spongeCake,
        //     "price": "$2.95"
        // },
        // {
        //     "name": "Fried Spring Rolls",
        //     "source": friedSpringRolls,
        //     "price": "$3.95"
        // },
        // {
        //     "name": "Steamed Pork Buns",
        //     "source": steamedPorkBuns,
        //     "price": "$4.95"
        // },
        // {
        //     "name": "Sesame Prawn Toast",
        //     "source": sesamePrawnToast,
        //     "price": "$3.95"
        // },
        // {
        //     "name": "Pineapple Buns",
        //     "source": pineappleCustardBuns,
        //     "price": "$2.95"
        // },
    ], //{id, title, descrp, price, img}
    cart: [], //{id, title, descrip, price, img, qty}
    currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            // get the items data from the product array
            const item = state.products.find((prod) => prod.id === action.payload.id);
            // check if item is in cart already, if so just adjust quantity
            const inCart = state.cart.find((item)=> item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty: 1}],
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map(item=>item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item)
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state, 
                currentItem: action.payload,
            }
        default: 
        return state;
    }
}

export default shopReducer;