import React, { useState } from 'react';

function Middle() {
  const [content, setContent] = useState([
    { Name: "Jyoti Arora", Date: "Oct 31 2023", Time: "12:26pm", Image: "jyoti.jpg" },
    { Name: "Satnam Singh", Date: "Oct 21 2023", Time: "10:26pm", Image: "satnam.jpg" },
    { Name: "vicky Singh", Date: "aug 18 2023", Time: "01:26pm", Image: "vicky.jpg" },
    { Name: "Kirit Kaur", Date: "aug 11 2023", Time: "12:26pm", Image: "kirti.jpg" }
  ]);

  return (
    <div className="w-6/12 h-[91vh] overflow-y-scroll bg-gray-300 flex-column items-center justify-center">
      <div className="pt-4 mt-1 bg-gray-100 h-[120px] w-full rounded-md flex-column items-center justify-center">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center">
            <img className="h-12 w-12 rounded-full" src="profile.jpg" alt="User Profile" />
          </div>
          <div>
            <div className="ml-4 mb-3 flex">
              <input
                type="search"
                className="w-[500px] h-[40px] bg-gray-200 relative m-0 block min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-black dark:focus:border-primary"
                id="exampleSearch"
                placeholder="What's on your mind, Simar?"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-evenly">
          <div className="flex mt-4">
            <div className="flex ml-10 mr-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06" />
              </svg><span>Live Video</span>
            </div>
            <div className="flex ml-10 mr-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 01 1.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
              </svg>
              <span>Photo/Video</span>
            </div>
            <div className="flex ml-10 mr-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605.189.866-.108.215-.395.634.936.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605.189.866-.108.215-.395.634.936.634.54 0 .828-.419.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06a5.25 5.25 0 007.424 0z" clipRule="evenodd" />
              </svg>
              <span>Feeling/activity</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 w-full bg-gray-100 rounded-md p-4">
        {content.map((item, index) => (
          <div key={index} className="content-item">
            <div className="flex">
              <div className="flex">
                <img className="h-12 w-12 rounded-full" src={item.Image} alt={item.Name} />
              </div>
              <div className="flex-col">
                <div className="flex ml-4">
                  <strong>{item.Name}</strong>
                </div>
                <div className="flex ml-4">
                  {item.Date} at {item.Time}
                </div>
              </div>
            </div>
            <div className="w-full h-full mt-2">
              <img src={item.Image} alt={item.Name} />
            </div>
            <div className="flex mt-4 justify-between">
              <div className="flex">
                <div>
                  <img className="w-8 h-8" src="like.svg" alt="Like" />
                </div>
                <div>
                  <img className="w-8 h-8" src="love.svg" alt="Love" />
                </div>
                <div>
                  121
                </div>
              </div>
              <div>
                2 Comments 4 Shares
              </div>
            </div>
            <div className="flex justify-evenly mt-4 text-xl">
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg><span>&nbsp;Like</span>
            </div>
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg><span>&nbsp;Comment</span>
            </div>
            <div className="flex pb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <         path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg><span>&nbsp;Share</span>
            </div>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Middle;
