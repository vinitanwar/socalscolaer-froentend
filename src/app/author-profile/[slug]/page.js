import AuthorCompo from "./AuthorCompo";



// export async function generateStaticParams() {
//   return authors.map((author) => ({
//     slug: author.slug,
//   }));
// }


export default function AuthorPage({ params:{slug} }) {




  return (
    <>
     
     <AuthorCompo slug={slug} />
    </>
  );
}
 