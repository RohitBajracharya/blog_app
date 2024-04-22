import React from "react";
import Slider3 from "../../assets/slider3.jpg";
import BlogContainer from "../../components/BlogContainer/BlogContainer";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  const blogs = [
    {
      id: 1,
      image: Slider3,
      title: "Sample Blog 1",
      description: "This is the description of Sample Blog 1",
      date: "April 20, 2024",
      time: "10:00 AM",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Sample Blog 2",
      description: "This is the description of Sample Blog 2",
      date: "April 21, 2024",
      time: "11:30 AM",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Sample Blog 2",
      description: "This is the description of Sample Blog 2",
      date: "April 21, 2024",
      time: "11:30 AM",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Sample Blog 2",
      description: "This is the description of Sample Blog 2",
      date: "April 21, 2024",
      time: "11:30 AM",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      title: "Sample Blog 2",
      description: "This is the description of Sample Blog 2",
      date: "April 21, 2024",
      time: "11:30 AM",
    },
  ];

  return (
    <div className="pt-20 px-9 bg-slate-200 pb-8 min-h-screen">
      <div>
        {/* Slider */}
        <Slider />
      </div>
      <div className=" mt-6 min-h-screen">
        <div>
          <h1 className="lg:text-3xl font-bold uppercase">All Blogs</h1>
        </div>
        {/* blog container */}
        <BlogContainer blogs={blogs} />
      </div>
    </div>
  );
};

export default Home;
