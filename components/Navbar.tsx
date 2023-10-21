import Link from "next/link";
import Marquee from "react-fast-marquee";

const navLinkStyles = {
  display: "inline-block",
  padding: "0.5rem 1rem",
  backgroundColor: "#3490dc",
  color: "#fff",
  textDecoration: "none",
  transition: "background-color 0.3s, color 0.3s",
  borderRadius: "2px"
};



const navLinkHoverStyles = {
  backgroundColor: "rgba(52, 144, 220, 0.2)",
  color: "#000",
};

const Navbar = () => {
  return (
    <div>
      <div className="bg-white p-5 flex justify-items-center items-center">
        <div>
          <img
            src="data:image/png;base64,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" // Add the correct source for your image
            alt="IIITL"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <header>
          <Marquee>**NEWS Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eaque. NEWS**</Marquee>
        </header>
      </div>
      <div className="bg-white p-5 flex-center justify-between items-center bg-gray-200 w-70">
        <div className="flex gap-4 justify-center items-center text-center ">
          <Link href="/" className="nav-link">
            <p style={navLinkStyles}>Home</p>
          </Link>

          <Link href="/academics" className="nav-link">
            <p style={navLinkStyles}>Academics</p>
          </Link>

          <Link href="/admissions" className="nav-link">
            <p style={navLinkStyles}>Admissions</p>
          </Link>

          <Link href="/departments" className="nav-link">
            <p style={navLinkStyles}>Departments</p>
          </Link>

          <Link href="/campus-life" className="nav-link">
            <p style={navLinkStyles}>Campus-Life</p>
          </Link>

          <Link href="/downloads" className="nav-link">
            <p style={navLinkStyles}>Downloads</p>
          </Link>

          <Link href="/contact" className="nav-link">
            <p style={navLinkStyles}>Contact Us</p>
          </Link>


        </div>
      </div>
    </div>
  );
};

export default Navbar;
