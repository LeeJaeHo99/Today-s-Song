import SectionTitle from '@/components/SectionTitle';
import RecommendTable from '@/components/Recommend/RecommendTable';
import SubTitle from '@/components/SubTitle';
import TablePagination from '@/components/Recommend/TablePagination';

export default async function RecommendHistorySection(){
    let getData: string[] = [];
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getRecommend`);
        const result = await response.json();
        const recommendData = result.data;
        const reverseRecommendData = recommendData.reverse();
        getData = reverseRecommendData;
    }
    catch(e){
        console.error(e);
    }
    return(
        <section className="recommend-history-section">
            <div className="inner">
                <SectionTitle title={`🎵 노래 신청 리스트 🎵`}/>
                <SubTitle title={`현재까지 신청된 음악을 확인 할 수 있습니다.`}/>
                <RecommendTable getData={getData}/>
                <TablePagination getData={getData}/>
            </div>
        </section>
    );
}