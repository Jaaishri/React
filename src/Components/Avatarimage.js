import React from "react";

const Avatarimage = props => {
  return (
    <div className="avatarstyle ma4 dib pa4">
      {
        <img
          src="https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe-pMfjs8.jpg"
          alt="Avatar"
        />
      }
      <div className="Avatardetails">
        <h>{props.name}</h>
        <p>{props.category}</p>
      </div>
    </div>
  );
};

export default Avatarimage;
