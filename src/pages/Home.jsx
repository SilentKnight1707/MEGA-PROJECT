import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Button from './Button.jsx';
import Banner from '../assets/Images/banner.mp4';
import HighlightText from '../components/Core/HomePage/HighlightText';
import CodeBlocks from '../components/Core/HomePage/CodeBlocks';

const Home = () => {
  return (
    <div>
      <div className='flex items-center w-11/12 flex-col relative mx-auto justify-center text-white'>
        <Link to="/signup">
          <div className='mx-auto my-10 rounded-full bg-gray-700 text-white font-bold transition-transform duration-200 transform hover:scale-95 hover:shadow-sm w-fit shadow-2xl shadow-white'>
            <div className='flex flex-row items-center justify-center p-2'>
              <p className='mr-2 items-center'>Become an Instructor</p>
              <FaArrowRightLong />
            </div>
          </div>
        </Link>
        <div className='flex items-center flex-col'>
          <div className='text-white text-2xl font-bold'>
            Empower Your Future With <HighlightText>Coding Skill</HighlightText>
          </div>
          <div>
            <p className='text-white my-4 text-sm text-center'>
              "With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a <br /> wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors."
            </p>
          </div>                  
        </div>
      </div>
      <div className="flex flex-row items-center justify-center px-6 gap-10">
        <Button active={true} linkto={"/signup"}>
          Learn More
        </Button>
        <Button active={false} linkto={"/login"}>
          Book a Demo
        </Button>
      </div>

      <div className="relative flex justify-center items-center">
        <video
          className="shadow-[0_-10px_20px_rgba(255,255,255,0.6),_0_-20px_40px_rgba(59,130,246,0.4)] border-b-8 border-r-8 border-white w-[750px] m-12"
          loop
          autoPlay
          muted
        >
          <source src={Banner} type="video/mp4" />
        </video>
      </div>


      <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Start
                        <HighlightText text={"coding in seconds"}/>
                    </div>
                }
                subheading = {
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                }
                ctabtn1={
                    {
                        btnText: "Continue Lesson",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                codeColor={"text-yellow-25"}
                backgroudGradient={"grad2"}
            />
        </div>

    </div>
  );
};

export default Home;
