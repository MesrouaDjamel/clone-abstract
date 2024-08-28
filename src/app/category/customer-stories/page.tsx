import ListCard from "@/components/blog/ListCards";
import { FilterByCategory } from "@/lib/utils";

const CustomerStoriesPage = async() => {
  const response = await fetch("http://localhost:8000/Cards");
  const data = await response.json()
  const customerStories = FilterByCategory("Customers Stories", data);
  return (
    <div><ListCard data={customerStories}/></div>
  )
}

export default CustomerStoriesPage