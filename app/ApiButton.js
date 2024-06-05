"use client";
export default function MyButton() {
  let country = null;
  const callAPI = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/United Kingdom?fullText=true`
      );
      const data = await res.json();

      country = data;
      console.log(country);
    } catch (err) {
      console.log(err);
    }
  };
  if (country) {
    return <p>{country.capital}</p>;
  }

  return <button onClick={callAPI}>Play</button>;
}
