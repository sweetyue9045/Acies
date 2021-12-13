export default function Title({ Title, Id }) {
    return (
        <div className="title" id={Id}>
            <div className="title_text">{Title}</div>
        </div>
    );
}