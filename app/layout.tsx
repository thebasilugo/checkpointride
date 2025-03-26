import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "thebasilugo App",
	description: "Created with thebasilugo",
	generator: "thebasilugo.dev",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
