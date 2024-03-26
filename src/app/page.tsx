import { HomePage } from "@/component/HomePage";
import { getProject } from "@/utils/client";
// import { Animals } from "../component/AnimalCards";

export default  async function Home() {
  // const animal = await client.fetch <any[]>(*[_type == "animal"])
  const page = await getProject<any[]>(`*[_type == "page"]{
    pageBuilder[]{
      _type == "hero" => {
        _id,
        _type,
        title,
        subtitle,
        button1,
        button2
    }
    }
  }`)
  console.log(page);
  
  return (
    <main>
     {/* <Animals pet={wild} /> */}
     <HomePage page={page}/>
    </main>
  );
}
