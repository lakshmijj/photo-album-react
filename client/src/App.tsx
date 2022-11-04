import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <>
    <div className="header flex flex-row flex-wrap pb-2.5 font-default font-default">
          <div className="text-3xl text-default">_Photo.Album </div>
          <div className="pl-2.5 mt-2.5 text-base text-default">Version 5.0 Vanilla JS with FlexBox/Sass</div>    
    </div>

    <div className="flex flex-col flex-nowrap pb-5">
      <div className="flex flex-row flex-wrap pt-2.5">
          <button className="border-none py-1.5 px-2 text-sm align-center text-xs decoration-0 rounded-sm mr-[3px] bg-[#ccc] text-[#666]" id="btnPrevious">Previous</button>
          <button className="border-none py-1.5 px-2 text-sm align-center text-xs decoration-0 rounded-sm mr-[3px] bg-[#428bca] text-[#fff]" id="btnNext">Next</button>
          <button className="border-none py-1.5 px-2 text-sm align-center text-xs decoration-0 rounded-sm mr-[3px] bg-[#fb3] text-[#fff]" id="btnJump">Jump</button>
          <button className="border-none py-1.5 px-2 text-sm align-center text-xs decoration-0 rounded-sm mr-[3px] bg-[#fb3] text-[#fff]" id="btnComment">Comment</button>
          <div className="ml-2.5 self-center text-xs" id="paginator">Photo 1 of 11</div>
      </div>   

      
      <div className="tileview__gallery" id="tileView">
        
      </div>                 


      <div className="mt-5" id="commentBox">
          <div className="commentbox__form__label">Author:</div>
          <div>
              <input id="inputAuthor" className="commentbox__form__input" maxLength={100} type="text" />
          </div>
          <div className="commentbox__form__label">Comment (200 Characters):</div>
          <div>
              <textarea id="inputComments" className="commentbox__form__input commentbox__form__input--textarea" maxLength={200}></textarea>
          </div>
          <div>
              <button id="btnOk" className="commentbox__form__button">Ok</button>
              <button id="btnCancel" className="commentbox__form__button">Cancel</button>
          </div>
      </div>
    
      <div id="content" className="content">
          <img alt="Pic" className="content__img" id="imgPic" src="" loading="eager" />
          <div className="content__heading" id="contentHeading"></div>
          <div className="content__subheading" id="contentSubHeading"></div>
          <div className="content__comments" id="comments">
              
          </div>
      </div>    

      <div id="noData" className="">
          There are no photos to display at this time.
      </div>        
    </div>
    </>
  );
}

export default App;
