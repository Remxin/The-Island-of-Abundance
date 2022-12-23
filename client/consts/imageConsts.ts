export default {
    buildingCardsImagesMap: {
        "/images/road.png": require("../public/images/road.png"),
        "/images/village.png": require("../public/images/village.png"),
        "/images/city.png": require("../public/images/city.png"),
        "/images/fishery.png": require("../public/images/fishery.png"),
        "/images/trading-post.png": require("../public/images/trading-post.png"),
        "/images/castle.png": require("../public/images/castle.png"),
        "/images/dock.png": require("../public/images/dock.png")
    },

    buildingDestinationImagesMap: {
        "Road": require("../public/images/cardsBackgrounds/road.jpg"),
        "Village": require("../public/images/cardsBackgrounds/wheat.jpg"),
        "City": require("../public/images/cardsBackgrounds/wheat.jpg"),
        "Fishery": require("../public/images/cardsBackgrounds/sea.jpg"),
        "Trading City": require("../public/images/cardsBackgrounds/money-stack.jpg"),
    },

    resourceImageMap: {
        "ducats": require("../public/images/resources/coin.png"),
        "wood": require("../public/images/resources/wood.png"),
        "stone": require("../public/images/resources/stone.png"),
        "clay": require("../public/images/resources/clay.png"),
        "wheat": require("../public/images/resources/wheat.png"),
        "meat": require("../public/images/resources/meat.png"),
        "fish": require("../public/images/resources/fish.png"),
    },

    tierBorderMap: {
        // TODO: map tiers to correct border type
        "I": "",
        "II": "",
        "III": ""
    }
}