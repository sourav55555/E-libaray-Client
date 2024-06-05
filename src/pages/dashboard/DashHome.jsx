import BooksQuantityChart from "../../components/dashboard/bookChart/BookQuantityChart";
import UserVisitChart from "../../components/dashboard/userVisit/UserVisitChart";


const DashHome = () => {
    return (
        <div className="w-full flex items-center justify-center px-6 gap-4">
            <div className="w-1/2">
                <UserVisitChart />

            </div>
            <div className="w-1/2">
                <BooksQuantityChart />
            </div>
        </div>
    );
};

export default DashHome;