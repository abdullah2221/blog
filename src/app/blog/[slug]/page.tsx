import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";
import { IfullBlog } from "../../../../sanity/lib/interface";
import PortableText from "react-portable-text";
import Image from "next/image";
const getBlogData = async (slug: string) => {
  const query = `*[_type=="blog" && slug.current =='${slug}']{
        title,titleImage,
          "currentSlug":slug.current,content
      }[0]`;

  const data = await client.fetch(query);
  return data;
};
const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const blog: IfullBlog = await getBlogData(params.slug);

  return (
    <>
      <div className="mx-5 mt-8">
        <h1>
          <span className="block text-xl  text-center text-primary font-bold tracking-wide uppercase">
            {`Abdullah's`} - Blog
          </span>
          <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-widest sm:text-4xl text-gray-800">
            {blog.title}
          </span>
        </h1>
        <div>
          <Image
            src={urlForImage(blog.titleImage)}
            alt="image"
            height={200}
            width={400}
            priority
            className="rounded-lg mt-8 w-full object-cover"
          />
        </div>
        <div className="mt-16 prose prose-blue prose-xl ">
          <PortableText   content={blog.content}></PortableText>
   
        </div>
      </div>
    </>
  );
};

export default BlogArticle;
