import Title from "./B_Title"
import Photo_01 from "../../assets/im/photo_01.png"
import Photo_02 from "../../assets/im/photo_02.png"
import Photo_03 from "../../assets/im/photo_03.png"
import Photo_04 from "../../assets/im/photo_04.png"
import Photo_05 from "../../assets/im/photo_05.png"
import Photo_06 from "../../assets/im/photo_06.svg"

export default function Group() {
    return (
        <>
        <div className="team">
            <Title Title_top='遊戲開發團隊' Title_bottom='GAME DEVELOPER' ls='16px' />

            <div className="photo bgphoto">
                <div className="photo_img">
                    <img src={Photo_01} alt='photo01' />
                    <p>鄭仴筑</p>
                    <p>程式</p>
                </div>
                <div className="photo_img">
                    <img src={Photo_02} alt='photo02' />
                    <p>洪欣儀</p>
                    <p>程式、企劃</p>
                </div>
                <div className="photo_img">
                    <img src={Photo_03} alt='photo03' />
                    <p>林于楨</p>
                    <p>美術</p>
                </div>
                <div className="photo_img">
                    <img src={Photo_04} alt='photo04' />
                    <p>王怡文</p>
                    <p>美術、動畫</p>
                </div>
            </div>
        </div>
         <div className="team">
         <Title Title_top='網站開發團隊' Title_bottom='WEB DEVELOPER' ls='18px' />

         <div className="photo">
             <div className="photo_img">
                 <img src={Photo_05} alt='photo05' />
                 <p>鄭仴筑</p>
                 <p>程式</p>
             </div>
             <div className="photo_img">
                 <img src={Photo_02} alt='photo02' />
                 <p>洪欣儀</p>
                 <p>程式、企劃</p>
             </div>
             <div className="photo_img">
                 <img src={Photo_03} alt='photo03' />
                 <p>林于楨</p>
                 <p>美術</p>
             </div>
             <div className="photo_img">
                 <img src={Photo_06} alt='photo06' />
             </div>
         </div>
     </div>
     </>
    );
}