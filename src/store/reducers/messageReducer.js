const initialState = {
    en: {
        "categories.question": "Customize Your Calculation",
        "commute.options.walkBicykle": "Walk / Bike",
        "commute.options.subway": "Subway / Metro / Train",
    },
    da: {
        "categories.question": "Tilpas Din beregning",
        "commute.options.walkBicykle": "Gå / Cykle",
        "commute.options.subway": "Metro / Tog",
    },
};


const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default messageReducer;