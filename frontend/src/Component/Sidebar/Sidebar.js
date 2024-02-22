
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import   "../Sidebar/Sidebar.css"
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { TbMessageDots } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { CgDetailsMore } from "react-icons/cg";
import instalogo from "../Pics/Instagram_logo.svg.png"
import { FaInstagram } from "react-icons/fa";
const Sidebar = () => {
  return (
    <>
    
    <aside class="sidebar">
      <header class="sidebar-header">
        <img  src={instalogo} class="logo-img"/>
        <i class="logo-icon ">
       < FaInstagram/>
        </i>
      </header>
      <nav>

        <button>
          <span>
            <i ><MdHomeFilled/></i>
            <span>Home</span>
          </span>
        </button>

        <button>
          <span>
            <i ><IoSearch/></i>
            <span>Search</span>
          </span>
        </button>

        <button>
          <span>
            <i ><BiMoviePlay/></i>
            <span >Reels</span>
          </span>
        </button>

        <button>
          <span>
            <i >
           < TbMessageDots/>
            </i>
            <span>Messages</span>
          </span>
        </button>

        <button>
          <span>
            <i >
           <FaRegHeart/>
            </i>
            <span>Notifications</span>
          </span>
        </button>

        <button>
          <span>
            <i ><FaRegSquarePlus/> </i>
            <span>Create</span>
          </span>
        </button>

        <button>
          <span>
            {/* <img src="Profile.svg" /> */}
            <span>Profile</span>
          </span>
        </button>

        <button>
          <span>
            <i > <CgDetailsMore/></i>
            <span>More</span>
          </span>
        </button>
        
      </nav>
    </aside>
    
    
    </>
  )
}

export default Sidebar
