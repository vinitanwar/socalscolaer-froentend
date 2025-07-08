import BlogCompo from "./BlogCompo";

export default function BlogInner({ params:{slug} }) {


  return (
    <div>
      <BlogCompo slug={slug} />
    </div>
  );
}