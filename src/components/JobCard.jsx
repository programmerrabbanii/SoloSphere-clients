
import { Link } from 'react-router-dom'

const JobCard = ({job}) => {
  console.log(job);
  const {deadline,category,min_price,max_price,description,bid_count}=job
  return (
    <Link
      to={`/job/1`}
      className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'
    >
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
         {deadline}
        </span>
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
          Web Development
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
          E-commerce Website Development
        </h1>

        <p className='mt-2 text-sm text-gray-600 '>
          {description}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
          {max_price}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>{bid_count}</p>
      </div>
    </Link>
  )
}

export default JobCard
