import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { blogPosts } from "@/app/dummy";
import ViewAllButton from "@/shared/viewbtn";

const BlogSection = () => {
  return (
    <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Latest from Our Blog</h2>
        <ViewAllButton/>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-rose-600 hover:underline text-sm mt-4 inline-block"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default BlogSection;
