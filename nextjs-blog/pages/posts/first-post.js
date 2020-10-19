import Link from "next/link";
import Head from "next/Head";

export default function FirstPost() {
  return (
    <>
    <Head>
      <title>blog2</title>
    </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <button>Back to home</button>
        </Link>
      </h2>
    </>
  );
}
