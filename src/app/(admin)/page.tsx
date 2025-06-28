import BackgroundPage from "@/components/background-page";

export default function Home() {
  return (
    <BackgroundPage imageSrc="/home.jpg" imageAlt="home">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </BackgroundPage>
  );
}
