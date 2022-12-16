const initialState = {
    goods: [
        {
            id: 0,
            title: "Logitech C920 Hd Pro Webcam",
            description: "Full HD 1080p video that's faster, smoother and works on more computers. Skype in Full HD 1080p Get breathtaking Full HD 1080p video calls on Skype for the sharpest video-calling experience. Smoother. Sharper. Richer. Clearer. Logitech Fluid Crystal Technology. It's what makes a Logitech webcam better.",
            price: 120
        },
        {
            id: 1,
            title: "Logitech USB Headset H390 with Noise Cancelling Mic",
            description: "Padded headband and ear pads. Frequency response (Microphone): 100 hertz - 10 kilohertz Rotating, noise canceling microphone. Sensitivity (headphone) 94 dBV/Pa +/ 3 dB. Sensitivity (microphone) 17 dBV/Pa +/ 4 dB",
            price: 50
        },
        {
            id: 2,
            title: "Anker PowerCore 10000 Portable Charger",
            description: "One of The Smallest and Lightest 10000mAh Power Bank, Ultra-Compact Battery Pack, High-Speed Charging Technology Phone Charger for iPhone, Samsung and More.",
            price: 150
        }
    ],
    card: [],
    films: [],
    favorite: []
}

export function fetcher(val) {
    return function (dispatch) {
        fetch(`http://www.omdbapi.com/?s=${val}&apikey=9436cee1`)
            .then(res => res.json())
            .then((data) => {
                dispatch({ type: 'ADD_FILMS', payload: data.Search })
            })
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            let obj = state.goods.find((item) => item.id === action.payload)
            let newArr = [...state.card, obj]
            return { ...state, card: newArr }
        case 'ADD_FILMS':
            console.log(state.films);
            return { ...state, films: action.payload }
        case 'ADD_FILM_LIST':
            let film = state.films.find((item) => item.Title === action.payload)
            let newArr2
            if(state.favorite.includes(film)){
                newArr2 = [...state.favorite]
            }
            else{
                newArr2 = [...state.favorite, film]
            }
            return { ...state, favorite: newArr2 }
        default:
            return state
    }
}

export default reducer