import Mid from "./components/mid";
import SideBar from "./components/sidebar";
import SideContent from "./components/sidecontent";

export default function Beranda () {
    return (
        <div className="flex justify-between">
            <SideBar />
            <Mid />
            <SideContent />
        </div>
    )
}