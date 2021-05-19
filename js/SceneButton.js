import {Button} from "./Button";

export class SceneButton extends Button {

    /**
     * @param { import('obs-websocket-js') } obs
     * @param { string } sceneName
     */
    constructor(obs, sceneName) {
        super();
        this.obs = obs;
        this.label = sceneName;
        this.sceneName = sceneName;
    }

    onMounted(element) {
        this.obs.on('SwitchScenes', (data) => {
            this.active(data['scene-name'] === this.sceneName);
        });
    }

    onClick() {
        this.obs.send('SetCurrentScene', { 'scene-name': this.sceneName });
    }
}
