import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { blogPosts } from "@/app/dummy";

const BlogSection = () => {
  return (
    <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Latest from Our Blog</h2>
        <Link
          href="/blog"
          className="bg-rose-700 text-white text-sm px-4 py-1 rounded-full flex items-center"
        >
          View all <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
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
