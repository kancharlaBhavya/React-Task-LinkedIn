import Axios from 'axios';
import React, { useState } from 'react';

function PostData() {
    const url = "https://64183a0275be53f451d96e0b.mockapi.io/getName/NewPostData";
    const [postdata, setPostdata] = useState({
        Name: "",
        Address: ""
    });

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
          Name: postdata.Name,
          Address: postdata.Address
        })
          .then(res => {
            console.log(res.data);
            setPostdata({
              Name: "",
              Address: ""
            });
          })
          .catch(error => {
            console.error(error);
          });
      }
      
    function handle(e) {
        const newData = { ...postdata };
        newData[e.target.id] = e.target.value;
        setPostdata(newData);
    }

    return (
        <div>
            PostData
            <form onSubmit={(e) => submit(e)}>
                <input
                    placeholder="name"
                    onChange={(e) => handle(e)}
                    id="Name"
                    value={postdata.Name}
                    type="text"
                />
                <input
                    placeholder="Address"
                    onChange={(e) => handle(e)}
                    id="Address"
                    value={postdata.Address}
                    type="date"
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default PostData;
