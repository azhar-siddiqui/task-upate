import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CreateAds = () => {
  const [value, setValue] = useState(false);
  const [to, setTo] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAccrValue = (e) => {
    const { value, checked } = e.target;
    const checkIcon = e.currentTarget.parentNode.querySelector(
      ".material-symbols-outlined"
    );

    if (checked) {
      //   setAccr((pre) => [...pre, value]);
      checkIcon.innerText = "check_box";
      setValue(true);
      setTo(value);
    } else {
      checkIcon.innerText = "check_box_outline_blank";
      setValue(false);
      setTo("");
    }
  };

  const next = () => {
    navigate(`/${to}`);
  };

  return (
    <div className="m-5 border-2 border-black rounded-lg  p-5">
      <div className="mb-5">Create Ads</div>

      <div className="w-full h-full flex items-center justify-evenly ">
        <div className="mt-4 md:mt-0 border h-[300px] w-[300px] py-5 pl-0 bg-slate-100">
          <input
            type="checkbox"
            name="accreditationValue"
            id="TextAd"
            value="text-ad"
            className="cursor-pointer"
            hidden
            onChange={handleAccrValue}
          />
          <label
            htmlFor="TextAd"
            className="ml-3 font-semibold text-primaryLightGray mr-10 flex items-center"
          >
            <span className="material-symbols-outlined ">
              check_box_outline_blank
            </span>
          </label>
          <img
            src="https://media.nngroup.com/media/articles/opengraph_images/Slide9will-plain-text-ads-continue-to-rule.png"
            alt=""
            className="w-full mx-auto h-[190px] mt-1"
          />
          <div className="text-center w-full">
            Create <br /> <b> Text Ad</b>
          </div>
        </div>

        <div className="mt-4 md:mt-0 border h-[300px] w-[300px] py-5 pl-0 bg-slate-100">
          <input
            type="checkbox"
            name="accreditationValue"
            id="media-ad"
            value="media-ad"
            className="cursor-pointer"
            hidden
            onChange={handleAccrValue}
          />
          <label
            htmlFor="media-ad"
            className="ml-3 font-semibold text-primaryLightGray mr-10 flex items-center"
          >
            <span className="material-symbols-outlined ">
              check_box_outline_blank
            </span>
          </label>
          <img
            src="https://thumbs.dreamstime.com/b/mobile-user-clicking-advertising-social-media-platform-digital-marketing-promotion-strategy-to-increase-online-sales-flat-130203599.jpg"
            alt=""
            className="w-full mx-auto h-[190px] mt-1"
          />
          <div className="text-center w-full">
            Create <br /> <b> Media Ad</b>
          </div>
        </div>
      </div>

      {value ? (
        <Link
          // to={`/${to}`}
          to={{
            pathname: `/${to}`,
            state: {
              location: location.pathname,
            },
          }}
          className=""
          onClick={next}
          state={location.pathname}
        >
          Next
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default CreateAds;
