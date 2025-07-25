
const Video = (youtubeVideoUrl ) => {
    return (
        <section id="video" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 max-w-5xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Watch Our Presentation
            </h2>
            <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden">
                <iframe
                width="100%"
                height="100%"
                src={youtubeVideoUrl}
                title="Bic Rouge Research Project Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                ></iframe>
            </div>
            <p className="text-gray-600 mt-6 text-lg">
                Learn more about Bic Rouge, its development, and its impact in our full presentation video.
            </p>
            <p className="text-sm text-gray-500 mt-2">
                <span className="font-bold">Note:</span> Please replace. 
            </p>
            </div>
        </section>
    );
};

export default Video
    
