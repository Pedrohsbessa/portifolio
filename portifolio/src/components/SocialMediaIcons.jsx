import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinFilled style={{ fontSize: "25px" }} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <GithubFilled style={{ fontSize: "25px" }} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramFilled style={{ fontSize: "25px" }} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
