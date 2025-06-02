import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const rawArtistNum = searchParams.get('artistNum');
    const artistNum = rawArtistNum?.split(':')[0];

    if (!artistNum) {
        return NextResponse.json({ error: 'Artist number is required' }, { status: 400 });
    }

    try {
        const url = `https://www.music-flo.com/detail/artist/${artistNum}/track?sortType=POPULARITY&roleType=ALL`;
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle0' });

        for (let i = 0; i < 3; i++) {
            await page.evaluate(() => window.scrollBy(0, 1000));
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        const scrapedData = await page.evaluate(() => {
            const name = document.querySelector('.badge_track_info .artist')?.textContent || '';
            const desc = Array.from(document.querySelectorAll('.badge_track_info dl dd')).map(item => item.textContent);

            const imgLinkElement = document.querySelector('.link_thumbnail') as HTMLElement;
            const imgLink = imgLinkElement?.style.backgroundImage?.replace(/^url\(['"]?|['"]?\)$/g, '');

            const songData = Array.from(document.querySelectorAll('.track_list_table tbody tr')).slice(0, 5).map(item => {
                const imgElement = item.querySelector('.thumb img');
                const imgUrl = imgElement?.getAttribute('data-src') || imgElement?.getAttribute('src') || '';
                
                return {
                    img: imgUrl,
                    title: item.querySelector('.txt_area .tit__text .inactive-link')?.textContent || '',
                    album: item.querySelector('.txt_area .desc .inactive-link')?.textContent || ''
                };
            });

            return {
                name,
                desc,
                imgLink,
                songData
            };
        });

        await browser.close();
        return NextResponse.json(scrapedData);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Error fetching artist data' }, { status: 500 });
    }
}
