import Controls from "./js/controls.js"
import Timer from "./js/timer.js"
import Sound from "./js/sounds.js"
import Events from "./js/events.js"
import {
    body,
    buttonLightTheme,
    buttonDarkTheme,
    buttonPlay,
    buttonPause,
    buttonStop,
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFireplace,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace,
    minutesDisplay,
    secondsDisplay
} from "./js/elements.js"

const controls = Controls({
    body,
    buttonLightTheme,
    buttonDarkTheme,
    buttonPlay,
    buttonPause,
    buttonStop,
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFireplace,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})