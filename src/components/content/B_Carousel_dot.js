export default function B_Carousel_dot({ news, indexPlus = () => console.error('You passed no action to the component'), isActive = false }) {
    return (
        <div className={isActive ? 'carousel_dot choose' : 'carousel_dot'} onClick={indexPlus}>

        </div>
    );
}