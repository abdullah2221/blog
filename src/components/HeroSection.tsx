import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { IsimpleBlogCart } from "../../sanity/lib/interface";
import { Card, CardContent } from "./ui/card";
import { urlForImage } from "../../sanity/lib/image";
import { Button } from "./ui/button";
import Link from "next/link";

const fetchData = async () => {
  // 1. Fetch data from the API
  const query = `*[_type == 'blog']| order(_createdAt desc){
      title,smallDescription,
        "currentSlug":slug.current,
        titleImage
    }`;
  const data = await client.fetch(query);
  return data;
};

const HeroSection = async () => {
  const data: IsimpleBlogCart[] = await fetchData();
  
  return (
    <div className="mx-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 mt-5 gap-y-5">
        {data.map((item, index) => {
          return (
            <>
              <Card key={index}>
                <Image
                  src={urlForImage(item.titleImage)}
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-t-lg h-[200px] sm:w-full md:w-full object-cover"
                />
                <CardContent className="mt-5 ">
                  <h3 className="text-lg line-clamp-2">{item.title}</h3>
                  <p className="text-base line-clamp-3 text-gray-500 dark:text-gray-300 mt-3">
                    {item.smallDescription}
                  </p>
                  <Button asChild className="w-full mt-7 text-md tracking-wide dark:text-gray-200 font-bold">
                    <Link href={`/blog/${item.currentSlug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
