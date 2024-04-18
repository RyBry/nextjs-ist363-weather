import Header from "../components/Header.js";

import "../sass/global.scss";

export const metadata = {
  title: "IST 363 Weather App",
  description: "A project for practicing API weather data calls with React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
