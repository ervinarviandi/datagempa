// "use client"
import DataFetch from "@/components/commons/DataFetch";
import DataGempaBaru from "@/components/commons/DataGempaBaru";
import Footer from "@/components/commons/Footer";
// import DataUpdate from "@/components/commons/DataUpdate";
// import GempaTerkini from "@/components/commons/GempaTerkini";
import Navigation from "@/components/commons/Navigation";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";


export default async function Home() {


  // const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json");
  // const posts = await response.json();
  // console.log(posts)

  return (
    <>
    <div>
      <Navigation/>
      {/* <GempaTerkini/> */}
      {/* <DataUpdate/> */}
      <DataFetch/>
      <Footer/>
    </div>
    </>
  );
}
