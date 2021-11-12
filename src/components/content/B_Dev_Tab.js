export default function Dev_Tab({ dev, indexPlus = () => console.error('You passed no action to the component'), isActive = false }) {
    return (
        <li>
            <a className={isActive ? 'tab_title choose' : 'tab_title'} onClick={indexPlus}>
                {dev.name}
            </a>
        </li>
    );
}