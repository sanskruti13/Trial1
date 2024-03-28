import { HomePage } from "@/component/HomePage";
import { getProject } from "@/utils/client";

export default  async function Home() {

  const allPages = await getProject();
  // console.log(allPages);
// const allPagesWithForEach = allPages.filter(ele => ele._type == 'page') 
// console.log(allPagesWithForEach)
// // const heroPage =  allPagesWithForEach.filter(ele => ele._type == 'hero')
// // console.log(heroPage)

  return (
    <main>
     <HomePage page={allPages}/>
    </main>
  );
}
