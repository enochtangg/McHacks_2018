export class Watson {
    document_tone: {
        tones: Tone[]
    };
}

export class Tone {
    score: number;
    tone_id: string;
    tone_name: string;
}

export interface Reqbody {
    text: string;
}
