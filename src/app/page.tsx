import MyBalance from "./components/MyBalance";
import Overview from "./components/Overview";

export default function HomePage() {
  return (
    <>
      <main className="bg-cream flex min-h-dvh items-center justify-center">
        <div className="flex w-80 flex-col gap-4">
          <MyBalance />
          <Overview />
        </div>
      </main>
    </>
  );
}
