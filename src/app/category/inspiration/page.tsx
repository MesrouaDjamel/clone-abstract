import ListCard from "@/components/blog/ListCards";
import { FilterByCategory } from "@/lib/utils";

const InspirationPage = async() => {
  const response = await fetch("http://localhost:8000/Cards");
  const data = await response.json()
  const inspiration = FilterByCategory("Inspiration", data);
  return (
    <div>
      <ListCard data={inspiration}/>
    </div>
  )
}

export default InspirationPage