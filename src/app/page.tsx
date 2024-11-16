import MyBalance from "./components/MyBalance";
import Overview from "./components/Overview";

export default function HomePage() {
  return (
    <>
      <main className="flex min-h-dvh items-center justify-center bg-cream">
        <div className="w-90 flex flex-col gap-4">
          <MyBalance />
          <Overview />
        </div>
      </main>
    </>
  );
}
