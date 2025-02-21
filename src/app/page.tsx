import styles from "./root.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Shurms</h1>
      <p>Welcome to the website of the Shurmers</p>
      <p>This has been created by Mark Shurmer</p>
      <p>
        I have created a free app to show the actual weather
        <br />
        You can use location services or UK postcode to find the weather for you
        <br />
        The app is a progressive web app, which means it will run on your mobile like a native app.
        <br />
        <br />
        For more info, see <a href="/real-weather">the real weather app</a>
      </p>
    </div>
  );
}
