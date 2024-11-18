import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Link href="/dashboard">
        <p>Go To Dashboard →</p>
      </Link>
    </div>
  );
};

export default HomePage;
