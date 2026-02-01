export default function Footer1() {
  return (
    <footer className="bg-white w-full dark:bg-black border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="text-center md:text-left mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              GitProfile
            </h3>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-zinc-800 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © Abhi Rajput. All rights reserved.
          </p>
          <a href="https://www.github.com/abhi-rajput-KRP" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Visit My GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
