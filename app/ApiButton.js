"use client";
export default function MyButton() {
  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/United Kingdom?fullText=true`
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return <button onClick={callAPI}>Play</button>;
}
