import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import RequestQuoteTwoToneIcon from '@mui/icons-material/RequestQuoteTwoTone';
import Drawer from '../Drawer';

const HomeCard = ({ book }) => {

    const { _id, image, name, category, price, author, description } = book;

    return (
        <div className="flex md:h-[220px] h-[250px] items-center justify-center overflow-hidden rounded-2xl group">
            <div className="md:h-[220px] h-[250px] w-[53%] text-center py-4 bg-[#113f67]">
                <img
                    src={image}
                    alt={name}
                    className="h-full object-cover mx-auto shadow-md shadow-[#e7eaf6] transform transition duration-500 ease-out group-hover:scale-110 group-hover:-skew-y-[7deg]"
                    loading="lazy"
                />
            </div>
            <div className="w-[47%] h-full bg-[#e7eaf6] ps-4 pt-6 pb-4 pe-2 font-semibold text-lg flex flex-col justify-between gap-3 text-[#243a5d]">
                <div >
                    <p className="text-xl font-bold">{name}</p>
                    <p className='mt-4 flex items-center gap-2 '> <CategoryTwoToneIcon fontSize='small' /> {category}</p>
                    <p className='mt-3 flex items-center gap-2'> <RequestQuoteTwoToneIcon fontSize='small' /> {price} $</p>
                </div>
                
                <Drawer book={book}/>
            </div>
        </div>
    );
};

export default HomeCard;