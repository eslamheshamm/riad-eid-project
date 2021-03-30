import React from "react";
import { Link, navigate } from "gatsby";
import styles from "./CTALink.module.css";
import { cn } from "../lib/helpers";

const doNavigate = target => {
  if (!target || !target.length) {
    return;
  }
  const internal = /^\/(?!\/)/.test(target);
  if (internal) {
    navigate(target);
  } else {
    window.location = target;
  }
};

const CTALink = props => {
  let link = props.route || props.link || "#";
  if (
    props.landingPageRoute &&
    props.landingPageRoute.slug &&
    props.landingPageRoute.slug.current
  ) {
    link = props.landingPageRoute.slug.current;
  }

  if (props.kind === "button") {
    return (
      <button
        id="navAction"
        onClick={() => doNavigate(link)}
        className={`${props.buttonActionClass}` || ""}
      >
        {props.title}
      </button>
    );
  }

  if (props.kind === "whatsapp") {
    return (
      <button
        id="navAction"
        onClick={() => doNavigate(link)}
        className={cn(styles.whatsapp, "py-4 px-3  sm:py-6 sm:px-8")}
      >
        <i className="ml-4">
          <Whatsapp />
        </i>
        <span> {props.title}</span>
      </button>
    );
  }

  // External
  if (props.link) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.title}
      </a>
    );
  }

  return (
    <Link className="mr-3" to={link}>
      {props.title}
    </Link>
  );
};
function Whatsapp(props) {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="black" {...props}>
      <path
        d="M6.886 5.17c.183.005.386.015.579.443.128.285.343.81.519 1.238.136.333.249.607.277.663.064.128.104.275.02.448l-.028.058c-.068.14-.116.24-.23.37a8.987 8.987 0 00-.143.17c-.085.104-.17.206-.242.278-.129.128-.262.266-.114.522.148.256.668 1.098 1.435 1.777a6.635 6.635 0 001.903 1.2c.07.03.127.055.17.076.257.128.41.108.558-.064.149-.173.643-.749.816-1.005.169-.256.342-.216.58-.128.237.089 1.503.71 1.76.837l.143.07c.179.085.3.144.352.23.064.109.064.62-.148 1.222-.218.6-1.267 1.176-1.742 1.22l-.136.016c-.435.053-.987.12-2.956-.655-2.425-.954-4.026-3.32-4.35-3.799a2.738 2.738 0 00-.052-.076l-.006-.008c-.147-.197-1.048-1.402-1.048-2.646 0-1.19.586-1.81.854-2.092l.047-.05a.95.95 0 01.687-.32c.173 0 .346 0 .495.005z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.184 19.331a.4.4 0 00.487.494l4.607-1.204a10 10 0 004.759 1.207h.005c5.486 0 9.958-4.446 9.958-9.912a9.828 9.828 0 00-2.914-7.011A9.917 9.917 0 0010.042 0C4.556 0 .084 4.446.084 9.911c0 1.739.458 3.447 1.33 4.954L.185 19.33zm2.677-4.068a1.5 1.5 0 00-.148-1.15A8.377 8.377 0 011.584 9.91c0-4.63 3.793-8.411 8.458-8.411 2.27 0 4.387.877 5.986 2.468A8.328 8.328 0 0118.5 9.916c0 4.63-3.793 8.412-8.458 8.412h-.005a8.5 8.5 0 01-4.044-1.026 1.5 1.5 0 00-1.094-.132l-2.762.721.724-2.628z"
        fill="#000"
      />
    </svg>
  );
}
export default CTALink;
