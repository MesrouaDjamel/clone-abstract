import ListCard from "@/components/blog/ListCards";
import { FilterByCategory } from "@/lib/utils";

const InsideAbstractPage = async() => {
  const response = await fetch("http://localhost:8000/Cards");
  const data = await response.json()
  const insideAbstract = FilterByCategory("Inside Abstract", data);
  return (
    <div><ListCard data={insideAbstract}/></div>
  )
}

export default InsideAbstractPage