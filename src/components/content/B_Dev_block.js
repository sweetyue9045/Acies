import Devs from "./B_Devs";
import Dev from "../../assets/json/dev.json"

export default function Dev_block({ index, isActive = false }) {
    const Devss = new Array;

    if (Dev[index].name == "ALL") {
        const Devs = Dev.map(
            (devs) => devs.contents
        )
        console.log(Devs)
        for (let indexs = 0; indexs < Devs.length; indexs++) {
            Devs[indexs].map(
                (devs) => Devss.push(devs)
            )
        }
    } else {
        Dev[index].contents.map(
            (devs) => Devss.push(devs)
        )
    }

    return (
        <div className={isActive ? 'dev_box showbox' : 'dev_box'}>
            {Devss.map(devs => (
                <Devs key={devs.id} devs={devs} />
            ))}
        </div>
    );
}