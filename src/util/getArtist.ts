export const parsing = async (artistNum: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getArtist?artistNum=${artistNum}`, {
            cache: 'force-cache',
        });
        if (!response.ok) {
            throw new Error('Failed to fetch artist data');
        }
        
        const scrapedData = await response.json();
        return scrapedData;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};