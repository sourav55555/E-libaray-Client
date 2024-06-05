
const AboutUs = () => {
    return (
        <div>
            <div className="mb-16 text-4xl my-16 font-semibold px-3 border-l-8 border-[#38598b] w-fit mx-auto">
                    <h2>Our Journey</h2>

                </div>
            <div className="flex items-center md:flex-row flex-col px-5 justify-center gap-10 max-w-[1300px] mx-auto mb-24">
                <div className="md:w-[50%]">
                    <img src="/public/about.jpg" className="md:h-[86vh] h-[50vh] mx-auto rounded-3xl object-cover" alt="" />
                </div>
                <div className="md:w-1/2">
                    <p>
                        <span className="text-xl font-semibold">Welcome</span> to E-Library, your premier destination for accessing a vast collection of digital books! At E-Library, we're passionate about providing readers with an immersive and convenient reading experience in the digital age. <br/> <br/>

                        Our mission is to connect book enthusiasts with their favorite authors, genres, and new literary discoveries through our user-friendly platform. Whether you're an avid reader, a student conducting research, or someone looking to explore the world of literature, E-Library is here to cater to your reading needs. <br /> <br/>

                        Browse through our extensive catalog of e-books spanning various categories, from classic literature to contemporary bestsellers, academic resources, and beyond. With our intuitive interface and personalized recommendations, finding your next literary adventure has never been easier. <br /> <br/>

                        Join our community of book lovers today and embark on a journey of endless reading possibilities with E-Library. Happy reading!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;