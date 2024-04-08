import "../globals.css";

export const metadata = {
  title: "AssistivTeq Community",
  description: "...Breaking Barriers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section>{children}</section>
      </body>
    </html>
  );
}
