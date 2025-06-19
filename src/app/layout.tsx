import "@/styles/style.scss";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ReactQueryProvider from "@/components/ReactQueryProvider";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "오느래 노래",
    description:
        "오늘의 노래, 오느래 노래, 하루에 두곡, 오늘의 노래 추천, 오늘의 노래 추천 사이트, 감성 노래, 노래, 아티스트 추천, 플레이리스트 추천",
    authors: [{ name: "이재호", url: "https://www.todayssong.co.kr" }],
    creator: "이재호",
    publisher: "이재호",
    openGraph: {
        type: "website",
        siteName: "오느래 노래",
        locale: "ko_KR",
        title: "오느래 노래",
        description:
            "오늘의 노래, 오느래 노래, 하루에 두곡, 오늘의 노래 추천, 오늘의 노래 추천 사이트, 감성 노래, 노래, 아티스트 추천, 플레이리스트 추천",
        url: "https://www.todayssong.co.kr",
        images: [
            {
                url: "/icons/favicon.png",
                width: 1200,
                height: 630,
                alt: "오느래 노래",
            },
        ],
    },
    icons: {
        icon: "/icons/favicon.png",
        shortcut: "/icons/favicon.png",
        apple: "/icons/favicon.png",
    },
    themeColor: "#ffffff",
    twitter: {
        card: "summary_large_image",
        title: "오느래 노래",
        description: "오늘의 감성 노래를 하루 두 곡씩 추천해드립니다.",
        images: ["/icons/favicon.png"],
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
