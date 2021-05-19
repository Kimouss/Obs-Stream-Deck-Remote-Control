import '../css/style.css'

import ObsWebSocket from "obs-websocket-js";
import {SceneButton} from "./SceneButton";
import {SoundButton} from "./SoundButton";

async function main() {
    const obs = new ObsWebSocket();
    await obs.connect({ address: '192.168.10.10:4444', password: 'obscontrol' });
    const data = await obs.send("GetSceneList");

    const scenesRow = document.getElementById('scenes');
    for (const scene of data.scenes) {
        const button = new SceneButton(obs, scene.name);
        if (scene.name === 'Sons') {
            continue;
        }
        button.appendTo(scenesRow);
        if (scene.name === data['current-scene']) {
            button.active(true);
        }
    }

    const sounds = data.scenes.find((s) => s.name === 'Sons') ?.sources ?? [];
    const soundsRow = document.getElementById('sounds');
    for (const sound of sounds) {
        const button = new SoundButton(obs, sound.name);
        button.appendTo(soundsRow);
        if (scene.name === data['current-scene']) {
            button.active(true);
        }
    }
}

main();
