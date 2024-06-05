import ApiButton from "./ApiButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Guess the Country</h1>
      <p>Welcome to guess the country</p>
      <ApiButton />
    </main>
  );
}
