import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "CheckpointRide",
	description: "Ride hailing application that uses checkpoints",
	generator: "thebasilugo",
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
