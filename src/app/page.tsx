import { HomePage } from "@/component/HomePage";
import { client } from "@/utils/client";
// import { Animals } from "../component/AnimalCards";

export default  async function Home() {
  // const animal = await client.fetch <any[]>(`*[_type == "animal"]`)
  // const wild = await client.fetch <any[]>(`*[_type == "wild"]`)
  const page = await client.fetch <any[]>(`*[_type == "page"]{
    pageBulider[]{
      _type == "hero" => {
        _type,
        title,
        subtitle,
        button1,
        button2,
        heroimage
      },
    }
  }`)
  console.log(page)
  
  return (
    <main>
     {/* <Animals pet={wild} /> */}
     <HomePage page={page}/>
    </main>
  );
}
