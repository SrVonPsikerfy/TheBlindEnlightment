import Boot from "./boot.js"
import MainMenu from "./main_menu.js";
import Options from "./options.js";
import levelSelector from "./level_selector_menu.js";
import Level0 from "./level0.js";
import Level1 from "./level1.js";
import InfoLevel from "./infoLevel.js";
import PauseScene from "./pause_scene.js";
import {testSilueta_0, testSilueta_1, testSilueta_2} from "./event_scene.js";
import {dad_Event_0, dad_Event_1, dad_Event_2} from "./events_level0.js"
import {glassesItem_Event_0, glasses_Event_0, glasses_Event_1, glasses_Event_2, foreigner_Event_0, foreigner_Event_1, grandMother_Event_0, seller_Event_0,
seller_Event_1, hungryKid_Event_0, elder_Event_0, elder_Event_1, tavern_Event_0, cane_Event_0, well_Event_0, coins_Event_0, grave_Event_0, brother_Event_Idle, brother_Event_0,
doctorEvent_0, doctorEvent_1, doctorEvent_2, homeless_Event_0, homeless_Event_1, grandMother_Event_1, lumberjackEvent_0, lumberjackEvent_1,
painterEvent_0, painterEvent_1, sickTreeEvent_0, sickTreeEvent_1, sickTreeEvent_2, deathEvent_0, maxFaithEvent_0} from "./events_level1.js"

const config = {
    type: Phaser.AUTO,
    width: 800, //ancho camara
    height: 600, //alto camara
    scale: { //escala en la ventana
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    },
    physics: { //fisicas de matter
        default: 'matter',
        matter: {
            gravity: {
                y: 0
            },
            debug: { //debug activado
                showBody: true,
                showStaticBody: true
            }
        }
    },
    scene: [Boot, MainMenu, Options, levelSelector, Level0, Level1, InfoLevel, PauseScene,
        //eventos generales
        brother_Event_Idle,
        //eventos de nivel 0
        dad_Event_0, dad_Event_1, dad_Event_2,
        //eventos de nivel 1
        deathEvent_0, maxFaithEvent_0, painterEvent_0, painterEvent_1, doctorEvent_0, doctorEvent_1, lumberjackEvent_0,
        lumberjackEvent_1, sickTreeEvent_0, sickTreeEvent_1, sickTreeEvent_2, testSilueta_0, testSilueta_1, testSilueta_2, glassesItem_Event_0, glasses_Event_0,
        glasses_Event_1, glasses_Event_2, foreigner_Event_0, foreigner_Event_1, grandMother_Event_0, seller_Event_0, seller_Event_1,
        hungryKid_Event_0, elder_Event_0, elder_Event_1, tavern_Event_0, cane_Event_0, well_Event_0, coins_Event_0, grave_Event_0,
        brother_Event_0], //escenas a cargar
}



new Phaser.Game(config);

export default class Main{
    //metodo que destruye el juego y lo recarga
    restartGame(ref){
        ref.sys.game.destroy(true);
        new Phaser.Game(config)
    }
}
