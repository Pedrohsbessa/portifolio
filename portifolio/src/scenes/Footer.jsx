import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className=" bg-red pt-10 clear-both absolute h-24 bottom-0">
      <div className="w-10/12 mx-auto h-24 ">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Your Name
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 Your. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
