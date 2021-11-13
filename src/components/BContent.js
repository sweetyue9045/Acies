import './BContent.css';

import News from './content/B_News';
import Dev from './content/B_Dev';
import Data from './content/B_Data';


export default function BContent() {
    return (
        <div className="Board">
            <News />
            <Dev />
            <Data />
        </div>
    );
}