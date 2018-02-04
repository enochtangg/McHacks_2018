export class Watson {
    tones: Tone[];
}

export class Tone {
    score: number;
    tone_id: string;
    tone_name: string;
}

export interface Reqbody {
    text: string;
}
