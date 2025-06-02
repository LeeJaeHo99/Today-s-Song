interface SongData {
    date: {
        year: number;
        month: number;
        day: number;
    };
    morning: {
        videoId: string;
        title: string;
        singer: string;
        lyric: string;
    };
    night: {
        videoId: string;
        title: string;
        singer: string;
        lyric: string;
    };
}

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

export const songData: SongData[] = [
    {
        date: {
            year: year,
            month: month,
            day: day,
        },
        morning: {
            videoId: "ITnT4L988G0",
            title: "Everything",
            singer: "검정치마",
            lyric: "You are my everything  My everything  My everything  You are my everything  My everything  비가 내리는 날엔  우리 방 안에 누워 아무 말이 없고  감은 눈을 마주 보면 모든 게 우리 거야  조금 핼쑥한 얼굴로 날 찾아올 때도  가끔 발칙한 얘기로 날 놀랠킬 때도  You are my everything  My everything  My everything  You are my everything  My everything  넌 내 모든 거야  내 여름이고 내 꿈이야  넌 내 모든 거야  나 있는 그대로 받아줄게요",
        },
        night: {
            videoId: "H2ncCtw2YxA",
            title: "좋은 밤 좋은 꿈",
            singer: "너드커넥션",
            lyric: "저 많은 별을 다 세어 보아도  그대 마음은 헤아릴 수 없어요  그대의 부서진 마음 조각들이  차갑게 흩어져 있는 탓에  그댄 나의 어떤 모습들을  그리도 깊게 사랑했나요  이제 내가 해줄 수 있는 건  좋은 밤 좋은 꿈 안녕  좋은 밤 좋은 꿈 안녕  시월의 서늘한 공기 속에도  장미향을 난 느낄 수가 있죠  오월 어느 날에 피었던  빨갛던 밤을 기억하거든요  그댄 나의 어떤 모습들을  그리도 깊게 사랑했나요  이제 내가 해줄 수 있는 건  좋은 밤 좋은 꿈 안녕  까만 밤이 다 지나고 나면  이야기는 사라질 테지만  이름 모를 어떤 꽃말처럼  그대 곁에 남아 있을게요  나는 그대 어떤 모습들을   그리도 깊게 사랑했었나  이제 내가 해줄 수 있는 건  좋은 밤 좋은 꿈 안녕",
        },
    },
];

// TODO
// 이 데이터의 첫번째 인덱스를 db에 저장하고, 삭제
// 매일 아침 6시에 진행