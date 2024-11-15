import MyBalance from "./components/MyBalance";

export default function HomePage() {
  return (
    <>
      <main className="flex min-h-dvh items-center justify-center">
        <div className="w-80">
          <MyBalance />
        </div>
      </main>
    </>
  );
}
