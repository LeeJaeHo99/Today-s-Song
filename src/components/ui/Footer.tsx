import Link from "next/link";

export default function Footer() {
    return (
        <footer className="blur-box">
            <div className="inner">
                <h2>🅣🅞🅓🅐🅨🅢🅢🅞🅝🅖</h2>
                <div>
                    <p>문의하기 : ljhdlwogh0104@gmail.com</p>
                    <ul>
                        <li>
                            <Link href={"/notice"}>공지사항</Link>
                        </li>
                        <li>
                            <Link href={"/everydaySong"}>매일노래</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
