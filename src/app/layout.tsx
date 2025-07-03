import "@/styles/style.scss";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ReactQueryProvider from "@/components/ReactQueryProvider";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "오느래 노래",
    description:
        "매일 아침 저녁으로 감성적인 두 곡을 추천해드려요.",
    authors: [{ name: "이재호", url: "https://www.todayssong.co.kr" }],
    creator: "이재호",
    publisher: "이재호",
    openGraph: {
        type: "website",
        siteName: "오느래 노래",
        locale: "ko_KR",
        title: "오느래 노래",
        description:
            "매일 아침 저녁으로 감성적인 두 곡을 추천해드려요.",
        url: "https://www.todayssong.co.kr",
        images: [
            {
                url: "/images/bg.png",
                width: 1200,
                height: 630,
                alt: "오느래 노래",
            },
        ],
    },
    icons: {
        icon: "/icons/favicon.ico",
        shortcut: "/icons/favicon.ico",
        apple: "/icons/favicon.ico",
    },
    themeColor: "#ffffff",
    twitter: {
        card: "summary_large_image",
        title: "오느래 노래",
        description: "오늘의 감성 노래를 하루 두 곡씩 추천해드립니다.",
        images: ["/images/bg.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ko">
            <body>
                <ReactQueryProvider>
                    <Header />
                    {children}
                    <Footer />
                </ReactQueryProvider>
            </body>
        </html>
    );
}
