import { HydrateClient } from "~/trpc/server";
import HistogramChart from "~/app/_components/organisms/charts/Histogram";
import AgePieChart from "~/app/_components/organisms/charts/Pie";
import DiseaseDonutChart from "~/app/_components/organisms/charts/Donut";

export default function Reports(){
    return(
        <HydrateClient>
            <div className='flex flex-row'>
                <div className="border-4 border-primary-1 rounded-lg p-4 m-8 w-2/5 flex flex-col items-center">
                    <AgePieChart />
                </div>
                <div className='border-4 border-primary-1 rounded-lg p-4 m-8 w-3/5 flex flex-col items-center'>
                    <HistogramChart />
                </div>
            </div>
            <div className='border-4 border-primary-1 rounded-lg p-4 m-8 flex flex-col items-center'>
                <DiseaseDonutChart />
            </div>
        </HydrateClient>
    );
}