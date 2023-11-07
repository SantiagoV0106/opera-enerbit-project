import { Calendar, NavBar } from "../../ui/components";
import { Header, Rank, Tasks, Training } from "../components";

export function HomePage() {
    return (
        <>
            <div className="header-deco"></div>
            <img id='background-img' src="/BG line 2.svg" alt="background-img" />
            <Header />
            <Rank />
            <Calendar />
            <section className="data-section">
            <Tasks />
            <Training/>
            </section>
            <NavBar/>
        </>
    )
}