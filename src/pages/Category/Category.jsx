import { Link, useParams } from "react-router-dom"
import TopDev from "../../components/TopDevs/TopDev"

const Category = () => {
  const {id} = useParams()
  return (
    <div>
      
      <TopDev category={id.toUpperCase()} />
      <Link to={`categories`}>
 <button className="flex mx-auto w-fit h-fit px-7 py-2 mt-6 text-purple-500  border border-purple-600 bg-transparent">See More</button>
 </Link>
    </div>
  )
}

export default Category