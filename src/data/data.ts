interface ArtistData {
    name: string;
    desc: string[];
    imgLink: string;
    songData: {
        img: string;
        title: string;
        album: string;
    }[];
}

export const artistData: ArtistData = {
    name: '123',
    desc: [''],
    imgLink: '',
    songData: [
        {
            img: '',
            title: '',
            album: '',
        },
    ]
};

export const parsingData: string[] = [
    '80137177',
    '80188909',
    '80050546',
    '20056684',
    '80167636',
];