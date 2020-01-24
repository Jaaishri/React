import React from "react";
import "./Avatar.css";
import "tachyons";
import Avatarimage from "./Avatarimage";

const Avatar = props => {
  const avatarlistarray = [
    {
      id: 1,
      name: "Nike",
      category: "shoes"
    },
    {
      id: 2,
      name: "Nike",
      category: "shoes"
    },
    {
      id: 3,
      name: "Nike",
      category: "shoes"
    },
    {
      id: 4,
      name: "Nike",
      category: "shoes"
    }
  ];
  const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
    return (
      <Avatarimage
        id={avatarlistarray[i].name}
        name={avatarlistarray[i].name}
        category={avatarlistarray[i].category}
      />
    );
  });
  return { arrayavatarcard };
};

export default Avatar;
