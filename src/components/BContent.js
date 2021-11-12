import './BContent.css';

import News from './content/B_News';
import Dev from './content/B_Dev';


export default function BContent() {
    return (
        <div className="Board">
            <News />
            <Dev />
        </div>
    );
}