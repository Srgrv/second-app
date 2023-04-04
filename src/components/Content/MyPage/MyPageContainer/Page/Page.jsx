import React from "react";
import classes from "./Page.module.css";

let Page = (props) => {
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

  let changeInput = (event) => {
    props.changeInput(event.target.value);
  };

  let add = () => {
    props.add();
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.avatar}>
        <img
          src={
            props.user.photos.large
              ? props.user.photos.large
              : "../../../../../../logo192.png"
          }
          alt=""
        />
      </div>
      <div className={classes.contacts}>
        <h3>Обо мне</h3>
        <div>Я: {props.user.aboutMe}</div>
        <div>Facebook: {props.user.contacts.facebook}</div>
        <div>Github: {props.user.contacts.github}</div>
        <div>Instagram: {props.user.contacts.instagram}</div>
        <div>MainLink: {props.user.contacts.mainLink}</div>
        <div>Twitter: {props.user.contacts.twitter}</div>
        <div>VK: {props.user.contacts.vk}</div>
        <div>FullName: {props.user.fullName}</div>
        <div>Website: {props.user.contacts.website}</div>

        <div>
          LookingForAJobDescription: {props.user.lookingForAJobDescription}
        </div>
      </div>
      <div className={classes.newPost}>
        <input value={props.input} onChange={changeInput} />
        <button onClick={add}>add</button>
      </div>
      <div className={classes.post}>{post}</div>
    </div>
  );
};

export default Page;
