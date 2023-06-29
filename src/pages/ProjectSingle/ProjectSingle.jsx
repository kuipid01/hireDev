import React from "react";
import { topDevs } from "../../Constants/constants";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectSingle = () => {
  return (
    <div>
      <div className="px-[30px] flex md:flex-row flex-col">
        <div className="left w-full md:w-2/3 flex flex-col">
          <h1 className="md:text-[30px] text-[15px] leading-[30px] md:leading-[50px] text-gray-700 font-[500] mt-5 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            possimus dicta iure quos esse commodi itaque molestias amet
            accusantium ratione?
          </h1>
          <div className="flex items-center mb-4 gap-1">
            <img
              src="/assets/img2.jpg"
              className="w-[35px] h-[35px] rounded-full  object-cover mr-3"
              alt=""
            />
            <small className="text-[15px] text-gry-700">John Cook</small>
          </div>
          <div>
            <img
              src="/assets/img7.jpg"
              className="w-full h-[350px] object-cover mb-3"
              alt=""
            />
          </div>
          <p className="leadeing-[30px] text-gray-700 text-eft">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            consequuntur quam reprehenderit itaque ducimus ipsum soluta
            aspernatur, neque explicabo iusto mollitia tenetur voluptatem?
            Corrupti aliquam, dolores inventore perferendis, hic illo facere
            tenetur dolore, dicta ipsam quibusdam expedita enim molestias
            consequatur laborum accusamus aspernatur consequuntur dolor
            repellendus cumque voluptates impedit provident unde! Fugit veniam
            officia repellendus autem veritatis quibusdam animi rem totam ut,
            nesciunt quis ex, consectetur commodi dignissimos, sint aut
            voluptates? Nisi minus quas aut mollitia consequuntur, id placeat
            necessitatibus natus pariatur saepe ullam illo reprehenderit quod
            dignissimos odit! Veritatis tempore laborum blanditiis est commodi.
            Enim accusamus mollitia iste ullam. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Qui rem dignissimos rerum ad repellat,
            nemo porro culpa deserunt vitae iste dolore ab delectus officia
            accusantium quidem ipsa. Quos expedita saepe natus culpa illum totam
            dolorem ipsa dolores numquam ea commodi temporibus deleniti nisi
            maiores magni, quidem laboriosam nobis repellendus eaque ratione
            doloremque minima. Excepturi ad dolore sequi cum corporis, at
            deleniti voluptatum facilis placeat modi ipsam, atque dolores eius
            maiores doloremque quibusdam officiis nobis numquam. Vero illo
            cumque dolores, iste odit ipsum eius molestiae ullam amet sint,
            magnam aspernatur cupiditate commodi adipisci doloribus. Harum
            ipsam, natus voluptatum id quidem obcaecati.
          </p>
          <button className="w-full bg-purple-700 text-white h-fit py-3 text-[20px] font-[200] my-6">Hire Steve Now</button>
          <div className="mt-5">
            <h1 className="text-[14px] font-[400] text-gray-400 mb-3">
              Related:
            </h1>
            <div className=" flex justify-between gap-3 flex-row flex-wrap w-full ">
              {topDevs.slice(0, 4).map((related) => (
                <div className="w-[48%] md:w-[23%] cursor-pointer shadow p-1 shadow-purple-300 rounded h-[250px]">
                    <Link to={'/project/kuipid/m'}>
                 
                  <img
                    src={related.userImage}
                    className="h-2/3 w-full object-cover"
                    alt=""
                  />
                  <div className="h-1/3  mt-1">
                    <p className="text-[15px] font-[300]">ScrollLoader</p>
                    <div className="flex items-center mb-1 gap-1">
                      <img
                        src="/assets/img2.jpg"
                        className="w-[20px] h-[20px] rounded-full  object-cover mr-3"
                        alt=""
                      />
                      <small className="text-[15px] text-gry-700">
                        John Cook
                      </small>
                    </div>
                    <div className="flex gap-1">
                      <FaStar className=" text-yellow-400 text-[15px]" />{" "}
                      <FaStar className=" text-yellow-400 text-[15px]" />
                      <FaStar className=" text-yellow-400 text-[15px]" />
                      <FaStar className=" text-yellow-400 text-[15px]" />
                    </div>
                  
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right flex h-screen mt-6 sticky top-[15vh] items-center flex-col w-full md:w-1/3">
            <h1 className="text-center mb-4">Orders:</h1>
            <div className="w-[80%] h-[200px] p-2 bg-gray-100 shadow shadow-purple-300">

            </div>
        </div>
       
      </div>
      <div>reviews</div>
    </div>
  );
};

export default ProjectSingle;
