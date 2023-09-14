import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-10 absolute top-0 p-5">
      <Link className="font-normal text-xl mx-3" href={"/"}>
        Home
      </Link>
      <Link className="font-normal text-xl mx-3" href={"/devhours"}>
        Dev Hours
      </Link>
    </div>
  );
};

export default Header;
