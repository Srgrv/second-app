import React from "react";
import classes from "./Page.module.css";

let Page = (props) => {
  console.log(props);
  let post = props.myPost.map((item, index) => {
    return (
      <div key={index} className={classes.postWrapper}>
        <div className={classes.onePost}>
          <img src="../../../../../../logo192.png" alt="picture" />
        </div>

        <div className={classes.twoPost}>{item}</div>
      </div>
    );
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.avatar}>
        <img src={props.data.photos.large} alt="picture" />
      </div>
      <div className={classes.contacts}>
        <h3>Обо мне</h3>
        <div>Я: {props.data.aboutMe}</div>
        <div>Facebook: {props.data.contacts.facebook}</div>
        <div>Github: {props.data.contacts.github}</div>
        <div>Instagram: {props.data.contacts.instagram}</div>
        <div>MainLink: {props.data.contacts.mainLink}</div>
        <div>Twitter: {props.data.contacts.twitter}</div>
        <div>VK: {props.data.contacts.vk}</div>
        <div>FullName: {props.data.fullName}</div>
        <div>Website: {props.data.contacts.website}</div>

        <div>
          LookingForAJobDescription: {props.data.lookingForAJobDescription}
        </div>
      </div>
      <div className={classes.newPost}>
        <input />
        <button>add</button>
      </div>
      <div className={classes.post}>{post}</div>
    </div>
  );
};

export default Page;
