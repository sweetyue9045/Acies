export default function Title({Title_top,Title_bottom,Id}) {
    return (
        <div className="title" id={Id}>
            <div className="title_top">{Title_top}</div>
            <div className="title_bottom">{Title_bottom}</div>
        </div>
    );
}