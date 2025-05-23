import Image from 'next/image';
import Link from 'next/link';

const BlogsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Explore my Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog 1 */}
          <div className="blog-card bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Image
              src="/assets/images/E-book.JPG"
              alt="Exploring the Future of Technology"
              width={600}
              height={400}
              className="object-contain w-full max-h-48"
              priority
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Exploring the Future of Technology</h3>
              <p className="text-gray-600 mb-4">Dive into the latest trends shaping the tech world, from AI innovations to sustainable solutions.</p>
              <Link href="/blogs/future-of-technology" className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </Link>
            </div>
          </div>
          {/* Blog 2 */}
          <div className="blog-card bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Image
              src="/assets/images/E-book.JPG"
              alt="The Art of Digital Storytelling"
              width={600}
              height={400}
              className="object-contain w-full max-h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">The Art of Digital Storytelling</h3>
              <p className="text-gray-600 mb-4">Learn how to craft compelling narratives in the digital age with tips from industry experts.</p>
              <Link href="/blogs/digital-storytelling" className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/blogs"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;