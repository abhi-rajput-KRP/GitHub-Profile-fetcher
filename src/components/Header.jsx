export default function NavHorizontal() {
    return (
        <div className="p-8 w-full bg-gradient-to-br from-blue-10 to-purple-20 dark:bg-black">
            <nav className="bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-lg shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center flex-shrink-0">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                    GitProfile
                                </h2>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
