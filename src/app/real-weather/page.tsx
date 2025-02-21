import styles from "../root.module.css";

export default function RealWeatherPage() {
  return (
    <div className={styles.page}>
      <h1>Real weather app</h1>
      <p>This app allows you to understand what the current weather readings are.</p>
      <p>The app works by reading weather information from your nearest weather station.</p>
      <p>As it is a progressive web app, you can view it on your mobile device</p>
      <p>It will act like a native app, you can save it to your home screen</p>
      <p>
        To simply run it, you can go to <a href="https://weather.shurms.com">Real Weather</a>
      </p>
    </div>
  );
}
