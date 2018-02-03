export class Watson {
    sentence_id: number;
    text: string;
    tones: Tone[];
    
}

export class Tone {
    score: number;
    tone_id: string;
    tone_name: string;
}