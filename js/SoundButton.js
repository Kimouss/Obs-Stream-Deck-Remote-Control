import {Button} from "./Button";

export class SoundButton extends Button {

    /**
     * @param { import('obs-websocket-js') } obs
     * @param { string } soundName
     */
    constructor(obs, soundName) {
        super();
        this.obs = obs;
        this.label = soundName;
        this.soundName = soundName;
    }

    onMounted() {
        this.obs.on('MediaStarted', (media) => {
            if (media.sourceName === this.soundName) {
                this.active(true);
            }
        });

        this.obs.on('MediaEnded', (media) => {
            if (media.sourceName === this.soundName) {
                this.active(false)
            }
        });
    }

    onClick() {
        this.obs.send('RestartMedia', { 'sourceName': this.soundName });
    }
}
